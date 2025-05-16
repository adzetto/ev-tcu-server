import React, { Suspense, useRef, useState, useEffect, useImperativeHandle, forwardRef, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  ContactShadows,
  PerspectiveCamera,
  Float,
  SpotLight,
  Preload,
  Html,
  Bvh,
  BakeShadows
} from '@react-three/drei';
import * as THREE from 'three';
import { loadOptimizedModel } from '../../utils/ModelOptimizer';

/**
 * @file Advanced 3D Model Viewer with physically-based rendering
 * @description High-fidelity visualization component with optimized performance 
 * and photorealistic materials for academic/technical visualization
 * @version 2.1.0
 */

// Helper for creating custom car paint colors
const CAR_COLORS = {
  RED: new THREE.Color('#d81937'),        // Bright red
  BLUE: new THREE.Color('#004a9e'),       // Deep blue
  BLACK: new THREE.Color('#121212'),      // Near black
  SILVER: new THREE.Color('#c5c8d0'),     // Metallic silver
  WHITE: new THREE.Color('#f2f3f5'),      // Pearl white
  GRAY: new THREE.Color('#303234'),       // Gunmetal gray
  YELLOW: new THREE.Color('#ffb81c'),     // Racing yellow
  GREEN: new THREE.Color('#01644a')       // Racing green
};

// Professional technical loading indicator component
const LoadingIndicator = ({ progress = 0 }) => {
  // Simple keyframe animations for minimal visual movement
  const animationStyles = `
  @keyframes pulse-subtle {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }
  `;

  // Inject animation styles into component
  useEffect(() => {
    // Add the animation styles if they don't already exist
    if (!document.getElementById('technical-loading-animations')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'technical-loading-animations';
      styleElement.innerHTML = animationStyles;
      document.head.appendChild(styleElement);
      
      return () => {
        // Clean up the styles when component unmounts
        const element = document.getElementById('technical-loading-animations');
        if (element) {
          document.head.removeChild(element);
        }
      };
    }
  }, []);

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-voltaris-neutral-50 p-4 rounded border border-voltaris-neutral-300 overflow-hidden relative">
        {/* Simple top border indicator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-voltaris-blue"></div>
        
        {/* Main content with clean layout */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Simple loading status title */}
          <div className="text-center mb-3">
            <h3 className="text-base font-mono text-voltaris-blue uppercase tracking-wider">
              Yükleniyor
            </h3>
            <p className="text-voltaris-neutral-600 text-xs mt-1 font-mono">3D Model</p>
          </div>
          
          {/* Clean progress indicator */}
          <div className="mb-2 text-center">
            <div className="inline-block h-10 w-10 border-2 border-voltaris-neutral-300 rounded-full flex items-center justify-center">
              <span className="text-sm text-voltaris-neutral-700 font-mono">{Math.floor(progress)}%</span>
            </div>
          </div>
          
          {/* Simple progress bar */}
          <div className="w-48 h-1 bg-voltaris-neutral-200 rounded-full overflow-hidden mt-2 mb-3">
            <div className="h-full bg-voltaris-blue transition-all duration-300 ease-out"
                 style={{ width: `${progress}%` }}>
            </div>
          </div>
          
          {/* Technical loading phase indicator */}
          <div className="text-xs text-voltaris-neutral-600 font-mono text-center" style={{ minHeight: '1rem' }}>
            {progress < 25 && "Geometri yükleniyor"}
            {progress >= 25 && progress < 50 && "Doku haritaları işleniyor"}
            {progress >= 50 && progress < 75 && "Malzemeler hazırlanıyor"}
            {progress >= 75 && progress < 100 && "Aydınlatma optimize ediliyor"}
            {progress >= 100 && "Model hazır"}
          </div>
        </div>
      </div>
    </Html>
  );
};

// Update the ReflectiveFloor component for a lighter, more academic look
function ReflectiveFloor() {
  return (
    <mesh 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, -1.7, 0]} 
      receiveShadow
    >
      <planeGeometry args={[30, 30, 1, 1]} />
      <meshStandardMaterial
        color="#F1F5F9" // Light background
        metalness={0.2}
        roughness={0.7}
        envMapIntensity={0.5}
      />
    </mesh>
  );
}

// Enhanced lighting setup for a lighter theme
function EnhancedPBRLighting({ intensity = 1 }) {
  return (
    <>
      {/* Main light */}
      <ambientLight intensity={0.4 * intensity} />
      
      {/* Key light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1 * intensity}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Fill light */}
      <directionalLight
        position={[-10, 8, -5]}
        intensity={0.6 * intensity}
        castShadow
      />
      
      {/* Rim light */}
      <pointLight
        position={[0, 6, -10]}
        intensity={0.5 * intensity}
        color="#ffffff"
      />
      
      {/* Bottom fill light */}
      <pointLight
        position={[0, -5, 0]}
        intensity={0.2 * intensity}
        color="#ccccff"
      />
    </>
  );
}

// Optimized car model with performance enhancements
function OptimizedCarModel({ carColor = 'RED' }) {
  const modelPath = process.env.PUBLIC_URL + '/models/model_3d.gltf';
  const groupRef = useRef();
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [renderReady, setRenderReady] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  // Define our primary car color - Use the selected color or default to RED
  const primaryColor = CAR_COLORS[carColor] || CAR_COLORS.RED;
  
  // Load model effect
  useEffect(() => {
    let isMounted = true;
    console.log("Loading optimized model...");

    const loadModel = async () => {
      try {
        // Set progress to show work is starting
        if (isMounted) {
          setLoadProgress(5);
        }
        
        const optimizedModel = await loadOptimizedModel(
          modelPath,
          (progress) => {
            console.log(`Loading model: ${progress.toFixed(1)}%`);
            if (isMounted) {
              // Adjust progress to leave room for processing stage
              setLoadProgress(Math.min(80, progress));
            }
          }
        );
        
        if (isMounted) {
          // Update progress to indicate material processing is happening
          setLoadProgress(85);
          
          // Apply materials and optimizations
          optimizedModel.traverse((child) => {
            if (child.isMesh) {
              // Enable high-quality mesh features
              child.frustumCulled = true;
              child.castShadow = true;
              child.receiveShadow = true;

              // Enhance geometry
              if (child.geometry) {
                child.geometry.computeVertexNormals();
              }

              // Apply realistic automotive materials
              if (child.material) {
                // Create a new material to avoid shared material issues
                let newMaterial;
                const materialName = child.material.name ? child.material.name.toLowerCase() : '';
                const objName = child.name ? child.name.toLowerCase() : '';
                
                // Determine material type from object/material name
                const isBody = objName.includes('body') || objName.includes('car') || 
                               objName.includes('chassis') || materialName.includes('body') ||
                               materialName.includes('paint') || materialName.includes('car');
                
                const isGlass = objName.includes('glass') || objName.includes('window') || 
                                objName.includes('windshield') || materialName.includes('glass');
                
                const isChrome = objName.includes('chrome') || objName.includes('metal') || 
                                 objName.includes('steel') || materialName.includes('chrome');
                
                const isInterior = objName.includes('interior') || objName.includes('seat') || 
                                   objName.includes('dash') || materialName.includes('interior');
                
                const isTire = objName.includes('tire') || objName.includes('wheel') || 
                               materialName.includes('rubber') || materialName.includes('tire');
                
                const isHeadlight = objName.includes('light') || objName.includes('lamp') || 
                                    materialName.includes('light');

                if (isBody) {
                  // Car body with glossy metallic paint
                  newMaterial = new THREE.MeshStandardMaterial({
                    color: primaryColor,
                    metalness: 0.9,
                    roughness: 0.15,
                    envMapIntensity: 2.0
                  });
                } else if (isGlass) {
                  // Window glass
                  newMaterial = new THREE.MeshStandardMaterial({
                    color: new THREE.Color('#203040'),
                    metalness: 0.8,
                    roughness: 0.1,
                    transparent: true,
                    opacity: 0.7,
                    envMapIntensity: 1.5
                  });
                } else if (isChrome) {
                  // Chrome trim
                  newMaterial = new THREE.MeshStandardMaterial({
                    color: new THREE.Color('#e8e8e8'),
                    metalness: 1.0,
                    roughness: 0.03,
                    envMapIntensity: 3.0
                  });
                } else if (isInterior) {
                  // Car interior
                  newMaterial = new THREE.MeshStandardMaterial({
                    color: new THREE.Color('#202020'),
                    metalness: 0.1,
                    roughness: 0.8
                  });
                } else if (isTire) {
                  // Tires
                  newMaterial = new THREE.MeshStandardMaterial({
                    color: new THREE.Color('#101010'),
                    metalness: 0.0,
                    roughness: 1.0
                  });
                } else if (isHeadlight) {
                  // Headlights
                  newMaterial = new THREE.MeshStandardMaterial({
                    color: new THREE.Color('#ffffff'),
                    emissive: new THREE.Color('#ffffe0'),
                    emissiveIntensity: 0.5,
                    metalness: 0.8,
                    roughness: 0.1
                  });
                } else {
                  // Default material for other parts
                  newMaterial = new THREE.MeshStandardMaterial({
                    color: child.material.color || new THREE.Color('#505050'),
                    metalness: 0.7,
                    roughness: 0.2
                  });
                }
                
                // Copy textures from original material if they exist
                if (child.material.map) {
                  newMaterial.map = child.material.map;
                  newMaterial.map.anisotropy = 16;
                }
                
                if (child.material.normalMap) {
                  newMaterial.normalMap = child.material.normalMap;
                }
                
                // Apply the new material
                child.material = newMaterial;
              }
            }
          });
          
          // Update progress again
          setLoadProgress(95);
          
          // Set the model first
          setModel(optimizedModel);
          
          // Small delay to ensure materials are properly applied before hiding the loader
          setTimeout(() => {
            if (isMounted) {
              setLoadProgress(100);
              
              // Additional delay to show 100% complete state before removing loader
              setTimeout(() => {
                if (isMounted) {
                  setIsLoading(false);
                  setRenderReady(true);
                  console.log("Model loaded successfully with enhanced materials");
                }
              }, 800);
            }
          }, 500);
        }
      } catch (error) {
        console.error('Failed to load model:', error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadModel();
    
    return () => {
      isMounted = false;
    };
  }, [primaryColor, modelPath]);

  const handlePointerOver = () => setHovered(true);
  const handlePointerOut = () => setHovered(false);

  // Add subtle continuous rotation with safe early return
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    if (hovered) {
      // Slower rotation when hovered
      groupRef.current.rotation.y += delta * 0.005;
    } else {
      // Normal rotation speed
      groupRef.current.rotation.y += delta * 0.01;
    }
  });

  if (isLoading) {
    return <LoadingIndicator progress={loadProgress} />;
  }

  return (
    <group ref={groupRef}>
      {renderReady && model && (
        <Bvh>
          <primitive 
            object={model} 
            scale={1} 
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          />
        </Bvh>
      )}
    </group>
  );
}

const EnhancedModelViewer = forwardRef((props, ref) => {
  const [orbitEnabled, setOrbitEnabled] = useState(true);
  const controlsRef = useRef();
  const [environment, setEnvironment] = useState(props.initialEnvironment || 'city');
  const [lightIntensity, setLightIntensity] = useState(props.initialLightIntensity || 1);
  const [carColor, setCarColor] = useState(props.initialCarColor || 'RED');
  
  // Expose methods to parent components
  useImperativeHandle(ref, () => ({
    resetCameraView: () => {
      if (controlsRef.current) {
        controlsRef.current.reset();
      }
    },
    toggleRotation: () => {
      setOrbitEnabled(!orbitEnabled);
    },
    // Add a property to check rotation state
    get isRotating() {
      return orbitEnabled;
    },
    // Add methods to control environment and lighting
    setEnvironment: (preset) => {
      setEnvironment(preset);
    },
    setLightIntensity: (intensity) => {
      setLightIntensity(intensity);
    },
    // Add method to change car color
    setCarColor: (color) => {
      setCarColor(color);
    }
  }));
  
  return (
    <div className="w-full h-full" style={{ position: 'relative', overflow: 'hidden' }}>
      <Canvas
        shadows
        camera={{ position: [3, 1.5, 3], fov: 45 }}
        dpr={[1, 2]} // Responsive pixel ratio
        gl={{ 
          antialias: true,
          preserveDrawingBuffer: true,
          logarithmicDepthBuffer: true
        }}
        style={{ background: '#f8fafc' }} // Using voltaris-neutral-50 color
      >
        <Suspense fallback={<LoadingIndicator progress={0} />}>
          <Bvh>
            <EnhancedPBRLighting intensity={lightIntensity} />
            <Float
              speed={1.5}
              rotationIntensity={0.1}
              floatIntensity={0.2}
              enabled={false}
            >
              <OptimizedCarModel carColor={carColor} />
            </Float>
            <ReflectiveFloor />
            <Environment preset={environment} />
          </Bvh>
          <Preload all />
          <BakeShadows />
        </Suspense>
        
        <OrbitControls 
          ref={controlsRef}
          enablePan={false}
          enableZoom={true}
          enableRotate={orbitEnabled}
          minDistance={2}
          maxDistance={10}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2 - 0.1}
          makeDefault
        />
        <PerspectiveCamera 
          makeDefault 
          fov={45} 
          position={[3, 1.5, 3]}
          near={0.1}
          far={100}
        />
      </Canvas>
      
      {/* Kontrol butonları üst düzey bileşende olduğu için buradan kaldırıldı */}
    </div>
  );
});

export default EnhancedModelViewer;