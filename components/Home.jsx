"use client";
import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import Loader from "./Loader";
import { Island } from "@/models/Island";
import Bird from "@/models/Bird";
import Sky from "@/models/Sky";
import Plane from "@/models/Plane";
import HomeInfo from "./HomeInfo";
function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43.4];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };
  const adjusPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition, rotation];
  };
  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjusPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute text-black flex items-center justify-center top-28 left-0 right-0 z-10">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <Suspense fallback={<Loader />}>
          <Sky isRotating={isRotating} />
          <Bird />
          <Island
            rotation={rotation}
            scale={islandScale}
            position={islandPosition}
            isRotating={isRotating}
            setCurrentStage={setCurrentStage}
            setIsRotating={setIsRotating}
          />
          <Plane
            rotation={[0, 20, 0]}
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
          />
          <ambientLight intensity={0.5} />
          <pointLight />
          {/* sunlight */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <spotLight />
          <hemisphereLight
            skyColor="#b1e1ff"
            intensity={1}
            groundColor={"#000000"}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
