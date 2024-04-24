"use client";
import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useFrame } from "react-three-fiber";

function Bird() {
  const { scene, animations } = useGLTF("/bird.glb");
  const birdRef = useRef();
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    //    update the Y position Simulate the flight moving in a sine wave
    birdRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2 + 2;

    // check if the bird is out of the camera view
    if (birdRef.current.position.x > camera.position.x + 10) {
      // change rotation to backward and rotate the bird 180 degrees on the Y axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // change direction to foward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    // Update X and Z position based on the direction
    if (birdRef.current.rotation.y === 0) {
      // move the bird forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // move the bird backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });
  return (
    <mesh ref={birdRef} scale={[0.003, 0.003, 0.003]} position={[-5, 2, 1]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird;
