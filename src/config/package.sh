#!/bin/bash

# Variables
ZIP_FILE="lambda-deployment-package.zip"
BUILD_DIR="dist" # Directory containing your compiled code

# Step 1: Clean up previous build artifacts
echo "Cleaning up previous build artifacts..."
rm -f $ZIP_FILE

# Step 2: Install production dependencies
echo "Installing production dependencies..."
npm install

# Step 3: Create a deployment package
echo "Creating deployment package..."
zip -r $ZIP_FILE $BUILD_DIR node_modules public

echo "Deployment package created: $ZIP_FILE"