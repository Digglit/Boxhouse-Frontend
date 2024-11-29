"use client";
import { Canvas } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import { CameraControls, Stars } from "@react-three/drei";

export default function StarsBackdrop({ factor, opacity, rotate = false }) {
  let cameraControlRef = useRef(null);
  let currentTime = null;
  let start = null;

  useEffect(() => {
    const rotateCameraInterval = setInterval(() => {
      requestAnimationFrame((timeStamp) => {
        if (currentTime !== timeStamp) {
          cameraControlRef.current?.rotate(0.0015, 0, true);
        }

        currentTime = timeStamp;
      });
    }, 100);

    if (!rotate) clearInterval(rotateCameraInterval);

    return () => {
      if (rotateCameraInterval) {
        clearInterval(rotateCameraInterval);
      }
    };
  }, []);

  return (
    // <Canvas style={{height: '100vh', background: '#404040'}}>
    <Canvas
      style={{
        height: "100%",
        background: "#40404000",
        opacity: opacity ? opacity : 1,
        position: "absolute",
        pointerEvents: "none",
      }}
    >
      <CameraControls ref={cameraControlRef} />
      <ambientLight intensity={0.5} />
      <Stars depth={200} factor={factor} count={4000} speed={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
    </Canvas>
  );
}
