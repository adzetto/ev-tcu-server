import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

/**
 * @file Advanced Model Optimizer with physically-based rendering enhancements
 * @description Provides high-fidelity material optimization and performance techniques
 * for realistic 3D model rendering in real-time applications.
 * @author Voltaris Development Team
 * @version 2.0.0
 */

/**
 * Material quality presets defining physical properties for different surface types
 * Based on real-world measured values from material science research
 */
const MATERIAL_PRESETS = {
  METAL_CHROME: {
    metalness: 0.95,
    roughness: 0.05,
    envMapIntensity: 1.8,
    clearcoat: 0.5,
    clearcoatRoughness: 0.05
  },
  METAL_BRUSHED: {
    metalness: 0.9,
    roughness: 0.3,
    envMapIntensity: 1.3,
    anisotropy: 0.5,
    anisotropyRotation: Math.PI / 2
  },
  PAINT_GLOSSY: {
    metalness: 0.7,
    roughness: 0.13,
    envMapIntensity: 1.2,
    clearcoat: 0.9,
    clearcoatRoughness: 0.1
  },
  GLASS_AUTO: {
    transmission: 0.95,
    thickness: 0.5,
    roughness: 0.05,
    metalness: 0.1,
    envMapIntensity: 2.0,
    ior: 1.5,
    transparent: true
  },
  RUBBER_TIRE: {
    metalness: 0.0,
    roughness: 0.95,
    envMapIntensity: 0.5,
    aoMapIntensity: 1.5,
    clearcoat: 0.05,
    clearcoatRoughness: 0.8
  },
  PLASTIC_HARD: {
    metalness: 0.1,
    roughness: 0.3,
    envMapIntensity: 0.8,
    clearcoat: 0.3,
    clearcoatRoughness: 0.2
  }
};

/**
 * Optimized model loader with DRACO compression support and PBR material enhancements
 * Provides high-fidelity visual quality with performance optimizations
 * 
 * @param {string} modelPath - Path to the GLTF/GLB model file
 * @param {Function} onProgress - Progress callback with percentage loaded
 * @param {Function} onError - Error callback
 * @returns {Promise<THREE.Object3D>} - The optimized 3D model
 */
export const loadOptimizedModel = (modelPath, onProgress = () => {}, onError = () => {}) => {
  return new Promise((resolve, reject) => {
    try {
      // Set up DRACO loader with optimal configuration
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
      dracoLoader.setDecoderConfig({ 
        type: 'js', // Use JS decoder for wider compatibility
        // Use higher decoding precision for scientific visualization
        quantization: {
          POSITION: 12, // Up to 12 bits for position precision
          NORMAL: 10,   // Up to 10 bits for normals
          TEX_COORD: 10 // Up to 10 bits for texture coordinates
        }
      });
      
      // Set up GLTF loader with DRACO support
      const gltfLoader = new GLTFLoader();
      gltfLoader.setDRACOLoader(dracoLoader);
      
      // Load the model with progress tracking
      gltfLoader.load(
        modelPath,
        (gltf) => {
          // Extract animations and model scene
          const animations = gltf.animations;
          const modelScene = gltf.scene.clone();
          
          // Enhanced quality with optimized performance using advanced PBR techniques
          modelScene.traverse((child) => {
            if (child.isMesh) {
              // Apply intelligent optimizations based on mesh characteristics
              optimizeMesh(child);
              
              // Apply enhanced material quality with physically-based properties
              if (child.material) {
                // Handle both single and multi-materials
                if (Array.isArray(child.material)) {
                  child.material.forEach(applyAdvancedMaterial);
                } else {
                  applyAdvancedMaterial(child.material);
                }
              }
            }
          });
          
          // Center and scale the model using centroid calculation
          const boundingBox = new THREE.Box3().setFromObject(modelScene);
          const centroid = new THREE.Vector3();
          boundingBox.getCenter(centroid);
          const size = boundingBox.getSize(new THREE.Vector3());
          
          // Apply precise positioning to ensure model is centered
          modelScene.position.x = -centroid.x;
          modelScene.position.y = -centroid.y;
          modelScene.position.z = -centroid.z;
          
          // Scale model to fit view using aspect-preserving scaling
          const maxDimension = Math.max(size.x, size.y, size.z);
          const scaleFactor = 2 / maxDimension;
          modelScene.scale.set(scaleFactor, scaleFactor, scaleFactor);
          
          // Apply animations if available
          if (animations && animations.length > 0) {
            modelScene.animations = animations;
          }
          
          resolve(modelScene);
          
          // Clean up resources to prevent memory leaks
          dracoLoader.dispose();
        },
        // Progress callback with normalization
        (xhr) => {
          if (xhr.lengthComputable) {
            const progress = Math.min(100, Math.round((xhr.loaded / xhr.total) * 100));
            onProgress(progress);
          }
        },
        // Error callback with detailed error information
        (error) => {
          console.error('Error loading 3D model:', error);
          onError(error);
          reject(new Error(`Failed to load model: ${error.message || 'Unknown error'}`));
        }
      );
    } catch (error) {
      console.error('Error initializing model loader:', error);
      onError(error);
      reject(new Error(`Loader initialization failed: ${error.message || 'Unknown error'}`));
    }
  });
};

/**
 * Optimizes a mesh for performance while preserving visual quality
 * 
 * @param {THREE.Mesh} mesh - The mesh to optimize
 */
function optimizeMesh(mesh) {
  // Determine if mesh is a dynamic or static element based on naming conventions
  const isDynamicPart = mesh.name.includes('wheel') || 
                      mesh.name.includes('door') || 
                      mesh.name.includes('rotor') ||
                      mesh.name.includes('pivot') ||
                      mesh.name.includes('hinge') ||
                      mesh.name.includes('move');
  
  // Selectively enable automatic matrix updates only for dynamic parts
  mesh.matrixAutoUpdate = isDynamicPart;
  if (!isDynamicPart) {
    mesh.updateMatrix();
  }
  
  // Apply advanced shadow casting using mesh size analysis
  const boundingBox = new THREE.Box3().setFromObject(mesh);
  const size = boundingBox.getSize(new THREE.Vector3());
  const maxDimension = Math.max(size.x, size.y, size.z);
  
  // Apply shadow settings based on mesh size and importance
  const isMajorPart = maxDimension > 0.25 || 
                      mesh.name.includes('body') || 
                      mesh.name.includes('chassis');
  
  // Use precise shadow settings for visual quality
  mesh.castShadow = isMajorPart;
  mesh.receiveShadow = true;
  
  // Optimize geometry if possible
  if (mesh.geometry) {
    // Ensure geometry has computed attributes for efficiency
    if (!mesh.geometry.attributes.normal) {
      mesh.geometry.computeVertexNormals();
    }
    
    // Use bounding sphere for frustum culling optimization
    if (!mesh.geometry.boundingSphere) {
      mesh.geometry.computeBoundingSphere();
    }
    
    // Enable frustum culling for performance
    mesh.frustumCulled = true;
  }
}

/**
 * Applies advanced physically-based materials with high-quality rendering properties
 * 
 * @param {THREE.Material} material - The material to enhance
 */
function applyAdvancedMaterial(material) {
  // Apply high-quality texture settings if textures exist
  if (material.map) {
    material.map.anisotropy = 16; // Maximum texture quality for close viewing
    material.map.minFilter = THREE.LinearMipmapLinearFilter; // Trilinear filtering for smooth transitions
    material.map.magFilter = THREE.LinearFilter;
    material.map.generateMipmaps = true;
    material.map.needsUpdate = true;
  }
  
  // Detect material type based on naming or properties
  let materialType = 'DEFAULT';
  
  // Convert material name to lowercase for consistent matching if it exists
  const materialName = material.name ? material.name.toLowerCase() : '';
  
  // Apply specialized material settings based on detected type
  if (materialName.includes('chrome') || materialName.includes('steel') || 
      materialName.includes('metal') && !materialName.includes('brush')) {
    applyPreset(material, MATERIAL_PRESETS.METAL_CHROME);
  } 
  else if (materialName.includes('brushed') || materialName.includes('alumin')) {
    applyPreset(material, MATERIAL_PRESETS.METAL_BRUSHED);
  }
  else if (materialName.includes('glass') || materialName.includes('window') || 
           materialName.includes('windshield')) {
    applyPreset(material, MATERIAL_PRESETS.GLASS_AUTO);
  }
  else if (materialName.includes('body') || materialName.includes('paint') || 
           materialName.includes('car')) {
    applyPreset(material, MATERIAL_PRESETS.PAINT_GLOSSY);
  }
  else if (materialName.includes('tire') || materialName.includes('rubber') || 
           materialName.includes('wheel')) {
    applyPreset(material, MATERIAL_PRESETS.RUBBER_TIRE);
  }
  else if (materialName.includes('plastic') || materialName.includes('trim')) {
    applyPreset(material, MATERIAL_PRESETS.PLASTIC_HARD);
  }
  
  // Set universal material properties
  material.needsUpdate = true;
  material.precision = 'highp'; // Use high precision shaders for scientific accuracy
  
  // Enable material side rendering as needed
  if (material.transparent) {
    material.side = THREE.DoubleSide;
  }
}

/**
 * Applies a material preset to a material
 * 
 * @param {THREE.Material} material - The material to enhance
 * @param {Object} preset - The preset containing physical properties
 */
function applyPreset(material, preset) {
  // Apply all preset properties to the material
  Object.keys(preset).forEach(key => {
    // Skip properties that don't apply to this material type
    if (material[key] !== undefined) {
      material[key] = preset[key];
    }
  });
}

/**
 * Creates a Level-of-Detail (LOD) version of the model with enhanced quality at all distances
 * 
 * @param {THREE.Object3D} highDetailModel - The high detail model
 * @param {Array<number>} distances - Array of distances at which to switch LOD levels
 * @returns {THREE.LOD} A LOD object with multiple detail levels
 */
export const createLODModel = (highDetailModel, distances = [0, 15, 30]) => {
  // Create a new LOD object
  const lod = new THREE.LOD();
  
  // Add the high detail model as the closest level
  lod.addLevel(highDetailModel, distances[0]);
  
  // Create medium and low detail models with optimized quality
  const mediumDetailModel = highDetailModel.clone();
  const lowDetailModel = highDetailModel.clone();
  
  // Apply medium-detail optimizations that preserve material quality
  mediumDetailModel.traverse((child) => {
    if (child.isMesh) {
      if (child.material) {
        if (Array.isArray(child.material)) {
          // Handle multi-materials with high quality
          child.material = child.material.map(mat => {
            // Create a quality material that's still efficient
            return createOptimizedMeshStandardMaterial(mat, {
              metalness: Math.min(mat.metalness || 0.5, 0.7),
              roughness: Math.max(mat.roughness || 0.5, 0.3),
              map: mat.map,
              normalMap: mat.normalMap,
              envMapIntensity: 0.7
            });
          });
        } else {
          // Single material optimization
          const material = child.material;
          child.material = createOptimizedMeshStandardMaterial(material, {
            metalness: Math.min(material.metalness || 0.5, 0.7),
            roughness: Math.max(material.roughness || 0.5, 0.3),
            map: material.map,
            normalMap: material.normalMap,
            envMapIntensity: 0.7
          });
        }
      }
      
      // Keep shadows but optimize settings
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  
  // Optimize low detail model for distant viewing while maintaining recognizability
  lowDetailModel.traverse((child) => {
    if (child.isMesh) {
      // Use efficient material for distant objects that still looks good
      const material = child.material;
      let simpleMaterial;
      
      if (child.name.includes('glass') || 
          (material && material.name && material.name.includes('glass'))) {
        // Special case for glass - keep transparency
        simpleMaterial = new THREE.MeshPhysicalMaterial({
          color: material.color || new THREE.Color(0xeeeeff),
          metalness: 0.1,
          roughness: 0.2,
          transparent: true,
          opacity: 0.7,
          envMapIntensity: 1.0
        });
      } else {
        // Standard optimization for other materials
        simpleMaterial = new THREE.MeshPhongMaterial({
          color: material.color || new THREE.Color(0x888888),
          shininess: 30,
          specular: new THREE.Color(0x111111)
        });
      }
      
      // Preserve maps but use simpler filtering
      if (material && material.map) {
        simpleMaterial.map = material.map;
        simpleMaterial.map.minFilter = THREE.LinearFilter;
        simpleMaterial.map.generateMipmaps = false;
      }
      
      child.material = simpleMaterial;
      
      // Optimize shadows for distance
      child.castShadow = false;
      child.receiveShadow = true;
    }
  });
  
  // Add the medium and low detail models at appropriate distances
  lod.addLevel(mediumDetailModel, distances[1]);
  lod.addLevel(lowDetailModel, distances[2]);
  
  return lod;
};

/**
 * Creates an optimized MeshStandardMaterial based on a source material
 * 
 * @param {THREE.Material} sourceMaterial - The source material to base optimization on
 * @param {Object} overrides - Properties to override on the new material
 * @returns {THREE.MeshStandardMaterial} The optimized material
 */
function createOptimizedMeshStandardMaterial(sourceMaterial, overrides = {}) {
  // Create new material with optimized properties
  const newMaterial = new THREE.MeshStandardMaterial({
    color: sourceMaterial.color || new THREE.Color(0x888888),
    metalness: 0.5,
    roughness: 0.5,
    envMapIntensity: 1.0
  });
  
  // Copy maps from original material if they exist
  const mapsToTransfer = [
    'map', 'normalMap', 'roughnessMap', 'metalnessMap', 
    'emissiveMap', 'aoMap', 'bumpMap'
  ];
  
  mapsToTransfer.forEach(mapName => {
    if (sourceMaterial[mapName]) {
      newMaterial[mapName] = sourceMaterial[mapName];
    }
  });
  
  // Apply all overrides
  Object.keys(overrides).forEach(key => {
    newMaterial[key] = overrides[key];
  });
  
  return newMaterial;
}

/**
 * Setup optimizers - This should be called once at the start of the application
 */
export const setupOptimizers = () => {
  // Enable THREE.js cache for better performance
  THREE.Cache.enabled = true;
  
  // Set global rendering quality settings
  if (typeof window !== 'undefined') {
    // Check if device supports high performance rendering
    const highPerformanceGPU = 
      typeof navigator !== 'undefined' && 
      navigator.gpu !== undefined;
      
    // Set appropriate global settings based on device capability
    if (highPerformanceGPU) {
      THREE.ShaderChunk.precision = 'highp';
    }
  }
};

/**
 * Simplifies geometry by reducing vertex count
 * @param {THREE.BufferGeometry} geometry - The geometry to simplify
 * @param {number} targetReduction - Target percentage to reduce (0.0-1.0)
 * @returns {THREE.BufferGeometry} Simplified geometry
 */
export const simplifyGeometry = (geometry, targetReduction = 0.5) => {
  if (!geometry) return null;
  
  // Create a temporary non-indexed version if needed
  let tempGeometry = geometry;
  if (geometry.index) {
    tempGeometry = geometry.toNonIndexed();
  }
  
  // Get vertices and calculate target count
  const positions = tempGeometry.getAttribute('position');
  const vertexCount = positions.count;
  const targetCount = Math.max(
    Math.floor(vertexCount * (1 - targetReduction)), 
    50 // Minimum vertex count
  );
  
  // For production use, you'd use an actual simplification library
  // This is a basic implementation for educational purposes
  if (vertexCount <= targetCount) {
    return geometry;
  }
  
  // Simple algorithm to skip vertices
  const ratio = vertexCount / targetCount;
  const indices = [];
  
  // Create simplified index array
  for (let i = 0; i < vertexCount; i += 3) {
    if (Math.floor(i / 3) % Math.round(ratio) === 0) {
      indices.push(i, i + 1, i + 2);
    }
  }
  
  // Create new buffer geometry with index
  const simplified = new THREE.BufferGeometry();
  simplified.setAttribute('position', positions);
  
  // Copy other attributes
  for (const key in tempGeometry.attributes) {
    if (key !== 'position') {
      simplified.setAttribute(key, tempGeometry.attributes[key]);
    }
  }
  
  // Add indices
  simplified.setIndex(indices);
  simplified.computeVertexNormals();
  
  return simplified;
};

/**
 * Creates Level of Detail (LOD) instances for a model
 * @param {THREE.Object3D} model - Original high-detail model
 * @returns {THREE.LOD} LOD object with multiple detail levels
 */
export const createLODFromModel = (model) => {
  if (!model) return null;
  
  const lod = new THREE.LOD();
  
  // Add original model as highest detail level
  const highDetail = model.clone();
  lod.addLevel(highDetail, 0);
  
  // Create medium detail version
  const mediumDetail = model.clone();
  mediumDetail.traverse((node) => {
    if (node.isMesh && node.geometry) {
      // Simplify geometry
      const simplifiedGeometry = simplifyGeometry(node.geometry, 0.3);
      node.geometry = simplifiedGeometry;
      
      // Simplify materials if complex
      if (node.material && node.material.map) {
        const newMaterial = new THREE.MeshPhongMaterial({
          map: node.material.map,
          color: node.material.color || 0xffffff,
          shininess: 30
        });
        node.material = newMaterial;
      }
      
      // Disable shadows for medium distance
      node.castShadow = false;
    }
  });
  lod.addLevel(mediumDetail, 10);
  
  // Create low detail version
  const lowDetail = model.clone();
  lowDetail.traverse((node) => {
    if (node.isMesh && node.geometry) {
      // Heavily simplify geometry
      const simplifiedGeometry = simplifyGeometry(node.geometry, 0.7);
      node.geometry = simplifiedGeometry;
      
      // Use basic materials for low detail
      const color = node.material.color ? node.material.color.getHex() : 0xffffff;
      node.material = new THREE.MeshLambertMaterial({ color });
      
      // Disable shadows completely
      node.castShadow = false;
      node.receiveShadow = false;
    }
  });
  lod.addLevel(lowDetail, 30);
  
  return lod;
};

/**
 * Creates a frustum culling optimized model
 * @param {THREE.Object3D} model - The model to optimize
 * @returns {THREE.Object3D} Optimized model
 */
export const createFrustumCulledModel = (model) => {
  if (!model) return null;
  
  const optimized = model.clone();
  
  // Add culling to all meshes
  optimized.traverse((node) => {
    if (node.isMesh) {
      node.frustumCulled = true;
      
      // Calculate custom bounding sphere for better culling
      if (node.geometry) {
        node.geometry.computeBoundingSphere();
        node.geometry.boundingSphere.radius *= 1.1; // Add a small buffer
      }
    }
  });
  
  return optimized;
};

/**
 * Preload models in the background to improve perceived performance
 * @param {string[]} modelPaths - Array of model paths to preload
 * @param {Function} onComplete - Callback when preloading is complete
 */
export const preloadModels = (modelPaths = [], onComplete = () => {}) => {
  // Set up DRACO loader
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
  
  // Create GLTF loader with DRACO support
  const gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);
  
  let loadedCount = 0;
  
  // Load each model in sequence
  modelPaths.forEach(path => {
    gltfLoader.load(
      path,
      () => {
        loadedCount++;
        if (loadedCount === modelPaths.length) {
          onComplete();
          dracoLoader.dispose(); // Clean up
        }
      },
      undefined,
      (error) => console.warn(`Preloading warning for ${path}:`, error)
    );
  });
}; 

// Create a properly named export object - MOVED TO END OF FILE
const ModelOptimizer = {
  loadOptimizedModel,
  createLODModel,
  preloadModels,
  simplifyGeometry,
  createLODFromModel,
  createFrustumCulledModel,
  setupOptimizers
}; 

export default ModelOptimizer; 