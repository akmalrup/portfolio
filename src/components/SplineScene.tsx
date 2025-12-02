"use client";

import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

interface SplineSceneProps {
  sceneUrl: string;
  enableZoomAnimation?: boolean;
}

/**
 * Spline 3D scene component with optional zoom animation.
 * 
 * Props:
 * - sceneUrl: The URL of your exported Spline scene
 * - enableZoomAnimation: If true, animates from zoomed-in to normal view
 * 
 * Animation behavior (when enabled):
 * - Starts zoomed in (3.5x scale) focused on the watch screen
 * - Smoothly zooms out to normal view over 2 seconds
 * - Uses easeInOut for smooth, professional motion
 * 
 * To get your scene URL:
 * 1. Create your 3D scene in Spline (spline.design)
 * 2. Click "Export" in the top right
 * 3. Choose "Code Export" and copy the scene URL
 * 4. Pass it to this component via the sceneUrl prop
 * 
 * Example URL format: https://prod.spline.design/XXXXXXXXXXXXXXXX/scene.splinecode
 */

export default function SplineScene({ sceneUrl, enableZoomAnimation = false }: SplineSceneProps) {
  if (enableZoomAnimation) {
    return (
      <motion.div
        className="w-full h-full"
        initial={{ scale: 3.5 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 2, 
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <Spline scene={sceneUrl} />
      </motion.div>
    );
  }

  return (
    <div className="w-full h-full">
      <Spline scene={sceneUrl} />
    </div>
  );
}

