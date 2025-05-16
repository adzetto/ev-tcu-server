import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Enhanced model loader utility for 3D models
 * Handles loading of GLTF models with optimized material settings
 */
export const loadEnhancedModel = (modelPath, onProgress = () => {}) => {
  return new Promise((resolve, reject) => {
    try {
      const gltfLoader = new GLTFLoader();
      
      gltfLoader.load(
        modelPath,
        (gltf) => {
          const modelScene = gltf.scene.clone();
          
          // Apply enhanced materials and optimizations
          modelScene.traverse((child) => {
            if (child.isMesh) {
              // Apply shadows
              child.castShadow = true;
              child.receiveShadow = true;
              
              // Enhance material properties
              if (child.material) {
                // Create a physical material for more realistic rendering
                const newMaterial = new THREE.MeshPhysicalMaterial({
                  color: child.material.color || new THREE.Color(0x888888),
                  metalness: 0.9,
                  roughness: 0.1,
                  clearcoat: 0.5,
                  clearcoatRoughness: 0.1,
                  envMapIntensity: 1.5,
                  reflectivity: 0.7
                });
                
                child.material = newMaterial;
              }
            }
          });
          
          // Center and scale the model
          const box = new THREE.Box3().setFromObject(modelScene);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          
          modelScene.position.x = -center.x;
          modelScene.position.y = -center.y;
          modelScene.position.z = -center.z;
          
          // Scale model to fit view
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 2 / maxDim;
          modelScene.scale.set(scale, scale, scale);
          
          resolve(modelScene);
        },
        // Progress callback
        (xhr) => {
          if (xhr.lengthComputable) {
            const progress = (xhr.loaded / xhr.total) * 100;
            onProgress(progress);
          }
        },
        // Error callback
        (error) => {
          console.error('Error loading 3D model:', error);
          reject(error);
        }
      );
    } catch (error) {
      console.error('Error initializing model load:', error);
      reject(error);
    }
  });
};

/**
 * Preload common model paths to improve performance
 */
export const preloadModels = () => {
  const modelPaths = [
    '/models/model_3d.gltf'
  ];
  
  modelPaths.forEach(path => {
    new GLTFLoader().load(path, () => {
      console.log(`Preloaded model: ${path}`);
    });
  });
};
