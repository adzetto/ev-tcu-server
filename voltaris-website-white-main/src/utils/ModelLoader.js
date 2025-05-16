import { useGLTF } from '@react-three/drei';

// This helper ensures we're loading the model from the correct path
export function loadCarModel() {
  const modelPath = process.env.PUBLIC_URL + '/models/model_3d.gltf';
  
  // Load our model with error handling
  try {
    return useGLTF(modelPath);
  } catch (error) {
    console.error('Error loading 3D model:', error);
    return null;
  }
}

// Preload the model to improve performance (using correct public path)
useGLTF.preload(process.env.PUBLIC_URL + '/models/model_3d.gltf');
