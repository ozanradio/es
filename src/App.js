import React from 'react';
import './App.css';
import { ARnft } from '@webarkit/ar-nft';
//import * as ARnftThreejs  from '@webarkit/arnft-threejs';
//import { NFTaddTJS } from '@webarkit/arnft-threejs/markermedia'
import * as THREE from 'three'

//console.log(SceneRendererTJS);

ARnft.init(640, 480, "DataNFT/pinball", '/../config.json', true)
  .then((nft) => {
    console.log(nft);
    let mat = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    let boxGeom = new THREE.BoxGeometry(1, 1, 1);
    let cube = new THREE.Mesh(boxGeom, mat);
    cube.position.z = 90;
    cube.scale.set(180, 180, 180);

    let root = new THREE.Object3D();
    root.matrixAutoUpdate = false;
    /*document.addEventListener('containerEvent', function (ev) {

      let canvas = document.getElementById('canvas');
      let fov = 0.8 * 180 / Math.PI;
      let ratio = window.clientWidth / window.clientHeight;
      let config = {
        "renderer": {
          "alpha": true,
          "antialias": true,
          "context": null,
          "precision": "mediump",
          "premultipliedAlpha": true,
          "stencil": true,
          "depth": true,
          "logarithmicDepthBuffer": true,
          "objVisibility": false
        },
        "camera": {
          "fov": fov,
          "ratio": ratio,
          "near": 0.01,
          "far": 1000
        }
      }

      /*let sceneThreejs = new SceneRendererTJS(config, canvas, root, nft.uuid, true);
      sceneThreejs.initRenderer();

      let nftAddTJS = new NFTaddTJS(root);
      nftAddTJS.add(cube);

      const tick = () => {
        sceneThreejs.draw();
        window.requestAnimationFrame(tick)
      }
      tick()*/

    //})
  }).catch((error) => {
    console.log(error);
  });


function App() {
  return (
    <div>
    </div>
  );
}

export default App;
