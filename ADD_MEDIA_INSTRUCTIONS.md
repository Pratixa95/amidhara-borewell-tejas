# How to Add Your Photos and Videos

## Adding Photos

1. **Place your photos** in the `/public/images/` folder
   - Supported formats: JPG, PNG, WebP
   - Recommended size: 800x600px or larger
   - Recommended file names: `borewell-1.jpg`, `drilling-1.jpg`, etc.

2. **Update the Services component** (`src/components/Services.jsx`):
   ```jsx
   <PhotoVideoGallery 
     photos={[
       '/images/borewell-1.jpg',
       '/images/borewell-2.jpg',
       '/images/drilling-1.jpg',
       '/images/drilling-2.jpg',
       // Add more photo paths here
     ]}
     videos={[
       // Add video paths here
     ]}
   />
   ```

## Adding Videos

### Option 1: Local Video Files
1. **Place your videos** in the `/public/videos/` folder
   - Supported formats: MP4, WebM
   - Recommended resolution: 1080p or 720p
   - Recommended file names: `drilling-process.mp4`, `installation.mp4`, etc.

2. **Update the Services component**:
   ```jsx
   <PhotoVideoGallery 
     photos={[...]}
     videos={[
       '/videos/drilling-process.mp4',
       '/videos/installation.mp4',
       // Add more video paths here
     ]}
   />
   ```

### Option 2: YouTube/Vimeo Videos
1. **Get the embed URL** from YouTube or Vimeo
2. **Update the Services component**:
   ```jsx
   <PhotoVideoGallery 
     photos={[...]}
     videos={[
       'https://www.youtube.com/embed/YOUR_VIDEO_ID',
       'https://player.vimeo.com/video/YOUR_VIDEO_ID',
       // Add more embed URLs here
     ]}
   />
   ```

## Example Structure

```
public/
  images/
    borewell-1.jpg
    borewell-2.jpg
    drilling-1.jpg
    installation-1.jpg
  videos/
    drilling-process.mp4
    installation-video.mp4
```

## Tips

- **Optimize images** before uploading (use tools like TinyPNG or ImageOptim)
- **Keep file sizes reasonable** (under 2MB for images, under 50MB for videos)
- **Use descriptive file names** for easier management
- **Test locally** before deploying to ensure all media loads correctly

