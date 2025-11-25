# Assets Setup Guide

## Required Files

### 1. Logo Image
**File:** `/public/images/amidhara-logo.png` (or `.jpg`)
- Used in: Sidebar logo and splash screen
- Recommended size: 400x400px or larger
- Format: PNG (with transparency) or JPG
- The sidebar will display this logo with hover effects

### 2. Tractor Image/Video for Splash Screen
**Option A - Video (Preferred):**
- File: `/public/videos/tractor-video.mp4` or `.webm`
- Recommended: 1080p or 720p resolution
- Duration: 5-10 seconds (looping)

**Option B - Image (Fallback):**
- File: `/public/images/sonalika-tractor-dealership.jpeg`
- This is already in your project
- Will be used if video is not available

## File Structure

```
public/
  images/
    amidhara-logo.png          ← Your logo (required)
    sonalika-tractor-dealership.jpeg  ← Already exists (used as fallback)
  videos/
    tractor-video.mp4          ← Optional: Real tractor video for splash screen
```

## Current Setup

1. **Sidebar Logo**: Uses `/images/amidhara-logo.png`
   - If not found, shows a fallback design
   - Hover effects and animations included

2. **Splash Screen**: 
   - First tries: `/videos/tractor-video.mp4`
   - Falls back to: `/images/sonalika-tractor-dealership.jpeg`
   - Shows your logo at the top

3. **Email Form**: Configured to send to infoamidharaborewell@gmail.com
   - Uses Formspree service
   - See FORMSPREE_SETUP.md for configuration

## Quick Setup

1. **Add your logo:**
   - Save as `amidhara-logo.png`
   - Place in `/public/images/` folder

2. **Add tractor video (optional):**
   - Save as `tractor-video.mp4`
   - Place in `/public/videos/` folder
   - If not added, the existing tractor image will be used

3. **Test the form:**
   - Fill out contact form
   - Check your email: infoamidharaborewell@gmail.com

