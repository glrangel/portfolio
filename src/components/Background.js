import { Canvas, useFrame, extend} from 'react-three-fiber';
import * as THREE from "three";
import { softShadows } from '@react-three/drei';
import {Physics} from "@react-three/cannon";
import {useRef, useState} from 'react';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import {BloomPass} from 'three/examples/jsm/postprocessing/BloomPass';
import {GlitchPass} from 'three/examples/jsm/postprocessing/GlitchPass';
import {FilmPass} from 'three/examples/jsm/postprocessing/FilmPass';
softShadows();
extend({BloomPass, FilmPass, UnrealBloomPass, GlitchPass});

// function Box({position = [0,0,0], color = "yellow"}) {
//   const mesh = useRef();

//   useFrame(() => {
//     mesh.current.rotation.z = mesh.current.rotation.z += 0.005;

//   })
//   return (
//     <mesh
//       castShadow
//       ref={mesh}
//       position={position}
//     >
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial  attach="material" color={color}/>
//     </mesh>
//   )
// }

// function Plane({isOut}) {
//   const mesh = useRef();

//   useFrame((state) => {
//     mesh.current.rotation.y = mesh.current.rotation.y += 0.05;

//     if(!isOut) {

//     }

//   })
//   return (
//     <mesh
//       ref={mesh}
//       position={[-8,7, 15]}
//       // position={[0, 0, 0]}
//       rotation={[-Math.PI, 0, 0]}
//       receiveShadow
//     >
//       <planeBufferGeometry attach="geometry" line="lineSegments" args={[0.5, 0.5, 32,16]} />
//       <meshBasicMaterial side={THREE.DoubleSide} attach="material" color="#179ff4"/>
//     </mesh>
//   )
// }

function Sphere({isOut, position = [0,0,0], size, color, speed = 0.01}) {
  const mesh = useRef(),
    dx = 0.05 ;

  useFrame((state) => {
    mesh.current.rotation.y = mesh.current.rotation.y += 0.0015;

    if(!isOut) {
      mesh.current.position.set(-state.mouse.x*dx , state.mouse.y*dx )
      mesh.current.rotation.x += speed * (state.mouse.y - mesh.current.rotation.x);
      mesh.current.rotation.y += speed * (state.mouse.x - mesh.current.rotation.y);
    }

  })
  return (
    //points vs. mesh
    <mesh ref={mesh} position={position} rotation={[0,0, 0]}>
      <sphereBufferGeometry attach="geometry" args={size}/>
      {/* <torusBufferGeometry attach="geometry" args={[2, 1, 16, 50]}/> */}

      {/* wireframe wireframeLinewidth={1} */}
      <meshLambertMaterial metalness="0.7" roughness="0.2"  wireframe wireframeLinewidth={1} attach="material" color={color}/>
      {/* <pointsMaterial size="0.05"  color={color}/> */}
    </mesh>
  )
}

function Background() {
  const [state, setState] = useState({isOut: false, currEvent: ''});

  return (
      <Canvas
        onPointerOver={() => setState({isOut: false})}
        onPointerOut={() => setState({isOut: true})}
        id="canvas"
        // shadowMap
        camera={{position: [0, 0, -10], fov:50}}
      >
        {/* <Effects> */}
          {/* <unrealBloomPass attachArray="passes" exposure="0.5" bloomStrength="0.1" bloomRadius="0" /> */}
          {/* <glitchPass attachArray="passes"  /> */}
        {/* </Effects> */}
        {/* <OrbitControls/> */}
        <ambientLight intensity={0.1} />
         <directionalLight
          position={[0,0,-10]}
          intensity={1}
          color={"white"}
        />
         <directionalLight
          position={[-5,0,-10]}
          intensity={1}
          color={"red"}
        />
        <Physics>
          <Sphere isOut={state.isOut} color={"grey"} size={[2,16,2]}/>
          <Sphere isOut={state.isOut} color={"grey"} speed={0.03} position={[2,1 , 0]} size={[1,16,2]}/>
          <Sphere isOut={state.isOut} color={"grey"} speed={0.15} position={[-2,-1, 0]} size={[0.50,16,2]}/>
          {/* <Sphere isOut={state.isOut} color={"grey"} size={[1.5,20,20]}/>
          <Sphere isOut={state.isOut} color={"grey"} position={[2,1 , 0]} size={[0.5,16,2]}/>
          <Sphere isOut={state.isOut} color={"grey"} position={[-2,-1, 0]} size={[0.25,16,2]}/> */}
          {/* <Plane isOut={state.isOut}/> */}
        </Physics>
      </Canvas>
  );
}

export default Background;
