import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "aframe";

function App() {
  const [count, setCount] = useState(0);

  let xSize = 1;

  return (
    <div className="App">
      {/* <Scene>
        <Box position={{ x: -1, y: 0.5, z: -3 }} rotation={{ x: 0, y: 45, z: 0 }} color="#4CC3D9" />
        <Sphere position={{ x: 0, y: 1.25, z: -5 }} radius={1.25} color="#EF2D5E" />
        <Cylinder position={{ x: 1, y: 0.75, z: -3 }} radius={0.5} height={1.5} color="#FFC65D" />
        <Plane position={{ x: 0, y: 0, z: -4 }} rotation={{ x: -90, y: 0, z: 0 }} width={4} height={4} color="#7BC8A4" />
        <Entity position={{ x: 0, y: 0, z: -4 }} gltfModel={"/speculMan.glb"} width={4} scale={{ x: xSize, y: xSize, z: xSize }} animation={{ property: "scale", to: "" }}></Entity>
        <Sky src={"/assets/sky2.png"} />
      </Scene> */}
      <a-scene>
        <a-box src="https://i.imgur.com/mYmmbrp.jpg" position="0 2 -5" rotation="0 45 45" scale="2 2 2"></a-box>
        <a-sky color="#222" src="/assets/sky2.png"></a-sky>
        <a-entity position="0 0 1" gltfModel="/speculMan.glb" width="1" scale="1 1 1"></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
