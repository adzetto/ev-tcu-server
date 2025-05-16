# Enhanced 3D Model Viewer Integration

This directory contains the enhanced 3D model viewer components for the Voltaris website, based on the implementation from the TRY-3D-VIEW/assem2 directory.

## Important: Required Files

For the 3D viewer to work properly, you need to copy several binary files from the TRY-3D-VIEW/assem2 directory to the public/models directory.

### Files to Copy:

1. From `C:\Users\adzetto\Desktop\TRY-3D-VIEW\assem2\`:
   - Design_17inch-1.bin
   - Design_17inch-2.bin
   - Design_17inch-3.bin
   - Design_17inch-4.bin
   - Part2_v4_ass-1.bin

2. To `C:\Users\adzetto\Desktop\website\voltaris-website\voltaris-website\public\models\`

### Copy Commands:

You can use Windows Explorer to copy these files, or run these commands in a Command Prompt:

```
cd C:\Users\adzetto\Desktop
copy "TRY-3D-VIEW\assem2\Design_17inch-1.bin" "website\voltaris-website\voltaris-website\public\models\"
copy "TRY-3D-VIEW\assem2\Design_17inch-2.bin" "website\voltaris-website\voltaris-website\public\models\"
copy "TRY-3D-VIEW\assem2\Design_17inch-3.bin" "website\voltaris-website\voltaris-website\public\models\"
copy "TRY-3D-VIEW\assem2\Design_17inch-4.bin" "website\voltaris-website\voltaris-website\public\models\"
copy "TRY-3D-VIEW\assem2\Part2_v4_ass-1.bin" "website\voltaris-website\voltaris-website\public\models\"
```

## Components:

- **EnhancedModelViewer.js**: The main component that integrates the 3D viewer from TRY-3D-VIEW
- **ModelLoader.js**: Utility functions for loading and optimizing 3D models
- **CopyModelFiles.js**: Instructions for copying the necessary files

## Integration with Main Website:

The enhanced 3D model viewer has been integrated into the `TechnicalModelViewer.js` component, with a toggle button to switch between the original and enhanced viewers.

## Features:

1. Improved lighting and materials
2. Interactive wind flow visualization
3. Analysis overlay
4. Environment presets
5. Smooth animations and interactions
6. Performance optimizations

---

If you have any issues with the integration, please contact the developer.
