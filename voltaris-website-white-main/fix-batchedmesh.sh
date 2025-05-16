#!/bin/bash

# Script to fix Three.js BatchedMesh import error

echo "Searching for files with BatchedMesh imports..."

# Search for all JS files in src directory that might have BatchedMesh import
BATCH_FILES=$(find src -type f -name "*.js" -exec grep -l "BatchedMesh" {} \; 2>/dev/null || echo "")

if [ -z "$BATCH_FILES" ]; then
    echo "No files with direct BatchedMesh imports found. Checking @react-three/drei imports..."
    DREI_FILES=$(find src -type f -name "*.js" -exec grep -l "import.*from.*@react-three/drei" {} \; 2>/dev/null || echo "")
    
    if [ -z "$DREI_FILES" ]; then
        echo "No files with @react-three/drei imports found."
        echo "The issue might be in a dependency. Let's create a workaround."
        
        # Create empty BatchedMesh stub in node_modules
        echo "Creating a stub for BatchedMesh..."
        mkdir -p node_modules/three/src/objects
        echo "export class BatchedMesh { constructor() { console.warn('BatchedMesh stub used'); } }" > node_modules/three/src/objects/BatchedMesh.js
        
        echo "Stub created. The build might now succeed but BatchedMesh functionality won't work."
    else
        echo "Files with @react-three/drei imports:"
        echo "$DREI_FILES"
        echo ""
        echo "Creating patched versions of these files..."
        
        for file in $DREI_FILES; do
            echo "Patching $file to import only used components..."
            cp "$file" "${file}.backup"
            
            # Extract imports from @react-three/drei
            DREI_IMPORTS=$(grep "import.*from.*@react-three/drei" "$file" | sed -E 's/.*import[^{]*\{([^}]*)\}.*/\1/' | tr ',' '\n' | tr -d ' ')
            
            # Filter out BatchedMesh if present
            FILTERED_IMPORTS=$(echo "$DREI_IMPORTS" | grep -v "BatchedMesh" | tr '\n' ',' | sed 's/,$//')
            
            # Replace the import statement
            sed -i "s/import.*from.*@react-three\/drei.*/import { $FILTERED_IMPORTS } from '@react-three\/drei';/" "$file"
            
            echo "Patched $file"
        done
    fi
else
    echo "Files with BatchedMesh imports:"
    echo "$BATCH_FILES"
    echo ""
    echo "Patching these files..."
    
    for file in $BATCH_FILES; do
        echo "Patching $file..."
        cp "$file" "${file}.backup"
        
        # Comment out the BatchedMesh import
        sed -i 's/import.*BatchedMesh.*from.*three/\/\/ BatchedMesh import disabled/' "$file"
        
        # Also replace usage of BatchedMesh with a console warning
        sed -i 's/new BatchedMesh/console.warn("BatchedMesh disabled"); new Object3D/g' "$file"
        
        echo "Added Object3D as fallback for BatchedMesh in $file"
    done
fi

echo "Patching complete. Try building again." 