"use client";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

function Sky({ isRotating, ...props }) {
  const sky = useGLTF("/sky.glb");
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });
  return (
    <mesh ref={skyRef} {...props}>
      <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky;
