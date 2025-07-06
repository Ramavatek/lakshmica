#!/bin/bash

# GitHub Pages Setup Verification Script
echo "🔍 Checking GitHub Pages setup..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: This is not a git repository"
    exit 1
fi

# Check if we have a remote origin
if ! git remote get-url origin &> /dev/null; then
    echo "❌ Error: No remote origin found"
    echo "Please add your GitHub repository:"
    echo "git remote add origin https://github.com/USERNAME/REPOSITORY.git"
    exit 1
fi

REPO_URL=$(git remote get-url origin)
echo "✅ Repository: $REPO_URL"

# Check if workflow file exists
if [ ! -f ".github/workflows/deploy.yml" ]; then
    echo "❌ Error: Workflow file not found"
    exit 1
fi
echo "✅ Workflow file exists"

# Check if Next.js config is correct
if [ ! -f "next.config.mjs" ]; then
    echo "❌ Error: next.config.mjs not found"
    exit 1
fi
echo "✅ Next.js config exists"

# Build test
echo "🔨 Testing build..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✅ Build successful"

# Check dist folder
if [ ! -d "dist" ]; then
    echo "❌ Error: dist folder not created"
    exit 1
fi
echo "✅ Static files generated"

echo ""
echo "🎉 Setup verification complete!"
echo ""
echo "Next steps:"
echo "1. Commit and push your changes:"
echo "   git add ."
echo "   git commit -m 'Fix GitHub Pages deployment'"
echo "   git push origin main"
echo ""
echo "2. Go to your GitHub repository settings:"
echo "   - Navigate to Settings > Pages"
echo "   - Under 'Source', select 'GitHub Actions'"
echo "   - The workflow should run automatically"
echo ""
echo "3. Your site will be available at:"
echo "   https://USERNAME.github.io/REPOSITORY"
echo ""
echo "4. Check the Actions tab to monitor deployment progress"
