/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 ./public/imac_white.glb --types --transform --instance
Files: ./public/imac_white.glb [1MB] > imac_white-transformed.glb [88.12KB] (91%)
*/

// model downloaded from: https://archive3d.net/?a=download&id=bf2dc0df

import * as THREE from "three";
import React from "react";
import {
  useGLTF,
  Html,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { GLTF } from "three-stdlib";
import Image from "next/image";
import top from "../../public/Frame1.png"
import githubicon from "../../public/github-mark-white.svg"
import dummy from "../../public/dummyimg.png";

type GLTFResult = GLTF & {
  nodes: {
    Box01_1: THREE.Mesh;
    Box01_2: THREE.Mesh;
  };
  materials: {
    PaletteMaterial002: THREE.MeshStandardMaterial;
    PaletteMaterial001: THREE.MeshStandardMaterial;
  };
};

useGLTF.preload("/imac.glb");

/* This component renders a monitor (taken out of the gltf model)
   It renders a custom scene into a texture and projects it onto monitors screen */
function ImacModel({ children, ...props }: { children: React.ReactNode }) {
  const { nodes, materials } = useGLTF("/imac.glb") as GLTFResult;
  return (
    <group {...props}>
      <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box01_2.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh geometry={nodes.Box01_1.geometry}>
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#000000"
            metalness={0.8}
            mirror={0}
          />
          {children}
        </mesh>
      </group>
    </group>
  );
}

/* Renders a monitor with some text */
export function ScreenHtml(props: JSX.IntrinsicElements["group"]) {
  return (
    <ImacModel {...props}>
      {/* Drei's HTML component can "hide behind" canvas geometry */}
      <Html
        className="screen"
        rotation-x={Math.PI / 2.25}
        position={[0, -2.17, 13]}
        transform
        occlude
      >
        <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
          <div className="top-image">
            <Image src={top} alt={""} />
          </div>
          <div className="item-row-container">
            <div className="item-date">2023</div>
            <div className="item-img">
              <Image src={dummy} alt={""} />
            </div>
            <div className="item-desc"></div>
          </div>
          <div className="footer">
            <div className="footer-left">
              <div>Contact: tomoki.sawai(a)outlook.com</div>
            </div>
            <div className="footer-right">
              <a href="https://github.com/polatria">
                <Image src={githubicon} alt={""} />
              </a>
            </div>
          </div>
        </div>
      </Html>
    </ImacModel>
  );
}
