import React from "react";
import { Html } from "@react-three/drei";

function Loader() {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="h-24 w-24  border-2 border-opacity-80 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
      </div>
    </Html>
  );
}

export default Loader;
