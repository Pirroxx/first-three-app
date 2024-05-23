import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bubble(props) {
  const { nodes, materials } = useGLTF("./models/bubble.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[5.009, 33.638, 4.69]}>
        <group position={[0, -3.173, 0]}>
          <group position={[-18.288, 0, 0]} rotation={[0, 0, 0.098]}>
            <mesh
              geometry={nodes.Sphere_8.geometry}
              material={materials.Zoya}
              position={[0, 30.685, 95.46]}
              scale={0.613}
            />
            <mesh
              geometry={nodes.Sphere_7.geometry}
              material={materials.Zoya}
              position={[0, 54.21, 124.747]}
              scale={0.649}
            />
            <mesh
              geometry={nodes.Sphere_10.geometry}
              material={materials.Zoya}
              position={[0, -2.989, 54.086]}
              rotation={[-0.871, 0, 0]}
              scale={0.862}
            />
            <mesh
              geometry={nodes.Sphere_9.geometry}
              material={materials.Zoya}
              position={[0, 66.886, 58.497]}
              scale={0.444}
            />
            <mesh
              geometry={nodes.Sphere_5.geometry}
              material={materials.Zoya}
              position={[0, 80.616, 90.179]}
              scale={0.518}
            />
            <mesh
              geometry={nodes.Sphere_4.geometry}
              material={materials.Zoya}
              position={[0, 89.737, 85.858]}
              scale={0.816}
            />
            <mesh
              geometry={nodes.Sphere_21.geometry}
              material={materials.Zoya}
              position={[-0.087, -83.828, 19.4]}
              rotation={[1.624, 0, 0]}
              scale={0.307}
            />
            <mesh
              geometry={nodes.Sphere_21_1.geometry}
              material={materials.Zoya}
              position={[0, -89.16, -6.813]}
              rotation={[1.005, 0, 0]}
              scale={0.356}
            />
            <mesh
              geometry={nodes.Sphere_20.geometry}
              material={materials.Zoya}
              position={[0, -94.155, 19.9]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_19.geometry}
              material={materials.Zoya}
              position={[0, -63.359, 20.764]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_18.geometry}
              material={materials.Zoya}
              position={[0, -76.023, 30.837]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_17.geometry}
              material={materials.Zoya}
              position={[0, -78.325, 10.115]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_16.geometry}
              material={materials.Zoya}
              position={[0, -57.468, 35.938]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_15.geometry}
              material={materials.Zoya}
              position={[0, -6.296, 5.674]}
              scale={0.532}
            />
            <mesh
              geometry={nodes.Sphere_14.geometry}
              material={materials.Zoya}
              position={[0, -45.363, 13.378]}
              scale={0.377}
            />
            <mesh
              geometry={nodes.Sphere_13.geometry}
              material={materials.Zoya}
              position={[0, -31.057, 39.789]}
              scale={0.583}
            />
            <mesh
              geometry={nodes.Sphere_12.geometry}
              material={materials.Zoya}
              position={[0, 32.771, 40.339]}
              scale={0.341}
            />
            <mesh
              geometry={nodes.Sphere_11.geometry}
              material={materials.Zoya}
              position={[0, 8.561, 2.373]}
              scale={0.644}
            />
            <mesh
              geometry={nodes.Sphere_6.geometry}
              material={materials.Zoya}
              position={[0, 95.499, 81.057]}
              scale={0.444}
            />
          </group>
          <group position={[-5.009, 0, 0]}>
            <mesh
              geometry={nodes.Sphere_8_1.geometry}
              material={materials.Zoya}
              position={[0, 30.685, 95.46]}
              scale={0.664}
            />
            <mesh
              geometry={nodes.Sphere_7_1.geometry}
              material={materials.Zoya}
              position={[0, 54.21, 124.747]}
              scale={0.649}
            />
            <mesh
              geometry={nodes.Sphere_10_1.geometry}
              material={materials.Zoya}
              position={[0, -1.632, 55.228]}
              rotation={[-0.871, 0, 0]}
              scale={0.685}
            />
            <mesh
              geometry={nodes.Sphere_9_1.geometry}
              material={materials.Zoya}
              position={[0, 66.886, 58.497]}
              scale={0.444}
            />
            <mesh
              geometry={nodes.Sphere_5_1.geometry}
              material={materials.Zoya}
              position={[0, 80.616, 90.179]}
              scale={0.518}
            />
            <mesh
              geometry={nodes.Sphere_4_1.geometry}
              material={materials.Zoya}
              position={[0, 89.737, 85.858]}
              scale={0.816}
            />
            <mesh
              geometry={nodes.Sphere_21_2.geometry}
              material={materials.Zoya}
              position={[-0.087, -83.828, 19.4]}
              rotation={[1.624, 0, 0]}
              scale={0.307}
            />
            <mesh
              geometry={nodes.Sphere_21_3.geometry}
              material={materials.Zoya}
              position={[0, -89.16, -6.813]}
              rotation={[1.005, 0, 0]}
              scale={0.356}
            />
            <mesh
              geometry={nodes.Sphere_20_1.geometry}
              material={materials.Zoya}
              position={[0, -94.155, 19.9]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_19_1.geometry}
              material={materials.Zoya}
              position={[0, -63.359, 20.764]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_18_1.geometry}
              material={materials.Zoya}
              position={[0, -76.023, 30.837]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_17_1.geometry}
              material={materials.Zoya}
              position={[0, -78.325, 10.115]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_16_1.geometry}
              material={materials.Zoya}
              position={[0, -57.468, 35.938]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_15_1.geometry}
              material={materials.Zoya}
              position={[0, -6.296, 5.674]}
              scale={0.532}
            />
            <mesh
              geometry={nodes.Sphere_14_1.geometry}
              material={materials.Zoya}
              position={[0, -45.363, 13.378]}
              scale={0.377}
            />
            <mesh
              geometry={nodes.Sphere_13_1.geometry}
              material={materials.Zoya}
              position={[0, -31.057, 39.789]}
              scale={0.583}
            />
            <mesh
              geometry={nodes.Sphere_12_1.geometry}
              material={materials.Zoya}
              position={[0, 32.771, 40.339]}
              scale={0.341}
            />
            <mesh
              geometry={nodes.Sphere_11_1.geometry}
              material={materials.Zoya}
              position={[0, 8.561, 2.373]}
              scale={0.644}
            />
            <mesh
              geometry={nodes.Sphere_6_1.geometry}
              material={materials.Zoya}
              position={[0, 95.499, 81.057]}
              scale={0.444}
            />
          </group>
          <group position={[13.712, 0, 0]} rotation={[0, 0, -0.15]}>
            <mesh
              geometry={nodes.Sphere_8_2.geometry}
              material={materials.Zoya}
              position={[0, 30.685, 95.46]}
              scale={0.524}
            />
            <mesh
              geometry={nodes.Sphere_7_2.geometry}
              material={materials.Zoya}
              position={[0, 54.21, 124.747]}
              scale={0.649}
            />
            <mesh
              geometry={nodes.Sphere_10_2.geometry}
              material={materials.Zoya}
              position={[0, -1.632, 55.228]}
              rotation={[-0.871, 0, 0]}
              scale={0.685}
            />
            <mesh
              geometry={nodes.Sphere_9_2.geometry}
              material={materials.Zoya}
              position={[0, 66.886, 58.497]}
              scale={0.444}
            />
            <mesh
              geometry={nodes.Sphere_5_2.geometry}
              material={materials.Zoya}
              position={[0, 80.616, 90.179]}
              scale={0.518}
            />
            <mesh
              geometry={nodes.Sphere_4_2.geometry}
              material={materials.Zoya}
              position={[0, 89.737, 85.858]}
              scale={0.816}
            />
            <mesh
              geometry={nodes.Sphere_21_4.geometry}
              material={materials.Zoya}
              position={[-0.087, -83.828, 19.4]}
              rotation={[1.624, 0, 0]}
              scale={0.307}
            />
            <mesh
              geometry={nodes.Sphere_21_5.geometry}
              material={materials.Zoya}
              position={[0, -89.16, -6.813]}
              rotation={[1.005, 0, 0]}
              scale={0.356}
            />
            <mesh
              geometry={nodes.Sphere_20_2.geometry}
              material={materials.Zoya}
              position={[0, -94.155, 19.9]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_19_2.geometry}
              material={materials.Zoya}
              position={[0, -63.359, 20.764]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_18_2.geometry}
              material={materials.Zoya}
              position={[0, -76.023, 30.837]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_17_2.geometry}
              material={materials.Zoya}
              position={[0, -78.325, 10.115]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_16_2.geometry}
              material={materials.Zoya}
              position={[0, -57.468, 35.938]}
              scale={0.305}
            />
            <mesh
              geometry={nodes.Sphere_15_2.geometry}
              material={materials.Zoya}
              position={[0, -6.296, 5.674]}
              scale={0.532}
            />
            <mesh
              geometry={nodes.Sphere_14_2.geometry}
              material={materials.Zoya}
              position={[0, -45.363, 13.378]}
              scale={0.377}
            />
            <mesh
              geometry={nodes.Sphere_13_2.geometry}
              material={materials.Zoya}
              position={[0, -31.057, 39.789]}
              scale={0.583}
            />
            <mesh
              geometry={nodes.Sphere_12_2.geometry}
              material={materials.Zoya}
              position={[0, 32.771, 40.339]}
              scale={0.341}
            />
            <mesh
              geometry={nodes.Sphere_11_2.geometry}
              material={materials.Zoya}
              position={[0, 8.561, 2.373]}
              scale={0.644}
            />
            <mesh
              geometry={nodes.Sphere_6_2.geometry}
              material={materials.Zoya}
              position={[0, 95.499, 81.057]}
              scale={0.444}
            />
          </group>
          <mesh
            geometry={nodes.Sphere.geometry}
            material={materials.Zoya}
            position={[-0.919, 18.26, 47.641]}
            scale={0.823}
          />
        </group>
        <mesh
          geometry={nodes.Sphere_1.geometry}
          material={materials.Zoya}
          position={[-5.009, 74.861, 87.967]}
          scale={1.177}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/bubble.glb");
