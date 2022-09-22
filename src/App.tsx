import { useState } from "react";
import "./App.css";
import "aframe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <a-scene>
        <a-box src="https://i.imgur.com/mYmmbrp.jpg" position="0 2 -5" rotation="0 45 45" scale="2 2 2"></a-box>
        <a-sky color="#222" src="/assets/sky2.png"></a-sky>
        <a-entity position="0 0 1" gltfModel="/speculMan.glb" width="1" scale="1 1 1"></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
