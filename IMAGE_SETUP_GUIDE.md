# Image Setup Guide for Our Work Gallery

## Images to Add

Based on your images, please add the following files to the `/public/images/` folder:

1. **sonalika-tractor-dealership.jpg**
   - Image showing Sonalika tractors at dealership with decorations
   - Shows your equipment and professional setup

2. **yellow-drilling-rig.jpg**
   - Bright yellow mobile drilling rig
   - Showcases your drilling equipment

3. **borewell-drilling-operation.jpg**
   - Active borewell drilling operation
   - Shows your team in action

4. **drill-rods-closeup.jpg**
   - Close-up of drill rods and components
   - Professional equipment detail

5. **drill-rods-collection.jpg**
   - Collection of drill rods laid out
   - Equipment inventory showcase

## Steps to Add Images

1. **Save your images** with the exact filenames listed above
2. **Place them** in the `/public/images/` folder
3. **Supported formats**: JPG, PNG, WebP
4. **Recommended size**: 1200x800px or larger for best quality
5. **File size**: Keep under 2MB per image for fast loading

## File Structure

```
public/
  images/
    sonalika-tractor-dealership.jpg
    yellow-drilling-rig.jpg
    borewell-drilling-operation.jpg
    drill-rods-closeup.jpg
    drill-rods-collection.jpg
```

## After Adding Images

Once you've added the images to the `/public/images/` folder, they will automatically appear in the "Our Work Gallery" section on the Services page.

The gallery will:
- Display images in a responsive grid
- Allow clicking to view full-size
- Show hover effects
- Be mobile-friendly

## Adding More Images

To add more images, simply:
1. Add the image file to `/public/images/`
2. Add the path to the `photos` array in `src/components/Services.jsx`:
   ```jsx
   photos={[
     '/images/sonalika-tractor-dealership.jpg',
     '/images/yellow-drilling-rig.jpg',
     '/images/borewell-drilling-operation.jpg',
     '/images/drill-rods-closeup.jpg',
     '/images/drill-rods-collection.jpg',
     '/images/your-new-image.jpg', // Add here
   ]}
   ```

