import React, { useRef, useEffect } from 'react';
import { Canvas } from  '@react-three/fiber';
import { CameraControls, Stars } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 10, 0] }))
  return (
    <mesh onClick={() => {
      api.velocity.set(0, 2, 0);
    }} ref={ref} position={[0, 1, 0]}>
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='hotpink' />
    </mesh>
  )
}

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0]
  }));
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshLambertMaterial attach='material' color='lightblue' />
    </mesh>
  )
}

export default function SnowBackdrop({factor, opacity, rotate = false}) {
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
      })
    }, 100)

    if (!rotate)
      clearInterval(rotateCameraInterval)

    return (() => {
      if (rotateCameraInterval) {
        clearInterval(rotateCameraInterval);
      }
    })
  }, [])

  return (
    // <Canvas style={{height: '100vh', background: '#404040'}}>
    <Canvas style={{height: '100%', background: '#40404000', opacity: opacity ? opacity : 1, position: 'absolute', pointerEvents: 'none'}}>
      <CameraControls
        ref={cameraControlRef}
      />
      <ambientLight intensity={0.5} />
      <Stars depth={200} factor={factor} count={4000} speed={1}/>
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
      />
      {/* <Physics> */}
        {/* <Box /> */}
        {/* <Plane /> */}
      {/* </Physics> */}
    </Canvas>
  );
}