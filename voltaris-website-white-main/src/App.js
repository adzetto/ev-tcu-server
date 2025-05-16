import React, { useState, useEffect, useRef, useCallback, Suspense, lazy } from 'react';
import { 
  ChevronDown, Menu, X, 
  ChevronRight, Cpu, Terminal, Camera, BellRing,
  GitMerge, Linkedin, Mail, Phone, Instagram, AlertTriangle, Navigation, Eye, Sun, CircuitBoard, 
  ArrowRight, BarChart, Activity, Zap, ChevronUp, PlusCircle, MinusCircle, Battery, Scale, Gauge, FileText
} from "lucide-react";
import * as THREE from 'three';
import ExpandableSection from './components/ExpandableSection';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import TechnicalDataViz from './TechnicalDataViz';
import SponsorshipModal from './SponsorshipModal';
import teamData from './teamData';
import { TeamStats, SponsorShowcase } from './TeamComponents';
import { FlowingCircuitEntryAnimation, CircuitLoadingAnimation, ProfessionalOrgChart } from './components/new';
import AdasSystemArchitecture, { LaneDetectionDiagram, TrafficSignDetectionDiagram, CruiseControlSystemDiagram, BlindSpotDetectionDiagram } from './AdasSvgComponents';
import TechnicalModelViewer from './components/TechnicalModelViewer';
import EnhancedSponsorsBar from './components/EnhancedSponsorsBar';
import MobileMenuFallback from './components/MobileMenuFallback';
import './components/PlatinumStyles.css';
import './components/MobileMenu.css';
import './styles.css';
import './latex-styles.css';
import './advanced-latex.css';
import './components/BoxStyles.css';
import './components/ProfessionalPureWhite.css';
import './components/ProfessionalFonts.css';
import './components/AnnouncementHoverEffects.css';
import { useParallax, useScrollAnimation, useTechnicalSpecsAnimation } from './hooks/useInteractive';
import { setupOptimizers } from './utils/ModelOptimizer';
import { initMenuVisibilityController, updateMenuButtonVisibility } from './utils/MenuVisibilityController';
import { fixMobileMenuOnOpen, fixMobileMenuOnClose, fixTechnicalSubmenu, initMobileMenuFix, forceEnableScrolling } from './utils/MobileMenuFix';
import { SoftDesignShowcase } from './components/SoftDesignElements';
import { VehicleSpecifications, AdasSystemsSpecs } from './components/TechnicalSpecs';
import VehicleSpecsSection from './components/VehicleSpecsSection';
import AdasSpecsSection from './components/AdasSpecsSection';
import ContactForm from './components/ContactForm';
import ScrollIndicatorBar from './components/ui/ScrollIndicatorBar';
import AnnouncementButton from './components/AnnouncementButton';
import SimpleAnnouncementButton from './components/SimpleAnnouncementButton';
import { GoldSponsorship } from './components/platinum-effects';
// Import EnvironmentControls at the top of the file
// import EnvironmentControls from './components/EnvironmentControls';

// Initialize optimizers
setupOptimizers();

// Limit texture sizes for better performance
THREE.TextureLoader.prototype.crossOrigin = 'anonymous';
THREE.Cache.enabled = true;

// Set default pixel ratio for better performance
if (window.devicePixelRatio > 2) {
  // Create a temporary renderer to set pixel ratio
  const tempRenderer = new THREE.WebGLRenderer();
  tempRenderer.setPixelRatio(2); // Cap at 2x for better performance
  tempRenderer.dispose();
}

// ADAS Components Implementation
export const AdasFeatureCard = ({ title, description, icon, color = "red", imageUrl }) => {
  const colorClasses = {
    red: "from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-red-500",
    blue: "from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-blue-500"
  };
  
  return (
    <div className="bg-voltaris-light-blue/20 backdrop-blur-md rounded-lg overflow-hidden border border-voltaris-neutral-300 h-full relative group">
      {/* Technical background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <div className="circuit-pattern w-full h-full"></div>
      </div>
      
      {/* Feature image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-voltaris-neutral-800 via-transparent to-transparent opacity-70"></div>
        <div className={`absolute top-4 right-4 p-2 rounded-full bg-voltaris-light/50 ${color === 'red' ? 'text-voltaris-red' : 'text-voltaris-blue'}`}>
          {icon}
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <h4 className={`font-bold text-lg mb-3 ${color === 'red' ? 'text-voltaris-red' : 'text-voltaris-blue'}`}>{title}</h4>
        <p className="text-voltaris-neutral-700 text-sm leading-relaxed">{description}</p>
        
        <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${colorClasses[color]} mt-4 transition-all duration-300 ease-in-out`}></div>
      </div>
    </div>
  );
};

export const AdasTechnicalDiagram = () => {
  return (
    <div className="bg-voltaris-neutral-100 backdrop-blur-sm p-6 rounded-lg border border-voltaris-neutral-300 relative overflow-hidden">
      {/* Circuit pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="circuit-pattern w-full h-full"></div>
      </div>
      
      <div className="relative z-10">
        <h4 className="text-xl font-bold mb-6 text-voltaris-red">ADAS Sistem Mimarisi (Planlanan)</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-voltaris-light backdrop-blur-sm p-4 rounded-lg border border-voltaris-blue/30">
            <h5 className="text-voltaris-blue font-medium mb-2 flex items-center">
              <Terminal size={18} className="mr-2" />
              İşlem Birimi
            </h5>
            <ul className="text-sm text-voltaris-neutral-600 space-y-1">
              <li className="flex items-start">
                <div className="text-voltaris-blue mr-2">•</div>
                <div>Raspberry Pi 5 - 8GB RAM</div>
              </li>
              <li className="flex items-start">
                <div className="text-voltaris-blue mr-2">•</div>
                <div>Gerçek zamanlı görüntü işleme</div>
              </li>
              <li className="flex items-start">
                <div className="text-voltaris-blue mr-2">•</div>
                <div>STM32F407 ile CAN haberleşmesi</div>
              </li>
            </ul>
          </div>
          
          <div className="bg-voltaris-light backdrop-blur-sm p-4 rounded-lg border border-voltaris-red/30">
            <h5 className="text-voltaris-red font-medium mb-2 flex items-center">
              <Camera size={18} className="mr-2" />
              Sensör Birimi
            </h5>
            <ul className="text-sm text-voltaris-neutral-600 space-y-1">
              <li className="flex items-start">
                <div className="text-voltaris-red mr-2">•</div>
                <div>1280x960 USB Kamera</div>
              </li>
              <li className="flex items-start">
                <div className="text-voltaris-red mr-2">•</div>
                <div>RD-03D Çoklu Nesne Algılama Radarı</div>
              </li>
              <li className="flex items-start">
                <div className="text-voltaris-red mr-2">•</div>
                <div>BH1750 Ortam Işığı Sensörü</div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 via-voltaris-light to-purple-100 p-6 rounded-lg border border-purple-300 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-200 mt-6">
              <div className="flex items-center mb-4">
                <div className="text-purple-600 mr-3">
                  <Sun size={24} />
                </div>
                <h3 className="text-xl font-bold text-purple-700">Otomatik Far Sistemi</h3>
              </div>
              <div className="latex-style-box bg-voltaris-neutral-100 p-4 rounded-lg border border-purple-300">
                <div className="text-voltaris-neutral-800 math-formula purple-formula academic-formula">
                  <div className="formula-heading">Ortam Işığı Algılama</div>
                  <div className="formula-content">
                    <p>Sensör: BH1750 Ortam Işığı Modülü</p>
                    <p>Protokol: I<sup>2</sup>C Haberleşme</p>
                    <p>Eşik: I<sub>threshold</sub> = 10 lux</p>
                    <p>Kontrol İşlemi: L(I) = I &lt; I<sub>threshold</sub> ? "AÇIK" : "KAPALI"</p>
                  </div>
                  <div className="formula-parameters">Hassasiyet: 1-65535 lux | Çözünürlük: 1 lux</div>
                </div>
                <p className="text-voltaris-neutral-700 mt-3">
                  BH1750 ortam ışığı sensörü ile ortam karanlığı algılandığında otomatik olarak araç farları aktif edilir.
                </p>
              </div>
            </div>
        </div>
        
        {/* Connection diagram */}
        <div className="mt-8 relative">
          <svg className="w-full h-64" viewBox="0 0 800 200">
            {/* Central processing unit */}
            <rect x="350" y="80" width="100" height="50" rx="5" fill="none" stroke="#FF4254" strokeWidth="2" />
            <text x="400" y="110" className="text-sm" textAnchor="middle" fill="#FF4254">Raspberry Pi 5</text>
            
            {/* Left side inputs */}
            <rect x="100" y="30" width="120" height="30" rx="5" fill="none" stroke="#0044FF" strokeWidth="2" />
            <text x="160" y="50" className="text-sm" textAnchor="middle" fill="#0044FF">Kamera</text>
            <path d="M220 45 L350 90" stroke="#0044FF" strokeWidth="2" fill="none" strokeDasharray="5,5" />
            
            <rect x="100" y="80" width="120" height="30" rx="5" fill="none" stroke="#0044FF" strokeWidth="2" />
            <text x="160" y="100" className="text-sm" textAnchor="middle" fill="#0044FF">Radar</text>
            <path d="M220 95 L350 105" stroke="#0044FF" strokeWidth="2" fill="none" strokeDasharray="5,5" />
            
            <rect x="100" y="130" width="120" height="30" rx="5" fill="none" stroke="#0044FF" strokeWidth="2" />
            <text x="160" y="150" className="text-sm" textAnchor="middle" fill="#0044FF">Işık Sensörü</text>
            <path d="M220 145 L350 120" stroke="#0044FF" strokeWidth="2" fill="none" strokeDasharray="5,5" />
            
            {/* Right side outputs */}
            <rect x="580" y="30" width="120" height="30" rx="5" fill="none" stroke="#FF4254" strokeWidth="2" />
            <text x="640" y="50" className="text-sm" textAnchor="middle" fill="#FF4254">Ekran</text>
            <path d="M450 90 L580 45" stroke="#FF4254" strokeWidth="2" fill="none" strokeDasharray="5,5" />
            
            <rect x="580" y="80" width="120" height="30" rx="5" fill="none" stroke="#FF4254" strokeWidth="2" />
            <text x="640" y="100" className="text-sm" textAnchor="middle" fill="#FF4254">AKS</text>
            <path d="M450 105 L580 95" stroke="#FF4254" strokeWidth="2" fill="none" strokeDasharray="5,5" />
            
            <rect x="580" y="130" width="120" height="30" rx="5" fill="none" stroke="#FF4254" strokeWidth="2" />
            <text x="640" y="150" className="text-sm" textAnchor="middle" fill="#FF4254">Uyarı Sistemi</text>
            <path d="M450 120 L580 145" stroke="#FF4254" strokeWidth="2" fill="none" strokeDasharray="5,5" />
          </svg>
          
          {/* Technical decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
            <div className="circuit-dots w-full h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function for placeholder images (used by imported components)
// eslint-disable-next-line no-unused-vars
const getPlaceholderImage = (width, height, color = "0A0A14") => {
  return `https://via.placeholder.com/${width}x${height}/${color}/FF4254?text=VOLTARIS`;
};

// Enhanced 3D Car Model Component with advanced interactivity
const CarModel = () => {
  const group = useRef();
  const bodyRef = useRef();
  const wheelsRef = useRef([]);
  const lightsRef = useRef([]);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [activePart, setActivePart] = useState(null);
  const [specs, setSpecs] = useState({});
  const [modelLoaded, setModelLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  
  useEffect(() => {
    // Store the ref in a variable to avoid React warnings
    const currentGroup = group.current;
    wheelsRef.current = [];
    lightsRef.current = [];
    
    if (!currentGroup) return;
    
    // Create a path to our 3D model, using the correct public URL path
    const modelPath = `${process.env.PUBLIC_URL}/3D/model_3d/model_3d.draco.gltf`;
    
    // Set up DRACO decoder - use the generic CDN for broader compatibility
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    dracoLoader.setDecoderConfig({ type: 'js' }); // Use JS decoder for compatibility
    
    // Configure the GLTF loader with DRACO support
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);
    
    try {
      // First attempt to fetch to detect any network issues
      fetch(modelPath)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch model: ${response.status} ${response.statusText}`);
          }
          return response;
        })
        .catch(error => {
          console.error('Model fetch error:', error);
          // Create fallback model if fetch fails
          if (currentGroup) {
            const fallbackModel = createFallbackModel();
            currentGroup.add(fallbackModel);
            setModelLoaded(true);
          }
        });
      
      // Use GLTFLoader with progress tracking
      gltfLoader.load(
        modelPath,
        (gltf) => {
          if (currentGroup) {
            // Performance optimization: disable matrixAutoUpdate for static parts
            gltf.scene.traverse((child) => {
              if (child.isMesh) {
                // Identify car parts for interactive features
                if (child.name.includes('body') || child.name.includes('chassis')) {
                  bodyRef.current = child;
                } else if (child.name.includes('wheel')) {
                  wheelsRef.current.push(child);
                } else if (child.name.includes('light') || child.name.includes('lamp')) {
                  lightsRef.current.push(child);
                }
                
                // Performance optimizations
                child.matrixAutoUpdate = false;
                child.frustumCulled = true;
                
                // Only allow large objects to cast shadows for better performance
                const boundingBox = new THREE.Box3().setFromObject(child);
                const size = boundingBox.getSize(new THREE.Vector3());
                const maxDimension = Math.max(size.x, size.y, size.z);
                child.castShadow = maxDimension > 0.5;
                child.receiveShadow = true;
                
                // Apply optimized materials
                if (child.material) {
                  // Optimize textures
                  if (child.material.map) {
                    child.material.map.anisotropy = 4; // Good balance of quality/performance
                    child.material.map.minFilter = THREE.LinearFilter;
                  }
                  
                  // Set material properties for better performance
                  if (child.name.includes('body')) {
                    child.material = new THREE.MeshPhysicalMaterial({
                      color: new THREE.Color(0x2a2a2a),
                      metalness: 0.9,
                      roughness: 0.1,
                      clearcoat: 0.5,
                      clearcoatRoughness: 0.1
                    });
                  } else if (child.name.includes('window') || child.name.includes('glass')) {
                    child.material = new THREE.MeshPhysicalMaterial({
                      color: new THREE.Color(0xffffff),
                      transmission: 0.9,
                      transparent: true,
                      metalness: 0.1,
                      roughness: 0.05
                    });
                  } else if (child.name.includes('light') || child.name.includes('lamp')) {
                    child.material = new THREE.MeshBasicMaterial({
                      color: new THREE.Color(0xffffff),
                      emissive: new THREE.Color(0xffffaa),
                      emissiveIntensity: 1.0
                    });
                  }
                }
                
                // Update matrix once
                child.updateMatrix();
              }
            });
            
            // Add the model to our scene
            currentGroup.add(gltf.scene);
            setModelLoaded(true);
            
            // Extract specs from the model for information display
            setSpecs({
              polygons: getPolygonCount(gltf.scene),
              materials: getMaterialCount(gltf.scene),
              textures: getTextureCount(gltf.scene)
            });
          }
          
          // Clean up DRACO loader
          dracoLoader.dispose();
        },
        // Progress callback
        (xhr) => {
          if (xhr.lengthComputable) {
            const percentComplete = Math.round((xhr.loaded / xhr.total) * 100);
            setLoadProgress(percentComplete);
          }
        },
        // Error callback
        (error) => {
          console.error('Error loading 3D model:', error);
          setLoadError(true);
          
          // Create fallback model if loading fails
          if (currentGroup) {
            const fallbackModel = createFallbackModel();
            currentGroup.add(fallbackModel);
            setModelLoaded(true);
          }
        }
      );
    } catch (error) {
      console.error('Error setting up 3D model loader:', error);
      setLoadError(true);
      
      // Create fallback model on error
      if (currentGroup) {
        const fallbackModel = createFallbackModel();
        currentGroup.add(fallbackModel);
        setModelLoaded(true);
      }
    }
    
    // Clean up function to remove the model when component unmounts
    return () => {
      if (currentGroup) {
        // Dispose of geometries and textures to prevent memory leaks
        currentGroup.traverse((child) => {
          if (child.isMesh) {
            child.geometry.dispose();
            if (child.material.map) child.material.map.dispose();
            child.material.dispose();
          }
        });
        
        // Remove all children
        while (currentGroup.children.length > 0) {
          currentGroup.remove(currentGroup.children[0]);
        }
      }
    };
  }, []); // No need for dependencies here
  
  // Helper functions to get model statistics
  const getPolygonCount = (model) => {
    let polygons = 0;
    model.traverse((child) => {
      if (child.isMesh && child.geometry) {
        polygons += child.geometry.attributes.position.count / 3;
      }
    });
    return Math.round(polygons);
  };
  
  const getMaterialCount = (model) => {
    const materials = new Set();
    model.traverse((child) => {
      if (child.isMesh && child.material) {
        materials.add(child.material);
      }
    });
    return materials.size;
  };
  
  const getTextureCount = (model) => {
    const textures = new Set();
    model.traverse((child) => {
      if (child.isMesh && child.material) {
        if (child.material.map) textures.add(child.material.map);
        if (child.material.normalMap) textures.add(child.material.normalMap);
        if (child.material.roughnessMap) textures.add(child.material.roughnessMap);
        if (child.material.metalnessMap) textures.add(child.material.metalnessMap);
      }
    });
    return textures.size;
  };
  
  // Creates a simple fallback model if the main model fails to load
  const createFallbackModel = () => {
    const fallbackGroup = new THREE.Group();
    
    // Create a simple car body
    const bodyGeometry = new THREE.BoxGeometry(2, 0.6, 4);
    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x2a2a2a,
      metalness: 0.9,
      roughness: 0.2,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.6;
    fallbackGroup.add(body);
    
    // Create wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 16);
    const wheelMaterial = new THREE.MeshPhongMaterial({ color: 0x111111 });
    
    // Front-left wheel
    const wheelFL = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheelFL.rotation.z = Math.PI / 2;
    wheelFL.position.set(-1, 0.4, -1.2);
    fallbackGroup.add(wheelFL);
    wheelsRef.current.push(wheelFL);
    
    // Front-right wheel
    const wheelFR = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheelFR.rotation.z = Math.PI / 2;
    wheelFR.position.set(1, 0.4, -1.2);
    fallbackGroup.add(wheelFR);
    wheelsRef.current.push(wheelFR);
    
    // Rear-left wheel
    const wheelRL = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheelRL.rotation.z = Math.PI / 2;
    wheelRL.position.set(-1, 0.4, 1.2);
    fallbackGroup.add(wheelRL);
    wheelsRef.current.push(wheelRL);
    
    // Rear-right wheel
    const wheelRR = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheelRR.rotation.z = Math.PI / 2;
    wheelRR.position.set(1, 0.4, 1.2);
    fallbackGroup.add(wheelRR);
    wheelsRef.current.push(wheelRR);
    
    // Create windows/cabin
    const cabinGeometry = new THREE.BoxGeometry(1.8, 0.5, 2);
    const cabinMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0,
      roughness: 0,
      transmission: 0.9,
      transparent: true
    });
    const cabin = new THREE.Mesh(cabinGeometry, cabinMaterial);
    cabin.position.set(0, 1.1, 0);
    fallbackGroup.add(cabin);
    
    // Create lights
    const lightGeometry = new THREE.BoxGeometry(0.3, 0.1, 0.1);
    const lightMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffaa,
      emissive: 0xffffaa
    });
    
    // Front lights
    const lightFL = new THREE.Mesh(lightGeometry, lightMaterial);
    lightFL.position.set(-0.7, 0.7, -2);
    fallbackGroup.add(lightFL);
    lightsRef.current.push(lightFL);
    
    const lightFR = new THREE.Mesh(lightGeometry, lightMaterial);
    lightFR.position.set(0.7, 0.7, -2);
    fallbackGroup.add(lightFR);
    lightsRef.current.push(lightFR);
    
    return fallbackGroup;
  };
  
  const handlePointerOver = (e, part) => {
    if (!modelLoaded) return;
    e.stopPropagation();
    setHovered(true);
    setActivePart(part);
  };
  
  const handlePointerOut = (e) => {
    if (!modelLoaded) return;
    e.stopPropagation();
    setHovered(false);
    setActivePart(null);
  };
  
  const handleClick = (e, part) => {
    if (!modelLoaded) return;
    e.stopPropagation();
    setClicked(!clicked);
    setActivePart(part);
  };
  
  useFrame((state) => {
    if (group.current) {
      // More dynamic rotation based on clicked state
      if (clicked) {
        // Faster rotation when clicked
        group.current.rotation.y += 0.01;
      } else {
        // Standard smooth rotation when not clicked
        group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2 + Math.PI / 4;
      }
      
      // Enhanced floating motion
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05 - 0.7;
      
      // Animate wheels if available
      wheelsRef.current.forEach(wheel => {
        if (wheel) {
          wheel.rotation.z += 0.01; // Spinning wheels effect
        }
      });
      
      // Pulse lights if available
      lightsRef.current.forEach(light => {
        if (light && light.material) {
          light.material.emissiveIntensity = 0.5 + Math.sin(state.clock.getElapsedTime() * 3) * 0.5;
        }
      });
      
      // Scale effect when part is hovered
      if (bodyRef.current) {
        if (activePart === 'body' && hovered) {
          bodyRef.current.scale.set(1.05, 1.05, 1.05);
        } else {
          bodyRef.current.scale.set(1, 1, 1);
        }
      }
    }
  });
  
  // Render loading indicator if model is not yet loaded
  if (!modelLoaded && !loadError) {
    return (
      <group>
        {/* Yükleme göstergesi */}
        <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#444444" />
        </mesh>
        <Text 
        position={[0, -1, 0]} 
        color="white"
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        >
        {`Model yükleniyor... ${loadProgress}%`}
        </Text>
      </group>
    );
  }
  
  // Warning for loading errors
  if (loadError) {
    return (
      <group>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#FF4254" />
        </mesh>
        <Text 
          position={[0, -1, 0]} 
          color="#FF4254"
          fontSize={0.2}
          anchorX="center"
          anchorY="middle"
        >
          Model yüklenemedi
        </Text>
      </group>
    );
  }
  
  return (
    <group 
      ref={group} 
      position={[0, 0, 0]}
      onPointerOver={(e) => handlePointerOver(e, 'model')}
      onPointerOut={handlePointerOut}
      onClick={(e) => handleClick(e, 'model')}
    >
      {/* Model will be added to this group via useEffect */}
      
      {/* Display technical specs if model is loaded */}
      {modelLoaded && specs.polygons && (
        <group position={[2, 0, 0]}>
          <Text
            position={[0, 0.5, 0]} 
            color="#FF4254"
            fontSize={0.15}
            anchorX="left"
            anchorY="middle"
          >
            {`Poligonlar: ${specs.polygons.toLocaleString()}`}
          </Text>
          <Text
            position={[0, 0.2, 0]} 
            color="#FF4254"
            fontSize={0.15}
            anchorX="left"
            anchorY="middle"
          >
            {`Materyaller: ${specs.materials}`}
          </Text>
          <Text
            position={[0, -0.1, 0]} 
            color="#FF4254"
            fontSize={0.15}
            anchorX="left"
            anchorY="middle"
          >
            {`Dokular: ${specs.textures}`}
          </Text>
        </group>
      )}
    </group>
  );
};

// Scene setup with lighting - not used directly, but needed for definition
// eslint-disable-next-line no-unused-vars
const Scene = () => {
  const floorRef = useRef();
  const gridRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });
  // eslint-disable-next-line no-unused-vars
  const { viewport, camera } = useThree();
  
  // Track mouse position for interactive lighting
  const updateMousePos = useCallback(({ clientX, clientY }) => {
    mousePos.current = {
      x: (clientX / window.innerWidth) * 2 - 1,
      y: -(clientY / window.innerHeight) * 2 + 1
    };
  }, []);
  
  useEffect(() => {
    window.addEventListener('mousemove', updateMousePos);
    return () => window.removeEventListener('mousemove', updateMousePos);
  }, [updateMousePos]);
  
  useFrame((state) => {
    if (floorRef.current) {
      // Create a ripple effect on the floor
      floorRef.current.material.displacementScale = 0.1 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
    }
    
    if (gridRef.current) {
      // Pulse the grid with mouse movement
      const targetX = mousePos.current.x * 0.5;
      const targetY = mousePos.current.y * 0.5;
      gridRef.current.rotation.x = THREE.MathUtils.lerp(gridRef.current.rotation.x, targetY * 0.2, 0.05);
      gridRef.current.rotation.y = THREE.MathUtils.lerp(gridRef.current.rotation.y, targetX * 0.2, 0.05);
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.8} 
        castShadow 
        shadow-mapSize-width={2048} 
        shadow-mapSize-height={2048} 
      />
      <spotLight position={[-10, 10, 5]} intensity={0.5} castShadow angle={0.3} />
      
      {/* Dynamic accent lights that follow mouse position */}
      <pointLight 
        position={[5 + mousePos.current.x * 3, 5 + mousePos.current.y * 2, -5]} 
        intensity={0.5} 
        color="#FF2233" 
      />
      <pointLight 
        position={[-5 - mousePos.current.x * 3, 5 + mousePos.current.y * 2, 5]} 
        intensity={0.5} 
        color="#0044FF" 
      />
      
      <CarModel />
      
      {/* Reflective floor with grid */}
      <mesh 
        ref={floorRef}
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -1, 0]} 
        receiveShadow
      >
        <planeGeometry args={[30, 30, 50, 50]} />
        <meshStandardMaterial 
          color="#050505" 
          metalness={0.8} 
          roughness={0.2}
          wireframe={true} 
          emissive="#0033FF"
          emissiveIntensity={0.1}
          displacementScale={0.1}
        />
      </mesh>
      
      {/* Background grid - interactive */}
      <group ref={gridRef} position={[0, 0, -5]}>
        <mesh receiveShadow>
          <planeGeometry args={[50, 30, 20, 20]} />
          <meshStandardMaterial 
            color="#000000"
            wireframe={true}
            emissive="#FF4254"
            emissiveIntensity={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
      
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI/3} maxPolarAngle={Math.PI/2} />
    </>
  );
};

const mobileSlideStyles = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  width: '250px',
  maxWidth: '100%',
  zIndex: 9999,
  overflowY: 'auto'
};

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(true); // Default to open
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  // State declarations (but unused, could be removed later)
  const [sponsorshipModalOpen, setSponsorshipModalOpen] = useState(false);
  const [currentSponsorTier, setCurrentSponsorTier] = useState('platinum');
  const [isMenuTransitioning, setIsMenuTransitioning] = useState(false); // Add this to prevent multiple clicks
  const [modelEnvironment, setModelEnvironment] = useState('city');
  const modelViewerRef = useRef(null);
  
  // Initialize interactive effects
  // useMouseTrail(); // Disabled to improve performance
  useParallax();
  useScrollAnimation();
  useTechnicalSpecsAnimation();
  
  // Update body data attribute and menu visibility when active section changes
  useEffect(() => {
    document.body.setAttribute('data-section', activeSection);
    updateMenuButtonVisibility(activeSection, scrolled, true);
  }, [activeSection, scrolled]);
  
  const [showSignature, setShowSignature] = useState(true);

  useEffect(() => {
    // Simulate loading delay for animation effect
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    // Timer to hide signature after 4 seconds
    const signatureTimer = setTimeout(() => {
      setShowSignature(false);
    }, 4000);
    
    // Initialize the menu visibility controller
    const cleanup1 = initMenuVisibilityController(
      () => activeSection,
      () => scrolled
    );
    
    // Initialize mobile menu fixes
    const cleanup2 = initMobileMenuFix();
    
    // This function ensures scrolling is enabled whenever user tries to scroll
    const handleTouchStart = () => {
      forceEnableScrolling();
    };
    
    // Touch event for mobile to ensure scrolling is enabled
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    
    // Add additional handlers to ensure scrolling is always enabled
    document.addEventListener('touchmove', forceEnableScrolling, { passive: true });
    document.addEventListener('wheel', forceEnableScrolling, { passive: true });
    
    const handleScroll = () => {
      // Ensure scrolling is always enabled
      forceEnableScrolling();
      
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Check if we're in a light section
      const sponsorsSection = document.getElementById('sponsors');
      if (sponsorsSection) {
        const sponsorsRect = sponsorsSection.getBoundingClientRect();
        // If sponsors section is in view
        if (sponsorsRect.top < window.innerHeight && sponsorsRect.bottom > 0) {
          // We can use this information if needed later
        }
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Only trigger transition if we're changing sections
          if (activeSection !== sectionId) {
            setActiveSection(sectionId);
            
            // Update menu button visibility when section changes
            updateMenuButtonVisibility(sectionId, window.scrollY > 50);
          }
        }
      });
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    
    // Initial update for visibility
    updateMenuButtonVisibility(activeSection, scrolled, true);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', forceEnableScrolling);
      document.removeEventListener('wheel', forceEnableScrolling);
      if (cleanup1) cleanup1();
      if (cleanup2) cleanup2();
      clearTimeout(loadingTimer);
      clearTimeout(signatureTimer);
    };
  }, [activeSection]); // Add activeSection as dependency

  // Function for handling mobile menu toggle regardless of section
  const toggleMobileMenu = (e) => {
    if (e) e.preventDefault();
    
    // Prevent multiple rapid clicks during animation
    if (isMenuTransitioning) return;
    
    // Set transitioning state to block additional clicks
    setIsMenuTransitioning(true);
    
    console.log('Toggling mobile menu - current state:', mobileMenuOpen);
    const newMenuState = !mobileMenuOpen;
    setMobileMenuOpen(newMenuState);
    
    if (newMenuState) {
      fixMobileMenuOnOpen();
    } else {
      fixMobileMenuOnClose();
    }
    
    // Direct DOM manipulation as a fallback to ensure menu display works
    const mobilePanel = document.querySelector('.mobile-menu-panel');
    if (mobilePanel) {
      console.log('Applying class to panel:', newMenuState ? 'show' : 'hide');
      if (newMenuState) {
        mobilePanel.classList.remove('hide');
        mobilePanel.classList.add('show');
        mobilePanel.style.transform = 'translateX(0)';
      } else {
        mobilePanel.classList.remove('show');
        mobilePanel.classList.add('hide');
        mobilePanel.style.transform = 'translateX(100%)';
      }
    } else {
      console.log('Mobile panel not found!');
    }
    
    // Release the block after animation completes
    setTimeout(() => {
      setIsMenuTransitioning(false);
    }, 350); // Slightly longer than animation duration (300ms)
  };

  // Function to toggle the technical submenu in mobile view
  const toggleTechnicalSubmenu = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('Toggling technical submenu, current state:', mobileSubmenuOpen);
    const newSubmenuState = !mobileSubmenuOpen;
    setMobileSubmenuOpen(newSubmenuState);
    
    // Apply fix
    fixTechnicalSubmenu(newSubmenuState);
    
    // Direct manipulation of DOM as fallback
    setTimeout(() => {
      const submenu = document.querySelector('.mobile-submenu');
      if (submenu) {
        if (!mobileSubmenuOpen) {
          submenu.classList.add('visible');
          submenu.classList.remove('hidden');
          console.log('Technical submenu visible');
        } else {
          submenu.classList.add('hidden');
          submenu.classList.remove('visible');
          console.log('Technical submenu hidden');
        }
      } else {
        console.log('Technical submenu element not found');
      }
    }, 10);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Ensure menu is closed before scroll animation starts
      if (mobileMenuOpen) {
        // First close menu with short timeout to allow state update
        setMobileMenuOpen(false);
        
        // Force unlock scrolling before attempting to scroll
        forceEnableScrolling();
        
        // Then scroll after a short delay to ensure menu animation completes
        setTimeout(() => {
          // Re-apply scroll unlock in case it was overridden
          forceEnableScrolling();
          
          window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
          });
          setActiveSection(sectionId);
          
          // Final check to ensure scrolling is enabled
          setTimeout(() => {
            forceEnableScrolling();
          }, 100);
        }, 400); // Slightly longer than menu animation duration
      } else {
        // If menu is already closed, scroll immediately
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth'
        });
        setActiveSection(sectionId);
      }
    }
  };

  // Function to open sponsorship modal with the specified tier
  // eslint-disable-next-line no-unused-vars
  const handleOpenSponsorshipModal = (tier) => {
    setCurrentSponsorTier(tier);
    setSponsorshipModalOpen(true);
  };

  // Loading screen
  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center overflow-hidden">
        {/* Professional loading animation with the correct logo */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 flex items-center justify-center">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-5 rounded-full"></div>
          
          {/* Pulsing circle behind logo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-voltaris-blue/10 to-voltaris-red/10 animate-pulse-slow"></div>
          
          {/* Rotating ring animation */}
          <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border-2 md:border-3 border-transparent border-t-voltaris-red border-r-voltaris-blue animate-spin-slow opacity-30"></div>
          
          {/* Technical animated circles */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-voltaris-blue/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping-slow opacity-20"></div>
            <div className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full border border-voltaris-red/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping-slow animation-delay-500 opacity-20"></div>
          </div>
          
          {/* Logo container with subtle float animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center overflow-hidden animate-float">
              <img 
                src={`${process.env.PUBLIC_URL}/logo_kırmızı.png`} 
                alt="Voltaris Logo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain animate-logoFade"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="text-center">
          <div className="text-voltaris-text text-xl font-semibold tracking-wider mb-3 text-center text-fill-animation">VOLTARIS</div>
          <div className="typewriter-text text-xs text-voltaris-neutral-700 mb-4">// DESIGNED_WITH_PASSION_BY_VOLTARIS_TEAM</div>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-voltaris-red animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-voltaris-blue animate-bounce animation-delay-150"></div>
            <div className="w-2 h-2 rounded-full bg-voltaris-red animate-bounce animation-delay-300"></div>
          </div>
        </div>
      </div>
    );
  }

  // Handle environment change
  const handleEnvironmentChange = (envId) => {
    setModelEnvironment(envId);
    if (modelViewerRef.current) {
      modelViewerRef.current.setEnvironment(envId);
    }
  };

  return (
    <div className="App overflow-x-hidden bg-white">
      {/* Add MobileMenuFallback for emergency fixes */}
      <MobileMenuFallback />
      
      {/* Standalone Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-700 focus:outline-none fixed top-5 right-4 z-[9999] mobile-menu-button" 
        onClick={toggleMobileMenu}
        aria-label="Menu Toggle"
        style={{ 
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          padding: '0.6rem',
          borderRadius: '0.375rem',
          display: activeSection === 'home' || window.innerWidth < 768 ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(29, 53, 87, 0.2)',
          border: '1px solid rgba(200, 200, 200, 0.3)',
          width: '42px',
          height: '42px'
        }}
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      {/* Global technical background pattern with hole effect */}
      <div className="fixed inset-0 pointer-events-none z-0 hole-effect">
        <div className="absolute inset-0 bg-circuit-pattern opacity-[0.03]"></div>
        <div className="absolute inset-0 circuit-pattern opacity-[0.02]"></div>
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <path 
            className="circuit-path" 
            d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,100" 
            fill="none" 
            stroke="#FF4254" 
            strokeWidth="0.5" 
          />
          <path 
            className="circuit-path" 
            d="M0,200 Q50,150 100,200 T200,200 T300,200 T400,200" 
            fill="none" 
            stroke="#0044FF" 
            strokeWidth="0.5"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
        
        {/* Add flowing circuit animation on page entry */}
        <FlowingCircuitEntryAnimation />
      </div>
      
      {/* Sponsorship Modal */}
      <SponsorshipModal 
        isOpen={sponsorshipModalOpen}
        onClose={() => setSponsorshipModalOpen(false)}
        currentTier={currentSponsorTier}
      />
      
      {/* Scroll Progress Indicator */}
      <ScrollIndicatorBar />
      
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-500 
        ${scrolled ? 'bg-voltaris-card/95 shadow-lg shadow-voltaris-blue/5 backdrop-blur-md' : 'bg-transparent'}`}
        style={{position: 'fixed', top: 0, left: 0, right: 0}}>
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                id="headerLogo"
                src={`${process.env.PUBLIC_URL}/logo_kırmızı.png`} 
                alt="Voltaris Logo"
                width="40"
                height="40"
                loading="eager"
                className="h-8 w-8 md:h-10 md:w-10 mr-2 md:mr-3 hover:rotate-180 transition-all duration-1000 hover:scale-125" 
              />
              <span 
                className="text-lg md:text-xl font-semibold tracking-wide cursor-pointer"
                onClick={() => {
                  const logo = document.getElementById('headerLogo');
                  if (logo) {
                    // Remove any existing animation classes
                    logo.classList.remove('logo-wheel-spin');
                    
                    // Force a reflow to restart animation
                    void logo.offsetWidth;
                    
                    // Add the wheel spin animation class
                    logo.classList.add('logo-wheel-spin');
                  }
                }}
              >VOLTARIS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {['home', 'about', 'technical', 'sponsors', 'contact'].map((section) => (
              <div key={section} className="relative group">
                <button
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider py-2 font-medium relative 
                    ${activeSection === section || (section === 'technical' && (activeSection === 'vehicle' || activeSection === 'adas')) 
                      ? 'text-voltaris-red border-b border-voltaris-red' 
                      : 'text-voltaris-neutral-700 hover:text-voltaris-red'
                    }`}
                >
                  {(activeSection === section || (section === 'technical' && (activeSection === 'vehicle' || activeSection === 'adas'))) && (
                    <span className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-red-500 rounded-full"></span>
                  )}
                  {section === 'home' ? 'Ana Sayfa' : 
                   section === 'about' ? 'Hakkımızda' : 
                   section === 'technical' ? 'Teknik Detaylar' :
                   section === 'sponsors' ? 'Sponsorluk' : 'İletişim'}
                  {section === 'technical' && (
                    <ChevronDown size={14} className="ml-1 inline-block transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </button>
                {section === 'technical' && (
                  <div className="absolute top-full right-0 md:left-0 mt-2 bg-voltaris-neutral-50 backdrop-blur-md border border-voltaris-neutral-300 rounded-lg py-2 px-1 w-48 hidden group-hover:block z-50">
                    <button 
                      onClick={(e) => {e.stopPropagation(); scrollToSection('technical')}} 
                      className={`block w-full text-left px-3 py-2 text-sm ${activeSection === 'technical' ? 'text-red-500' : 'text-gray-400 hover:text-white'}`}
                    >
                      Teknik Detaylar
                    </button>
                    <button 
                      onClick={(e) => {e.stopPropagation(); scrollToSection('vehicle')}} 
                      className={`block w-full text-left px-3 py-2 text-sm ${activeSection === 'vehicle' ? 'text-red-500' : 'text-gray-400 hover:text-white'}`}
                    >
                      Araç Özellikleri
                    </button>
                    <button 
                      onClick={(e) => {e.stopPropagation(); scrollToSection('adas')}} 
                      className={`block w-full text-left px-3 py-2 text-sm ${activeSection === 'adas' ? 'text-red-500' : 'text-gray-400 hover:text-white'}`}
                    >
                      ADAS Sistemleri
                    </button>
                  </div>
                )}
              </div>
            ))}
            
            {/* Announcement Button in Header */}
            <div className="relative ml-2 group">
              <SimpleAnnouncementButton />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          {/* Remove this button since we already have one at the root level */}
        </div>

        {/* Mobile Navigation - Sliding Panel */}
        <div 
          className={`fixed inset-y-0 right-0 z-50 transform transition-all duration-300 mobile-menu-panel ${mobileMenuOpen ? 'translate-x-0 show' : 'translate-x-full hide'}`}
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            right: 0,
            width: '85vw',
            maxWidth: '300px',
            zIndex: 9999,
            overflowY: 'auto',
            overflowX: 'hidden',
            willChange: 'transform',
            borderLeft: '1px solid rgba(100, 116, 139, 0.2)',
            visibility: 'visible',
            display: mobileMenuOpen ? 'flex' : 'none',
            opacity: 1,
            flexDirection: 'column',
            backgroundColor: 'rgba(248, 250, 252, 0.97)',
            backdropFilter: 'blur(12px)',
            boxShadow: '-5px 0 25px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="pt-20 pb-6 px-4 flex flex-col h-full overflow-y-auto menu-content"
            style={{
              display: 'flex',
              flexDirection: 'column',
              visibility: 'visible',
              opacity: 1,
              position: 'relative',
              zIndex: 10000,
              width: '100%',
              paddingTop: '5rem',
              paddingBottom: '1.5rem'
            }}>
            {/* Close button at top of mobile menu */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Close Menu"
            >
              <X size={18} />
            </button>
            
            {/* Logo in menu */}
            <div className="flex items-center absolute top-6 left-4">
              <img 
                src={`${process.env.PUBLIC_URL}/logo_kırmızı.png`} 
                alt="Voltaris Logo"
                width="32"
                height="32"
                className="h-7 w-7 mr-2" 
              />
              <span className="text-base font-semibold tracking-wide text-gray-800">VOLTARIS</span>
            </div>
            
            {/* Menu items */}
            <div className="space-y-2 mt-2 menu-items-container" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
              {/* Announcements Button for Mobile */}
              <div className="mb-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // First close menu
                    setMobileMenuOpen(false);
                    
                    // Force unlock scrolling
                    forceEnableScrolling();
                    
                    // Navigate to announcements page
                    setTimeout(() => {
                      window.location.href = '/duyurular';
                    }, 400);
                  }}
                  className="text-sm py-2.5 font-medium px-4 rounded-md w-full text-left flex items-center justify-between menu-item bg-amber-50/80 border-l-2 border-amber-500 text-amber-700"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    visibility: 'visible',
                    opacity: 1,
                    width: '100%',
                    borderRadius: '0.375rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                  }}
                >
                  <div className="flex items-center">
                    <BellRing size={15} className="mr-2.5 text-amber-500" />
                    <span>Duyurular</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-xs px-1.5 py-0.5 bg-white rounded text-amber-700 border border-amber-200 font-normal">Yeni</span>
                    <span className="flex w-2 h-2 bg-voltaris-red rounded-full relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-voltaris-red opacity-75"></span>
                    </span>
                  </div>
                </button>
              </div>
              
              {['home', 'about', 'technical', 'sponsors', 'contact'].map((section) => (
                <div key={section}>
                  <button
                  onClick={(e) => {
                  e.stopPropagation();
                  if (section === 'technical') {
                  toggleTechnicalSubmenu(e);
                  } else {
                  scrollToSection(section);
                  }
                  }}
                  className={`text-sm py-3 font-medium px-4 rounded-md w-full text-left flex items-center justify-between mb-1.5 menu-item
                  ${activeSection === section || (section === 'technical' && (activeSection === 'vehicle' || activeSection === 'adas')) 
                  ? 'bg-gray-100 text-voltaris-red border-l-2 border-voltaris-red' 
                  : 'text-voltaris-red hover:text-voltaris-red hover:bg-red-50'
                  }`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    visibility: 'visible',
                    opacity: 1,
                    width: '100%',
                    marginBottom: '0.5rem',
                    borderRadius: '0.375rem',
                    padding: '0.75rem 1rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}
                  >
                    <span>
                      {section === 'home' ? 'Ana Sayfa' : 
                       section === 'about' ? 'Hakkımızda' : 
                       section === 'technical' ? 'Teknik Detaylar' :
                       section === 'sponsors' ? 'Sponsorluk' : 'İletişim'}
                    </span>
                    {section === 'technical' && <ChevronDown size={16} className={`transition-transform duration-300 text-voltaris-red ${mobileSubmenuOpen ? 'transform rotate-180' : ''}`} />}
                  </button>
                  
                  {section === 'technical' && mobileSubmenuOpen && (
                    <div className="ml-4 mt-1 mb-3 space-y-1 border-l border-voltaris-red/30 pl-3 mobile-submenu visible" 
                      style={{
                        display: 'block',
                        visibility: 'visible',
                        opacity: 1,
                        marginLeft: '1rem',
                        marginTop: '0.25rem',
                        marginBottom: '0.75rem', 
                        borderLeftWidth: '1px',
                        borderLeftColor: 'rgba(100, 116, 139, 0.2)',
                        paddingLeft: '0.75rem'
                      }}>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // First close menu
                          setMobileMenuOpen(false);
                          
                          // Force unlock scrolling
                          forceEnableScrolling();
                          
                          // Then navigate after a delay
                          setTimeout(() => {
                            scrollToSection('technical');
                          }, 400);
                        }} 
                        className={`text-sm py-2 px-3 block w-full text-left rounded-md
                          ${activeSection === 'technical' 
                            ? 'bg-red-50 text-voltaris-red font-medium' 
                            : 'text-voltaris-red hover:text-voltaris-red hover:bg-red-50'
                          }`}
                      >
                        Teknik Detaylar
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // First close menu
                          setMobileMenuOpen(false);
                          
                          // Force unlock scrolling
                          forceEnableScrolling();
                          
                          // Then navigate after a delay
                          setTimeout(() => {
                            scrollToSection('vehicle');
                          }, 400);
                        }} 
                        className={`text-sm py-2 px-3 block w-full text-left rounded-md
                          ${activeSection === 'vehicle' 
                            ? 'bg-red-50 text-voltaris-red font-medium' 
                            : 'text-voltaris-red hover:text-voltaris-red hover:bg-red-50'
                          }`}
                      >
                        Araç Özellikleri
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // First close menu
                          setMobileMenuOpen(false);
                          
                          // Force unlock scrolling
                          forceEnableScrolling();
                          
                          // Then navigate after a delay
                          setTimeout(() => {
                            scrollToSection('adas');
                          }, 400);
                        }} 
                        className={`text-sm py-2 px-3 block w-full text-left rounded-md
                          ${activeSection === 'adas' 
                            ? 'bg-red-50 text-voltaris-red font-medium' 
                            : 'text-voltaris-red hover:text-voltaris-red hover:bg-red-50'
                          }`}
                      >
                        ADAS Sistemleri
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile footer links */}
            <div className="mt-auto pt-5 border-t border-gray-200">
              <div className="flex flex-col space-y-2 my-4">
                {/* Email */}
                <a href="mailto:voltaris.official@gmail.com"
                  className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Mail size={16} />
                  <span className="text-sm">Email</span>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/i̇yte-voltaris-teknofest-efficiency-challange/" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Linkedin size={16} />
                  <span className="text-sm">LinkedIn</span>
                </a>

                {/* Instagram (added) */}
                <a href="https://www.instagram.com/voltaris_official/" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Instagram size={16} />
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
              <div className="text-center text-xs text-voltaris-red mb-1">
                © 2025 Voltaris
              </div>
            </div>
          </div>

{/* Backdrop for mobile menu */}
          {mobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-voltaris-neutral-400/10 z-40 md:hidden backdrop-blur-sm mobile-menu-backdrop" 
              onClick={(e) => {
                // Prevent event propagation to avoid multiple event handling
                e.stopPropagation();
                // Only process if not in transition
                if (!isMenuTransitioning) {
                  toggleMobileMenu(e);
                }
              }}
              style={{
                position: 'fixed', 
                top: 0, 
                right: 0, 
                bottom: 0, 
                left: 0,
                willChange: 'opacity',
                transition: 'opacity 0.3s ease-in-out',
                touchAction: 'none'
              }}
            ></div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 md:pt-24 pb-32 sm:pb-36 md:pb-40 hero-section">
        {/* Gradient background with enhanced light rays - lighter version */}
        <div className="absolute inset-0 bg-gradient-to-b from-voltaris-light via-gray-50 to-voltaris-light z-0"></div>
        
        {/* Enhanced light ray effects */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-64 sm:w-96 h-screen rotate-15 bg-gradient-to-b from-voltaris-red/30 via-voltaris-red/10 to-transparent blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-64 sm:w-96 h-screen -rotate-15 bg-gradient-to-b from-voltaris-blue/30 via-voltaris-blue/10 to-transparent blur-3xl"></div>
        </div>
        
        {/* Enhanced technical grid pattern in background */}
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-technical-grid"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        ></div>
        
        {/* Teknik ölçüm koordinatları */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* X-ekseni koordinatları */}
            {[...Array(10)].map((_, i) => (
              <div 
                key={`x-${i}`} 
                className="absolute text-[8px] hero-muted font-mono"
                style={{ left: `${i * 10}%`, top: '12px' }}
              >
                {i * 10}
              </div>
            ))}
            
            {/* Y-ekseni koordinatları */}
            {[...Array(10)].map((_, i) => (
              <div 
                key={`y-${i}`} 
                className="absolute text-[8px] hero-muted font-mono"
                style={{ top: `${i * 10}%`, left: '12px' }}
              >
                {i * 10}
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced animated accent lines */}
        <div className="absolute inset-0 z-0 opacity-15">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-horizontalSweep"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-verticalSweep"></div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-horizontalSweep delay-500"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-verticalSweep delay-500"></div>
          
          {/* Teknik efekt için köşegen tarama çizgileri eklendi */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-[150vw] h-px bg-blue-500/20 origin-top-left animate-diagonalScan"
              style={{ transform: 'rotate(45deg)' }}
            ></div>
            <div 
              className="absolute bottom-0 left-0 w-[150vw] h-px bg-red-500/20 origin-bottom-left animate-diagonalScanReverse"
              style={{ transform: 'rotate(-45deg)' }}
            ></div>
          </div>
        </div>
        
        {/* Animated Circuit Pathways */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Horizontal pulsing circuit lines */}
          <div className="absolute top-1/4 left-0 w-full h-px">
            <div className="absolute h-full w-20 bg-gradient-to-r from-transparent via-voltaris-red/40 to-transparent animate-circuitPulseHorizontal"></div>
          </div>
          <div className="absolute top-3/4 left-0 w-full h-px">
            <div className="absolute h-full w-20 bg-gradient-to-r from-transparent via-voltaris-blue/40 to-transparent animate-circuitPulseHorizontal delay-1000"></div>
          </div>
          
          {/* Vertical pulsing circuit lines */}
          <div className="absolute top-0 left-1/4 h-full w-px">
            <div className="absolute w-full h-20 bg-gradient-to-b from-transparent via-voltaris-blue/40 to-transparent animate-circuitPulseVertical"></div>
          </div>
          <div className="absolute top-0 left-3/4 h-full w-px">
            <div className="absolute w-full h-20 bg-gradient-to-b from-transparent via-voltaris-red/40 to-transparent animate-circuitPulseVertical delay-700"></div>
          </div>
          
          {/* Circular data nodes */}
          <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-voltaris-red/30 animate-dataNodePulse"></div>
          <div className="absolute top-1/4 left-3/4 h-2 w-2 rounded-full bg-voltaris-blue/30 animate-dataNodePulse delay-300"></div>
          <div className="absolute top-3/4 left-1/4 h-2 w-2 rounded-full bg-voltaris-blue/30 animate-dataNodePulse delay-600"></div>
          <div className="absolute top-3/4 left-3/4 h-2 w-2 rounded-full bg-voltaris-red/30 animate-dataNodePulse delay-900"></div>
        </div>
        
        {/* Floating Technical Blueprint Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[10%] opacity-10 rotate-12 animate-floatingBlueprint">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="50" stroke="#FF4254" strokeWidth="0.5" fill="none" />
              <circle cx="60" cy="60" r="40" stroke="#FF4254" strokeWidth="0.5" fill="none" />
              <circle cx="60" cy="60" r="30" stroke="#FF4254" strokeWidth="0.5" fill="none" />
              <line x1="10" y1="60" x2="110" y2="60" stroke="#FF4254" strokeWidth="0.5" />
              <line x1="60" y1="10" x2="60" y2="110" stroke="#FF4254" strokeWidth="0.5" />
            </svg>
          </div>
          
          <div className="absolute top-[65%] left-[75%] opacity-10 -rotate-6 animate-floatingBlueprint delay-300">
            <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="140" height="90" stroke="#0044FF" strokeWidth="0.5" fill="none" />
              <line x1="5" y1="25" x2="145" y2="25" stroke="#0044FF" strokeWidth="0.5" />
              <line x1="75" y1="5" x2="75" y2="95" stroke="#0044FF" strokeWidth="0.5" />
              <circle cx="75" cy="50" r="20" stroke="#0044FF" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
          
          <div className="absolute top-[40%] left-[60%] opacity-10 rotate-3 animate-floatingBlueprint delay-600">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,5 95,30 95,70 50,95 5,70 5,30" stroke="#FF4254" strokeWidth="0.5" fill="none" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="#FF4254" strokeWidth="0.5" />
              <line x1="5" y1="30" x2="95" y2="70" stroke="#FF4254" strokeWidth="0.5" />
              <line x1="5" y1="70" x2="95" y2="30" stroke="#FF4254" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
        
        {/* Animated Energy/Data Flow Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(15)].map((_, i) => (
              <div 
                key={`particle-${i}`} 
                className="absolute bg-voltaris-red/40 rounded-full animate-energyParticle"
                style={{ 
                  top: `${Math.random() * 100}%`, 
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${Math.random() * 8 + 8}s`
                }}
              ></div>
            ))}
            {[...Array(15)].map((_, i) => (
              <div 
                key={`particle-blue-${i}`} 
                className="absolute bg-voltaris-blue/40 rounded-full animate-energyParticle"
                style={{ 
                  top: `${Math.random() * 100}%`, 
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${Math.random() * 8 + 8}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-16 sm:pb-20">
            <div className="order-2 md:order-1">
              <div className="hero-accent font-mono text-xs mb-2 tracking-widest animate-fadeIn flex items-center">
                <div className="w-1.5 h-1.5 bg-voltaris-red mr-1.5 rounded-full"></div>
                <span>ELEKTROMOBİL</span>
              </div>
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight animate-fadeIn">
                <span className="hero-accent">Voltaris</span> Elektrikli Araç Projesi
              </h1>
              <div className="h-0.5 w-16 sm:w-20 bg-gradient-to-r from-red-500 to-transparent mb-4 sm:mb-6 animate-fadeInDelay"></div>
              <p className="hero-description text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 animate-fadeInDelay">
                İzmir Yüksek Teknoloji Enstitüsü Elektrikli Araç Takımı olarak, geleceğin temiz, sürdürülebilir ulaşım teknolojilerini geliştiriyoruz.
              </p>
              
              {/* Enhanced technical data visualization */}
              <div className="mb-6 sm:mb-8 animate-fadeInDelay relative max-w-full overflow-x-auto">
                <div className="flex flex-wrap sm:flex-nowrap justify-between text-xs mb-1 bg-voltaris-neutral-100 backdrop-blur-sm rounded-md border border-voltaris-neutral-300 p-2 gap-1 sm:gap-0 tech-specs-text">
                  <span className="hero-accent font-mono tracking-wider px-2 py-1 rounded bg-gradient-to-r from-red-900/20 to-transparent">BAT:68.97V</span>
                  <span className="hero-secondary font-mono tracking-wider px-2 py-1 rounded bg-gradient-to-r from-blue-900/20 to-transparent">MOT:5kW</span>
                  <span className="text-yellow-500 font-mono tracking-wider px-2 py-1 rounded bg-gradient-to-r from-yellow-900/20 to-transparent">VER:2024</span>
                  <span className="text-purple-500 font-mono tracking-wider px-2 py-1 rounded bg-gradient-to-r from-purple-900/20 to-transparent">TYP:Elektromobil</span>
                  <span className="text-green-500 font-mono tracking-wider px-2 py-1 rounded bg-gradient-to-r from-green-900/20 to-transparent">PRG:%35</span>
                </div>
                <TechnicalDataViz />
                
                {/* Added technical scan line animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent absolute top-0 animate-scanLine"></div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInDelayLong">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hero-button bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg flex items-center justify-center font-medium transition-colors shadow-lg shadow-red-900/20 relative overflow-hidden group text-sm"
                >
                  <span className="relative z-10 flex items-center">Bizi Tanıyın <ChevronRight className="ml-1" size={14} /></span>
                  {/* Added button light sweep effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
            
            {/* 3D Model - visible on larger screens by default */}
            <div className="order-1 md:order-2 md:block animate-fadeInDelay relative">
              {/* 3D Model Viewer */}
              <TechnicalModelViewer 
                ref={modelViewerRef}
                initialEnvironment={modelEnvironment}
              />
              {/* Removed EnvironmentControls */}
            </div>
          </div>
        </div>
        
        {/* Sponsorship Bar with advanced positioning */}
        <div className="absolute bottom-0 left-0 right-0 z-10 mb-10 sm:mb-16 sponsor-bar-container">
          <div className="container mx-auto w-full px-2 sm:px-4">
            <EnhancedSponsorsBar sponsors={teamData.sponsorData} />
          </div>
        </div>
      </section>

      {/* About Section - lighter background */}
      <section id="about" className="py-16 md:py-20 relative bg-voltaris-card shadow-sm">
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 hero-heading">Hakkımızda</h2>
            <div className="h-1 w-16 sm:w-20 bg-voltaris-red mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 items-start">
          <div>
          <h3 className="text-xl font-bold mb-3 hero-accent flex items-center">
          <span className="inline-block w-1.5 h-6 bg-gradient-to-b from-voltaris-red to-transparent mr-2"></span>
          Voltaris Elektromobil Takımı
          </h3>
          <p className="hero-description mb-3 text-sm leading-relaxed">
          Voltaris, İzmir Yüksek Teknoloji Enstitüsü'nde elektrikli araçlar ve sürdürülebilir ulaşım teknolojileri alanında yenilikçi çözümler geliştiren bir öğrenci takımıdır.
          </p>
          <p className="hero-description mb-3 text-sm leading-relaxed">
          2024 Mayıs tarihinde Prof. Dr. Erdal Çetkin danışmanlığında kurulan ekibimiz, İYTE'de bir kültür oluşturma amacıyla çıktığımız bu yolda, Teknofest Efficiency Challenge yarışmasının ilk akla gelen takımlarından olma ve teorik bilgilerimizi pratiğe dönüştürerek yarışmada tecrübe kazanma amacıyla çalışmalarımızı sürdürmeketeyiz.
          </p>
          <div className="bg-voltaris-light/50 p-3 border border-voltaris-light-blue/30 rounded-lg mt-4 relative overflow-hidden group hover:border-voltaris-blue/40 transition-all duration-300 shadow-card">
          {/* Mission background animation */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-300"></div>
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-voltaris-blue to-transparent opacity-30"></div>
          <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-voltaris-blue to-transparent opacity-30"></div>
          
          {/* Circling animation light */}
          <div className="absolute top-0 left-0 w-1 h-1 rounded-full bg-voltaris-blue shadow-light-glow animate-circleTopLeft"></div>
          
          <h4 className="font-bold mb-2 hero-secondary text-base relative z-10 flex items-center">
          <span className="mr-2 hero-secondary">◈</span> Misyonumuz
          </h4>
          <div className="space-y-2">
          <p className="text-sm hero-muted relative z-10 pl-3 border-l border-voltaris-blue/30 leading-relaxed">
          Mühendislik bilgimizi ve yaratıcılığımızı kullanarak, çevreye duyarlı ve enerji tasarrufu sağlayan yenilikçi elektrikli araçlar üretmektir. Bu süreçte sadece araç geliştirmekle kalmıyoruz; aynı zamanda yenilikçi enerji yönetimi sistemleri, verimli batarya çözümleri ve modern sürüş teknolojileri üzerine çalışmalar yapıyoruz.
          </p>
          </div>
          
          {/* Code-like blinking cursor */}
          <div className="w-1.5 h-4 bg-voltaris-blue/70 animate-blink absolute bottom-3 right-3"></div>
          </div>
          
          {/* Sponsorship direct button */}
          <button
            onClick={() => scrollToSection('sponsors')}
            className="hero-button mt-4 group relative inline-flex items-center justify-center px-4 py-2 overflow-hidden transition-all duration-300 ease-out border-2 border-voltaris-red rounded-md bg-gradient-to-r from-voltaris-red to-red-500 hover:from-red-500 hover:to-voltaris-red shadow-card"
          >
          <span className="relative flex items-center gap-2 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-100"></span>
              Sponsorluk
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="absolute -right-full -bottom-full h-40 w-40 rounded-full blur-md bg-voltaris-red/20 transition-all duration-500 group-hover:scale-110"></span>
          </button>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-card transition-all duration-300 relative overflow-hidden h-full">
            <div className="absolute inset-0 bg-circuit-pattern opacity-[0.03]"></div>
            
            {/* Tech lines animation in background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-voltaris-blue/20 to-transparent absolute top-0 animate-scanLine"></div>
            <div className="h-full w-0.5 bg-gradient-to-b from-transparent via-voltaris-red/20 to-transparent absolute right-0 animate-scanVertical"></div>
          </div>
          
          <h3 className="text-lg font-bold mb-4 hero-secondary flex items-center relative z-10">
            <GitMerge size={18} className="mr-2 text-voltaris-blue" />
            Takım İstatistikleri
          </h3>
          
          {/* Team Stats Component */}
          <div className="mt-4">
            <TeamStats />
          </div>
          
          {/* Technical details */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-semibold mb-2 hero-subheading flex items-center">
              <CircuitBoard size={14} className="mr-1.5 text-voltaris-red" />
              Teknik Odak Alanlarımız
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center hero-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-voltaris-red/60 mr-1.5"></span>
                Enerji Yönetimi
              </div>
              <div className="flex items-center hero-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-voltaris-blue/60 mr-1.5"></span>
                Motor Kontrolü
              </div>
              <div className="flex items-center hero-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-voltaris-red/60 mr-1.5"></span>
                Sürücü Destek Sistemleri
              </div>
              <div className="flex items-center hero-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-voltaris-blue/60 mr-1.5"></span>
                Telemetri Sistemleri
              </div>
            </div>
          </div>
        </div>
      </div>
          
          {/* Team Members Section */}
          <div className="mt-16 md:mt-24">
            <div className="text-center mb-8 md:mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <img src={`${process.env.PUBLIC_URL}/logo_kırmızı.png`} alt="Voltaris Logo" className="w-32 h-32 sm:w-64 sm:h-64" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 hero-secondary inline-block relative">
                Takım Üyelerimiz
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-voltaris-blue to-transparent"></div>
              </h3>
              <p className="hero-description max-w-3xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-2">
                Ömer Ünal'ın kaptanlığında Makine Mühendisliği, Elektrik Elektronik Mühendisliği, İnşaat Mühendisliği, Malzeme Mühendisliği öğrencilerinden oluşan 24 kişilik ekibimiz, Teknofest'e ilk kez katılmanın heyecanını yaşıyoruz.
              </p>
              
              <TeamStats />
            </div>
            
            <div className="relative">
              {/* Academic grid pattern for background */}
              <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="w-full h-full" style={{ 
                  backgroundImage: "linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)",
                  backgroundSize: "25px 25px"
                }}></div>
              </div>
              
              {/* Team structure with expandable sections */}
              <div className="overflow-x-auto">
                <ProfessionalOrgChart teamData={teamData} />
              </div>
            </div>
            
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8">
              <div className="bg-voltaris-card-dark p-3 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-medium mb-2 text-voltaris-red text-sm">Süspansiyon</h4>
              <div className="text-xs hero-muted">Çift salıncaklı süspansiyon sistemi, Mondial Drift L 125 amortisörler ile donatılmış, ayarlanabilir rotil bağlantıları.</div>
              </div>
              
              <div className="bg-voltaris-card-dark p-3 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-medium mb-2 text-voltaris-blue text-sm">Kabin ve Kabuk</h4>
              <div className="text-xs hero-muted">Cam elyaf (fiberglass) kabuk, elle yatırma yöntemiyle üretim, 0.16 sürtünme katsayısı hedefi ile optimize edilmiş tasarım.</div>
              </div>
              </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                  <div className="bg-voltaris-card-dark p-3 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-medium mb-2 text-voltaris-red text-sm">Fren Sistemi</h4>
                    <div className="text-xs hero-muted">Hidrolik disk fren, ön ve arka tekerleklerde fren diskleri, 50 km/h hızdan 14.05m'de durma performansı.</div>
                  </div>
                  
                  <div className="bg-voltaris-card-dark p-3 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-medium mb-2 text-voltaris-blue text-sm">Direksiyon Sistemi</h4>
                    <div className="text-xs hero-muted">Kremayer-pinyon dişli sistemi, 35 derece dönme açısı, 3.47m minimum dönüş yarıçapı.</div>
                  </div>
                </div>
            </div>
          
          {/* Soft Design Components - replacing Ackermann Principle */}
          <div className="mt-8">
            <SoftDesignShowcase />
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section id="technical" className="py-16 md:py-20 relative bg-gray-50">
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-voltaris-text">Teknik Detaylar</h2>
            <div className="h-1 w-16 sm:w-20 bg-voltaris-blue mx-auto"></div>
            <p className="text-voltaris-secondary mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Elektrikli aracımızın önemli teknik özellikleri ve mühendislik çözümleri.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 shadow-card p-6 rounded-lg border border-gray-200 hover:border-voltaris-blue/40 transition-all duration-300 industrial-container industrial-corners-box industrial-corners-box-bottom">
              <div className="flex items-center mb-4">
                <div className="text-voltaris-blue mr-3">
                  <Battery size={24} />
                </div>
                <h3 className="text-xl font-bold text-voltaris-blue">Batarya Sistemi</h3>
              </div>
              <ul className="space-y-2 text-voltaris-text">
                <li className="flex items-start">
                  <span className="text-voltaris-blue mr-2">•</span>
                  <span>Li-ion batarya paketi: 48V nominal gerilim</span>
                </li>
                <li className="flex items-start">
                  <span className="text-voltaris-blue mr-2">•</span>
                  <span>Toplam kapasite: 1.680 Wh (35 Ah)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-voltaris-blue mr-2">•</span>
                  <span>BMS: Sıcaklık, gerilim ve akım kontrolü</span>
                </li>
                <li className="flex items-start">
                  <span className="text-voltaris-blue mr-2">•</span>
                  <span>Şarj süresi: 3-4 saat (standart şarj)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 shadow-card p-6 rounded-lg border border-gray-200 hover:border-voltaris-red/40 transition-all duration-300 industrial-container industrial-corners-box industrial-corners-box-bottom">
              <div className="flex items-center mb-4">
                <div className="text-voltaris-red mr-3">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-voltaris-red">Motor ve Kontrolcü</h3>
              </div>
              <ul className="space-y-2 text-voltaris-text">
                <li className="flex items-start">
                  <span className="text-voltaris-red mr-2">•</span>
                  <span>BLDC Hub Motor: 48V, 1000W nominal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-voltaris-red mr-2">•</span>
                  <span>Motor verimliliği: %92 (nominal yük)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-voltaris-red mr-2">•</span>
                  <span>Alan Yönlendirmeli Vektör Kontrolü</span>
                </li>
                <li className="flex items-start">
                  <span className="text-voltaris-red mr-2">•</span>
                  <span>Rejeneratif frenleme: %15 enerji geri kazanımı</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 industrial-grid-background">
            <div className="bg-gray-50 shadow-card p-6 rounded-lg border border-gray-200 hover:border-voltaris-red/40 transition-all duration-300 industrial-container industrial-box-red">
              <div className="flex items-center mb-4">
                <div className="text-voltaris-red mr-3">
                  <BarChart size={24} />
                </div>
                <h3 className="text-xl font-bold text-voltaris-red">Enerji Yönetimi</h3>
              </div>
              <ul className="space-y-2 text-voltaris-text">
                <li className="flex items-start">
                  <span className="text-voltaris-red mr-2">•</span>
                  <span>Dinamik güç dağıtım algoritması</span>
                </li>
                <li className="flex items-start">
                  <span className="text-voltaris-red mr-2">•</span>
                  <span>Sürüş modları: Eco, Normal, Sport</span>
                </li>
                <li className="flex items-start">
                  <span className="text-voltaris-red mr-2">•</span>
                  <span>Güç tüketimi: 15-20 Wh/km (ortalama)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-voltaris-red mr-2">•</span>
                  <span>Menzil: 80-100 km (ideal koşullarda)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 shadow-card p-6 rounded-lg border border-gray-200 hover:border-voltaris-blue/40 transition-all duration-300 industrial-container industrial-box-blue">
              <div className="flex items-center mb-4">
                <div className="text-voltaris-blue mr-3">
                  <CircuitBoard size={24} />
                </div>
                <h3 className="text-xl font-bold text-voltaris-blue">Elektronik Sistem</h3>
              </div>
              <ul className="space-y-2 text-voltaris-text">
                <li className="flex items-start">
                  <span className="text-voltaris-blue mr-2">•</span>
                  <span>STM32 tabanlı ana kontrol ünitesi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-voltaris-blue mr-2">•</span>
                  <span>CAN-bus haberleşme protokolü</span>
                </li>
                <li className="flex items-start">
                  <span className="text-voltaris-blue mr-2">•</span>
                  <span>Telemetri sistemi: Sıcaklık, hız, batarya durumu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-voltaris-blue mr-2">•</span>
                  <span>7" LCD dokunmatik ekran arayüzü</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Features Section */}
      <section id="vehicle" className="py-16 md:py-20 relative bg-white">
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-voltaris-text">Araç Özellikleri</h2>
            <div className="h-1 w-16 sm:w-20 bg-voltaris-red mx-auto"></div>
            <p className="text-voltaris-secondary mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Elektrikli aracımızın tasarım özellikleri ve performans değerleri.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 shadow-card p-6 rounded-lg border border-gray-200 industrial-stat-box">
              <h3 className="text-xl font-bold mb-4 text-voltaris-blue flex items-center">
                <Scale size={20} className="mr-2" />
                Boyut ve Ağırlık
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Uzunluk:</span>
                  <span className="font-medium text-voltaris-text">3.250 mm</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Genişlik:</span>
                  <span className="font-medium text-voltaris-text">1.500 mm</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Yükseklik:</span>
                  <span className="font-medium text-voltaris-text">1.100 mm</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Dingil mesafesi:</span>
                  <span className="font-medium text-voltaris-text">2.200 mm</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Boş ağırlık:</span>
                  <span className="font-medium text-voltaris-text">120 kg</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Maksimum ağırlık:</span>
                  <span className="font-medium text-voltaris-text">240 kg</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 shadow-card p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-voltaris-red flex items-center">
                <Gauge size={20} className="mr-2" />
                Performans
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Maksimum hız:</span>
                  <span className="font-medium text-voltaris-text">70 km/sa</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">0-40 km/sa:</span>
                  <span className="font-medium text-voltaris-text">8 saniye</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Maksimum menzil:</span>
                  <span className="font-medium text-voltaris-text">100 km</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Max. tırmanma açısı:</span>
                  <span className="font-medium text-voltaris-text">15°</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Frenleme mesafesi:</span>
                  <span className="font-medium text-voltaris-text">14.05 m (50 km/sa'dan)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Enerji tüketimi:</span>
                  <span className="font-medium text-voltaris-text">15-20 Wh/km</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 shadow-card p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-voltaris-blue flex items-center">
                <FileText size={20} className="mr-2" />
                Genel Özellikler
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Koltuk sayısı:</span>
                  <span className="font-medium text-voltaris-text">1 sürücü</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Şasi malzemesi:</span>
                  <span className="font-medium text-voltaris-text">Alüminyum profil</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Gövde malzemesi:</span>
                  <span className="font-medium text-voltaris-text">Cam elyaf (fiberglass)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Aerodinamik katsayı:</span>
                  <span className="font-medium text-voltaris-text">0.16 Cd</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Tekerlek boyutu:</span>
                  <span className="font-medium text-voltaris-text">16 inç</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-voltaris-secondary">Min. dönüş yarıçapı:</span>
                  <span className="font-medium text-voltaris-text">3.47 m</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-voltaris-card-dark p-6 rounded-lg border border-gray-200 mt-6">
            <h3 className="text-xl font-bold mb-4 text-center text-voltaris-red">Yapısal Özellikler</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm industrial-feature-box">
                <h4 className="font-bold mb-2 text-voltaris-blue text-base">Şasi</h4>
                <p className="text-voltaris-secondary text-sm">Alüminyum profil kullanılarak tasarlanmış, hafif ve dayanıklı şasi yapısı. Çarpışma testlerinden geçirilmiş güvenli tasarım.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-bold mb-2 text-voltaris-red text-base">Süspansiyon</h4>
                <p className="text-voltaris-secondary text-sm">Çift salıncaklı süspansiyon sistemi, Mondial Drift L 125 amortisörler ile donatılmış, ayarlanabilir rotil bağlantıları.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-bold mb-2 text-voltaris-blue text-base">Kabin ve Kabuk</h4>
                <p className="text-voltaris-secondary text-sm">Cam elyaf (fiberglass) kabuk, elle yatırma yöntemiyle üretim, 0.16 sürtünme katsayısı hedefi ile optimize edilmiş tasarım.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-bold mb-2 text-voltaris-red text-base">Fren Sistemi</h4>
                <p className="text-voltaris-secondary text-sm">Hidrolik disk fren, ön ve arka tekerleklerde fren diskleri, 50 km/h hızdan 14.05m'de durma performansı.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADAS Systems Section - lighter background */}
      <section id="adas" className="py-16 md:py-20 relative bg-voltaris-soft-bg">
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-voltaris-text">ADAS Sistemi Planlaması</h2>
            <div className="h-1 w-16 sm:w-20 bg-voltaris-red mx-auto"></div>
            <p className="text-voltaris-secondary mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Advanced Driver Assistance Systems (ADAS) ile aracımız için planladığımız gelişmiş sürüş destek sistemleri.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-gray-50 shadow-card p-6 rounded-lg border border-gray-200 hover:border-voltaris-red/40 transition-all duration-300 industrial-container industrial-corners-box">
              <div className="flex items-center mb-4">
                <div className="text-voltaris-red mr-3">
                  <GitMerge size={24} />
                </div>
                <h3 className="text-xl font-bold text-voltaris-red">Şerit Takip Sistemi</h3>
              </div>
              <div className="latex-style-box bg-voltaris-card-dark p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-voltaris-text math-formula red-formula academic-formula">
                  <div className="formula-heading font-bold text-voltaris-red">Şerit Tespit Algoritması</div>
                  <div className="formula-content text-voltaris-secondary">
                    <p>Perspektif Dönüşümü: M = <span className="matrix-notation">T<sub>src→dst</sub></span></p>
                    <p>Polinom Modeli: f(x) = ax<sup>2</sup> + bx + c</p>
                    <p>Ağırlıklı Filtre: W<sub>i</sub> = [0.4, 0.2, 0.15, 0.1, 0.075, 0.05, 0.025]</p>
                    <p>Kalibrasyon Faktörü: 0.0293 m/piksel</p>
                  </div>
                  <div className="formula-parameters text-voltaris-secondary font-semibold">Performans: 23 FPS | Doğruluk: %95.7</div>
                </div>
                <p className="text-voltaris-text mt-3">
                  Kamera görüntüsünden Canny edge detection ve Hough transform kullanarak şeritleri tespit eder. Sonuç olarak sürücüye sesli ve görsel uyarılar verilir.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 shadow-card p-6 rounded-lg border border-gray-200 hover:border-voltaris-blue/40 transition-all duration-300 industrial-container industrial-corners-box">
              <div className="flex items-center mb-4">
                <div className="text-voltaris-blue mr-3">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-xl font-bold text-voltaris-blue">Trafik İşareti Tanıma</h3>
              </div>
              <div className="latex-style-box bg-voltaris-card-dark p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-voltaris-text math-formula blue-formula academic-formula">
                  <div className="formula-heading font-bold text-voltaris-blue">YOLOv5s CNN Mimarisi</div>
                  <div className="formula-content text-voltaris-secondary">
                    <p>Omurga: CSPDarknet53 | Özellik Çıkarıcı: PANet</p>
                    <p>Giriş Formatı: 640×640 px | Format: float16/32</p>
                    <p>Güven Eşiği: τ = 0.5</p>
                    <p>NMS Algoritması: IoU<sub>threshold</sub> = 0.45</p>
                  </div>
                  <div className="formula-parameters text-voltaris-secondary font-semibold">Doğruluk: %91.75 | Çıkarım: 15-20ms | Sınıflar: 61</div>
                </div>
                <p className="text-voltaris-text mt-3">
                  YOLOv5s tabanlı derin öğrenme modeli ile trafik işaretlerini gerçek zamanlı olarak tanır ve sürücüye bilgilendirici uyarılar verir.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 shadow-card p-6 rounded-lg border border-gray-200 hover:border-voltaris-red/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-voltaris-red mr-3">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-voltaris-red">Akıllı Hız Sabitleyici</h3>
              </div>
              <div className="latex-style-box bg-voltaris-card-dark p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-voltaris-text math-formula red-formula text-center pid-formula academic-formula">
                  <div className="formula-heading font-bold text-voltaris-red">PID Kontrolcü Denklemi</div>
                  <div className="formula-content formula-pid text-voltaris-secondary">
                    u(t) = K<sub>p</sub>e(t) + K<sub>i</sub> ∫<sub>0</sub><sup>t</sup> e(τ) dτ + K<sub>d</sub> ∂e(t)/∂t
                    <div className="pid-params">K<sub>p</sub> = 3.5, K<sub>i</sub> = 0.2, K<sub>d</sub> = 0.8</div>
                  </div>
                  <div className="formula-parameters text-voltaris-secondary font-semibold">Frekans: 1kHz | PWM Aralığı: 0-1023 | I<sub>limit</sub>: ±25</div>
                </div>
                <p className="text-voltaris-text mt-3">
                  Optimize edilmiş PID kontrol algoritması ile hız sabitlenir, enerji verimliliği maksimize edilir ve sürüş konforu artırılır.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 shadow-card p-6 rounded-lg border border-gray-200 hover:border-voltaris-blue/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-voltaris-blue mr-3">
                  <Camera size={24} />
                </div>
                <h3 className="text-xl font-bold text-voltaris-blue">Kör Nokta Algılama</h3>
              </div>
              <div className="latex-style-box bg-voltaris-card-dark p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-voltaris-text math-formula blue-formula academic-formula">
                  <div className="formula-heading font-bold text-voltaris-blue">Radar Tabanlı Tespit Sistemi</div>
                  <div className="formula-content text-voltaris-secondary">
                    <p>Model: RD-03D Çoklu Nesne Algılama Radarı</p>
                    <p>Algılama Mesafesi: 0.5 - 3m</p>
                    <p>Açısal Alan: θ = ±30°</p>
                    <p>Parametreler: Konum (x,y), Hız (v), Mesafe (d)</p>
                  </div>
                  <div className="formula-parameters text-voltaris-secondary font-semibold">Yenileme Hızı: 50Hz | Montaj Konumu: Arka</div>
                </div>
                <p className="text-voltaris-text mt-3">
                  Ultrasonik ve kızılötesi sensörler ile kör noktalardaki engeller tespit edilir ve sürücüye uyarı verilir.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 mb-10">
            {/* Using React state for more reliable and reactive toggling */}
            <ExpandableSection 
              title="ADAS Sistem Mimarisi" 
              color="purple"
              id="adasArchitecture"
            >
              <div className="animate-fadeIn">
                <AdasSystemArchitecture />
              </div>
            </ExpandableSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Lane Detection System */}
            <div className="bg-white p-4 rounded-lg border border-voltaris-red/50 hover:border-voltaris-red/80 transition-all duration-300 shadow-sm collapsible-diagram-container relative overflow-hidden group industrial-corners-box industrial-corners-box-bottom">
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => {
                  const element = document.getElementById('laneDetectionContent');
                  if (element) {
                    element.classList.toggle('hidden');
                    document.getElementById('laneDetectionIcon')?.classList.toggle('rotate-180');
                  }
                }}
              >
                <h3 className="text-xl font-bold text-voltaris-red">Şerit Takip Sistemi</h3>
                <ChevronDown id="laneDetectionIcon" className="text-voltaris-red transition-transform duration-300" />
              </div>
              <div id="laneDetectionContent" className="hidden mt-4 overflow-x-auto">
                <div className="animate-slideInUp">
                  <LaneDetectionDiagram />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-voltaris-red/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
            </div>
            
            {/* Traffic Sign Detection */}
            <div className="bg-white p-4 rounded-lg border border-voltaris-blue/50 hover:border-voltaris-blue/80 transition-all duration-300 shadow-sm collapsible-diagram-container relative overflow-hidden group industrial-corners-box industrial-corners-box-bottom">
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => {
                  const element = document.getElementById('trafficSignContent');
                  if (element) {
                    element.classList.toggle('hidden');
                    document.getElementById('trafficSignIcon')?.classList.toggle('rotate-180');
                  }
                }}
              >
                <h3 className="text-xl font-bold text-voltaris-blue">Trafik İşareti Tanıma</h3>
                <ChevronDown id="trafficSignIcon" className="text-voltaris-blue transition-transform duration-300" />
              </div>
              <div id="trafficSignContent" className="hidden mt-4 overflow-x-auto">
                <div className="animate-slideInUp">
                  <TrafficSignDetectionDiagram />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-voltaris-blue/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
            </div>
            
            {/* Blind Spot Detection */}
            <div className="bg-white p-4 rounded-lg border border-green-500/50 hover:border-green-500/80 transition-all duration-300 shadow-sm collapsible-diagram-container relative overflow-hidden group">
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => {
                  const element = document.getElementById('blindSpotContent');
                  if (element) {
                    element.classList.toggle('hidden');
                    document.getElementById('blindSpotIcon')?.classList.toggle('rotate-180');
                  }
                }}
              >
                <h3 className="text-xl font-bold text-green-600">Kör Nokta Tespit Sistemi</h3>
                <ChevronDown id="blindSpotIcon" className="text-green-600 transition-transform duration-300" />
              </div>
              <div id="blindSpotContent" className="hidden mt-4 overflow-x-auto">
                <div className="animate-slideInUp">
                  <BlindSpotDetectionDiagram />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
            </div>
            
            {/* Cruise Control System */}
            <div className="bg-white p-4 rounded-lg border border-yellow-500/50 hover:border-yellow-500/80 transition-all duration-300 shadow-sm collapsible-diagram-container relative overflow-hidden group">
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => {
                  const element = document.getElementById('cruiseControlContent');
                  if (element) {
                    element.classList.toggle('hidden');
                    document.getElementById('cruiseControlIcon')?.classList.toggle('rotate-180');
                  }
                }}
              >
                <h3 className="text-xl font-bold text-yellow-600">Akıllı Hız Sabitleyici</h3>
                <ChevronDown id="cruiseControlIcon" className="text-yellow-600 transition-transform duration-300" />
              </div>
              <div id="cruiseControlContent" className="hidden mt-4 overflow-x-auto">
                <div className="animate-slideInUp">
                  <CruiseControlSystemDiagram />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section - lighter background */}
      <section id="sponsors" className="py-16 md:py-20 relative bg-voltaris-neutral-50">
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-voltaris-text">Sponsorluk</h2>
            <div className="h-1 w-16 sm:w-20 bg-voltaris-red mx-auto"></div>
            <p className="text-voltaris-neutral-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Voltaris Elektromobil Takımı olarak sponsorlarımızla birlikte geleceğin ulaşım teknolojilerini geliştirmeyi hedefliyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 md:mb-12">
            <div className="bg-gradient-to-b from-[#F4F5F8] to-[#E8EBF2] p-4 sm:p-6 rounded-lg transition-all duration-300 text-center group h-full platinum-sponsor-card relative overflow-hidden shadow-xl border border-[#D0D6E2]">
              {/* Elegant platinum accents */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8E9BAE] via-[#C9D0DC] to-[#8E9BAE]"></div>
              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#8E9BAE] via-[#C9D0DC] to-[#8E9BAE]"></div>
              
              {/* Professional corner elements */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#A5B1C2] opacity-70"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#A5B1C2] opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#A5B1C2] opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#A5B1C2] opacity-70"></div>
              
              {/* Technical pattern background */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{ 
                  backgroundImage: "radial-gradient(#8E9BAE 1px, transparent 1px), radial-gradient(#8E9BAE 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px"
                }}></div>
              </div>
              
              {/* Subtle platinum shimmer effect */}
              <div className="absolute -inset-x-full top-0 bottom-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 transform -translate-x-full animate-shimmerSlow pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="text-[#6A788E] font-bold mb-2 text-xl sm:text-2xl">Platin</div>
                <div className="w-12 h-0.5 mx-auto mb-4 bg-gradient-to-r from-transparent via-[#8E9BAE] to-transparent"></div>
                <div className="text-[#374155] text-lg sm:text-xl mb-3 sm:mb-4">₺50,000+</div>
                <ul className="text-left space-y-1.5 mb-4 sm:mb-6 border border-[#D0D6E2]/70 rounded-lg p-3 bg-white/50">
                  <li className="flex items-start text-xs sm:text-sm">
                    <span className="text-[#8E9BAE] mr-2 mt-0.5">◆</span>
                    <span className="text-[#4A5568]">Aracın ön ve yan yüzeylerinde büyük logo</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm">
                    <span className="text-[#8E9BAE] mr-2 mt-0.5">◆</span>
                    <span className="text-[#4A5568]">Tüm medya materyallerinde öncelikli tanıtım</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm">
                    <span className="text-[#8E9BAE] mr-2 mt-0.5">◆</span>
                    <span className="text-[#4A5568]">Özel VIP etkinlik davetleri</span>
                  </li>
                </ul>
                <button 
                  className="w-full relative overflow-hidden bg-gradient-to-r from-[#8a9aac] via-[#c0c9d6] to-[#8a9aac] text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => handleOpenSponsorshipModal('platinum')}
                >
                  <span className="relative z-10">İletişime Geç</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#7A8A9E] to-[#7A8A9E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>
            
            {/* Gold Sponsorship Card */}
            <div className="bg-gradient-to-b from-[#FFF9E5] to-[#FFEEB3] p-4 sm:p-6 rounded-lg transition-all duration-300 text-center group h-full gold-sponsor-card relative overflow-hidden shadow-xl border border-[#E5CC73]">
              {/* Gold accents */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E5CC73] via-[#FFD700] to-[#E5CC73]"></div>
              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#E5CC73] via-[#FFD700] to-[#E5CC73]"></div>
              
              {/* Corner elements */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#E5CC73] opacity-70"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#E5CC73] opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#E5CC73] opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#E5CC73] opacity-70"></div>
              
              {/* Pattern background */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{ 
                  backgroundImage: "radial-gradient(#FFD700 1px, transparent 1px), radial-gradient(#FFD700 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px"
                }}></div>
              </div>
              
              {/* Gold shimmer effect */}
              <div className="absolute -inset-x-full top-0 bottom-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 transform -translate-x-full animate-shimmerSlow pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="text-[#A67C00] font-bold mb-2 text-xl sm:text-2xl">Altın</div>
                <div className="w-12 h-0.5 mx-auto mb-4 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
                <div className="text-[#6B5100] text-lg sm:text-xl mb-3 sm:mb-4">₺35,000+</div>
                <ul className="text-left space-y-1.5 mb-4 sm:mb-6 border border-[#E5CC73]/70 rounded-lg p-3 bg-white/50">
                  <li className="flex items-start text-xs sm:text-sm">
                    <span className="text-[#D4AF37] mr-2 mt-0.5">◆</span>
                    <span className="text-[#6B5100]">Aracın ön ve yan yüzeylerinde orta boy logo</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm">
                    <span className="text-[#D4AF37] mr-2 mt-0.5">◆</span>
                    <span className="text-[#6B5100]">İkincil öncelikli medya tanıtımı</span>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm">
                    <span className="text-[#D4AF37] mr-2 mt-0.5">◆</span>
                    <span className="text-[#6B5100]">Etkinlik ve yarışmalarda VIP erişim</span>
                  </li>
                </ul>
                <button 
                  className="w-full relative overflow-hidden bg-gradient-to-r from-[#E5CC73] via-[#FFD700] to-[#E5CC73] text-[#6B5100] px-3 sm:px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => handleOpenSponsorshipModal('gold')}
                >
                  <span className="relative z-10">İletişime Geç</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-voltaris-neutral-300 hover:border-voltaris-neutral-400 transition-all duration-300 transform hover:-translate-y-1 text-center group h-full shadow-lg">
              <div className="text-voltaris-neutral-600 font-bold text-xl sm:text-2xl mb-2">Gümüş</div>
              <div className="text-voltaris-neutral-800 text-lg sm:text-xl mb-3 sm:mb-4">₺25,000+</div>
              <ul className="text-left space-y-1.5 mb-4 sm:mb-6">
                <li className="flex items-start text-xs sm:text-sm">
                  <span className="text-voltaris-neutral-500 mr-2 mt-0.5">•</span>
                  <span className="text-voltaris-neutral-700">Aracın yan yüzeyinde orta boy logo</span>
                </li>
                <li className="flex items-start text-xs sm:text-sm">
                  <span className="text-voltaris-neutral-500 mr-2 mt-0.5">•</span>
                  <span className="text-voltaris-neutral-700">Sosyal medya tanıtımları</span>
                </li>
                <li className="flex items-start text-xs sm:text-sm">
                  <span className="text-voltaris-neutral-500 mr-2 mt-0.5">•</span>
                  <span className="text-voltaris-neutral-700">Etkinlik davetleri</span>
                </li>
              </ul>
              <button 
                className="w-full bg-gradient-to-r from-gray-400 to-gray-500 text-white px-3 sm:px-4 py-2 rounded-lg text-sm"
                onClick={() => handleOpenSponsorshipModal('silver')}
              >İletişime Geç</button>
            </div>
            
            <div className="bg-gray-50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-amber-300 hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-1 text-center group h-full shadow-lg">
              <div className="text-amber-700 font-bold text-xl sm:text-2xl mb-2">Bronz</div>
              <div className="text-voltaris-neutral-800 text-lg sm:text-xl mb-3 sm:mb-4">₺10,000+</div>
              <ul className="text-left space-y-1.5 mb-4 sm:mb-6">
                <li className="flex items-start text-xs sm:text-sm">
                  <span className="text-amber-700 mr-2 mt-0.5">•</span>
                  <span className="text-voltaris-neutral-700">Aracın arka kısmında küçük logo</span>
                </li>
                <li className="flex items-start text-xs sm:text-sm">
                  <span className="text-amber-700 mr-2 mt-0.5">•</span>
                  <span className="text-voltaris-neutral-700">Web sitesinde tanıtım</span>
                </li>
                <li className="flex items-start text-xs sm:text-sm">
                  <span className="text-amber-700 mr-2 mt-0.5">•</span>
                  <span className="text-voltaris-neutral-700">Teşekkür sertifikası</span>
                </li>
              </ul>
              <button 
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white px-3 sm:px-4 py-2 rounded-lg text-sm"
                onClick={() => handleOpenSponsorshipModal('bronze')}
              >İletişime Geç</button>
            </div>
            
            <div className="bg-gray-50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-blue-300 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 text-center group h-full shadow-lg">
              <div className="text-blue-600 font-bold text-xl sm:text-2xl mb-2">Destekçi</div>
              <div className="text-voltaris-neutral-800 text-lg sm:text-xl mb-3 sm:mb-4">₺5,000+</div>
              <ul className="text-left space-y-1.5 mb-4 sm:mb-6">
                <li className="flex items-start text-xs sm:text-sm">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span className="text-voltaris-neutral-700">Web sitesi ve broşürlerde logo</span>
                </li>
                <li className="flex items-start text-xs sm:text-sm">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span className="text-voltaris-neutral-700">Sosyal medya teşekkür paylaşımı</span>
                </li>
                <li className="flex items-start text-xs sm:text-sm">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span className="text-voltaris-neutral-700">Teşekkür sertifikası</span>
                </li>
              </ul>
              <button 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm"
                onClick={() => handleOpenSponsorshipModal('supporter')}
              >İletişime Geç</button>
            </div>
          </div>
          
          <div className="bg-gray-50 backdrop-blur-sm rounded-lg border border-voltaris-neutral-300 overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-voltaris-red">Sponsorluk Fırsatları</h3>
                <p className="text-voltaris-neutral-700 mb-4 text-sm sm:text-base">
                  Voltaris Elektromobil Takımı olarak, elektrikli araç teknolojilerinin gelişimine katkıda bulunmak isteyen kuruluşlara çeşitli sponsorluk paketleri sunmayı planlıyoruz.
                </p>
                
                <div className="space-y-3 sm:space-y-4 mt-5 sm:mt-6">
                  <div className="flex items-start">
                    <div className="text-voltaris-red mr-3 mt-1">
                      <Terminal size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-voltaris-neutral-800 text-sm sm:text-base">Teknoloji Transferi</h4>
                      <p className="text-xs sm:text-sm text-voltaris-neutral-600">Üniversite-sanayi işbirliği ile AR-GE projeleri ve teknoloji transferi imkanı.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-voltaris-blue mr-3 mt-1">
                      <Camera size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-voltaris-neutral-800 text-sm sm:text-base">Marka Görünürlüğü</h4>
                      <p className="text-xs sm:text-sm text-voltaris-neutral-600">Yarışma, etkinlik ve medya kanallarında markanızı gösterme fırsatı.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-voltaris-neutral-50 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-voltaris-blue">İletişime Geçin</h3>
                <ContactForm />
              </div>
            </div>
          </div>
          
          {/* Gold Tier Detail Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-[#A67C00]">Altın Sponsorluk Detayları</h2>
              <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-[#E5CC73] via-[#FFD700] to-[#E5CC73] mx-auto"></div>
              <p className="text-voltaris-neutral-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
                Altın sponsorlarımız için sunduğumuz özel avantajlar ve işbirliği fırsatları hakkında detaylı bilgi.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-white to-[#FFFAF0] rounded-xl shadow-xl border border-[#E5CC73]/20 overflow-hidden">
              <GoldSponsorship />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - lighter background */}
      <section id="contact" className="py-16 md:py-20 relative bg-gray-50">
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-voltaris-text">İletişim</h2>
            <div className="h-1 w-16 sm:w-20 bg-voltaris-red mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white shadow-md p-4 sm:p-6 rounded-lg border border-gray-200 text-center h-full hover:shadow-lg transition-shadow duration-300">
              <div className="inline-block p-3 bg-red-50 rounded-full mb-3 sm:mb-4 text-voltaris-red">
                <Cpu size={24} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-voltaris-text">Adres</h3>
              <p className="text-voltaris-secondary text-xs sm:text-sm">
                İzmir Yüksek Teknoloji Enstitüsü<br />
                Mühendislik Fakültesi<br />
                Urla, İzmir
              </p>
            </div>
            
            <div className="bg-white shadow-md p-4 sm:p-6 rounded-lg border border-gray-200 text-center h-full hover:shadow-lg transition-shadow duration-300">
              <div className="inline-block p-3 bg-blue-50 rounded-full mb-3 sm:mb-4 text-voltaris-blue">
                <Terminal size={24} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-voltaris-text">İletişim</h3>
              <p className="text-voltaris-secondary text-xs sm:text-sm">
                info@iyte.edu.tr<br />
                voltaris.official@gmail.com<br />
                +90 (232) 750 60 00
              </p>
            </div>
            
            <div className="bg-white shadow-md p-4 sm:p-6 rounded-lg border border-gray-200 text-center h-full hover:shadow-lg transition-shadow duration-300">
              <div className="inline-block p-3 bg-red-50 rounded-full mb-3 sm:mb-4 text-voltaris-red">
                <Camera size={24} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-voltaris-text">Sosyal Medya</h3>
              <div className="flex justify-center space-x-3 sm:space-x-4 mt-3">
      
              <a href="https://instagram.com/Voltaris.official" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-voltaris-red transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.053 1.803.248 2.228.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.168.425.361 1.055.413 2.228.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.052 1.172-.246 1.803-.413 2.228-.217.562-.477.96-.896 1.381-.42.419-.819.679-1.381.896-.425.168-1.056.361-2.228.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.172-.053-1.803-.248-2.228-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.168-.425-.361-1.055-.413-2.228-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.172.248-1.803.413-2.228.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.425-.168 1.056-.361 2.228-.413A31.89 31.89 0 0112 2.163zm0 1.646c-3.142 0-3.496.011-4.716.067-.976.044-1.502.232-1.82.36-.347.135-.587.319-.833.566-.247.247-.431.486-.566.833-.128.318-.316.844-.36 1.82-.056 1.22-.067 1.574-.067 4.716s.011 3.496.067 4.716c.044.976.232 1.502.36 1.82.135.347.319.587.566.833.247.247.486.431.833.566.318.128.844.316 1.82.36 1.22.056 1.574.067 4.716.067s3.496-.011 4.716-.067c.976-.044 1.502-.232 1.82-.36.347-.135.587-.319.833-.566.247-.247.431-.486.566-.833.128-.318.316-.844.36-1.82.056-1.22.067-1.574.067-4.716s-.011-3.496-.067-4.716c-.044-.976-.232-1.502-.36-1.82-.135-.347-.319-.587-.566-.833-.247-.247-.486-.431-.833-.566-.318-.128-.844-.316-1.82-.36-1.22-.056-1.574-.067-4.716-.067zM12 7.168a4.832 4.832 0 100 9.664 4.832 4.832 0 000-9.664zm0 8a3.168 3.168 0 110-6.336 3.168 3.168 0 010 6.336zm4.808-8.076a1.152 1.152 0 100 2.304 1.152 1.152 0 000-2.304z" clipRule="evenodd" />
                </svg>
              </a>

              <a href="https://github.com/voltaris-official" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-voltaris-blue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 bg-white shadow-md p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-voltaris-text">Mesaj Gönderin</h3>
              <div className="h-0.5 w-12 bg-gradient-to-r from-voltaris-red to-voltaris-blue mx-auto mt-2"></div>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Adınız" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm text-voltaris-text focus:outline-none focus:border-voltaris-red"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="E-posta Adresiniz" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm text-voltaris-text focus:outline-none focus:border-voltaris-red"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Konu" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm text-voltaris-text focus:outline-none focus:border-voltaris-red"
                  />
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <textarea 
                    placeholder="Mesajınız" 
                    rows="5"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm text-voltaris-text focus:outline-none focus:border-voltaris-red"
                  ></textarea>
                </div>
                <div className="text-right">
                  <button 
                    type="submit" 
                    className="bg-gradient-to-r from-voltaris-red to-voltaris-blue text-white px-5 py-2.5 rounded-lg inline-flex items-center transition-colors shadow-md hover:shadow-lg text-sm"
                  >
                    Gönder <ChevronRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
          
          <div className="mt-8 sm:mt-12 text-center text-xs sm:text-sm text-voltaris-secondary">
            <p>© 2025 Voltaris Elektromobil Takımı. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-voltaris-neutral-100 py-8 sm:py-12 border-t border-voltaris-red/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8 sm:mb-8">
            <div className="flex items-center mb-5">
              <img 
                src={`${process.env.PUBLIC_URL}/logo_sadece.png`} 
                alt="Voltaris Logo" 
                className="h-10 w-10 sm:h-14 sm:w-14 mb-4 animate-pulse-slow hover:scale-125 transition-transform duration-500" 
              />
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl font-semibold tracking-wide">VOLTARIS</div>
              <div className="text-xs sm:text-sm text-gray-500">İYTE Elektrikli Araç Takımı</div>
            </div>
            
            <div className="flex space-x-4 mt-3">
              <a href="https://instagram.com/Voltaris.official" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.linkedin.com/company/i̇yte-voltaris-teknofest-efficiency-challange/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:voltaris.official@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="tel:+905531752708" className="text-gray-400 hover:text-white transition-colors">
                <Phone size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-900 pt-6 flex flex-col items-center">
            <div className="text-gray-500 text-xs sm:text-sm mb-3">
              © 2025 Voltaris. Tüm hakları saklıdır.
            </div>
            
            <div className="text-xs sm:text-sm mb-4 font-mono flex justify-center">
              <span className="text-red-500">{'// '}</span>
              <span className="text-green-500">{'DESIGNED'}</span>
              <span className="text-yellow-500">{'_WITH_'}</span>
              <span className="text-blue-500">{'PASSION_'}</span>
              <span className="text-red-500">{'BY_'}</span>
              <span className="text-green-500">{'VOLTARIS_'}</span>
              <span className="text-yellow-500">{'TEAM'}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;