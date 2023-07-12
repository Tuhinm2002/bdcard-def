import React, { useRef } from "react";
import './assets/styles/App.css';
import Firstimage from "./components/Firstimage";
import Secondimage from "./components/Secondimage";
import Thirdimage from "./components/Thirdimage";
import Fourthimage from "./components/Fourthimage";
import Fifthimage from "./components/Fifthimage";
import Sixthimage from "./components/Sixthimage";
import Seventhimage from "./components/Seventhimage";
import Eigthimage from "./components/Eigthimage";
import moon from './assets/images/moon.png';
import land from './assets/images/land.png';
import earth from './assets/images/earth1.jpg';
import planet from './assets/images/planet.jpg';
import cat from './assets/images/cat.gif';

import { Parallax,ParallaxLayer } from "@react-spring/parallax";

function App() {

  const ref = useRef();

  return (
    <Parallax pages={11} style={{top:0}} ref={ref}>
      
      <ParallaxLayer
      sticky={{start:0.4,end:10}}>
        <img src={cat} alt="" style={{marginLeft:550}}/>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0}
      speed={1}
      factor={2}
      style={{
        backgroundImage:`url(${moon})`,
        backgroundSize:'cover'
      }} />

      <ParallaxLayer offset={9}
      speed={1}
      factor={3}
      style={{
        backgroundImage:`url(${land})`,
        backgroundSize:'cover'
      }}/>

      <ParallaxLayer offset={2.7}
      speed={1}
      factor={3}
      style={{
        backgroundImage:`url(${earth})`,
        backgroundSize:'cover'
      }}/>

    <ParallaxLayer offset={6.4}
      speed={1}
      factor={2}
      style={{
        backgroundImage:`url(${planet})`,
        backgroundSize:'cover'
      }}/>


      <ParallaxLayer speed={0.5} offset={0.2}
      onClick={()=>ref.current.scrollTo(10)}>
        
        <Firstimage></Firstimage>
      </ParallaxLayer>

      <ParallaxLayer offset={1.9} speed={0.5}>
      <Secondimage></Secondimage>
      </ParallaxLayer>

      <ParallaxLayer speed={0.5} offset={3.2}>
        <Thirdimage></Thirdimage>
      </ParallaxLayer>

      <ParallaxLayer offset={4.2} speed={0.5}>
        <Fourthimage></Fourthimage>
      </ParallaxLayer>

      <ParallaxLayer speed={0.5} offset={5.2}>
        <Fifthimage></Fifthimage>
      </ParallaxLayer>

      <ParallaxLayer offset={6.9} speed={0.5}>
      <Sixthimage></Sixthimage>
      </ParallaxLayer>

      <ParallaxLayer speed={0.5} offset={8.2}>
        <Seventhimage></Seventhimage>
      </ParallaxLayer>

      <ParallaxLayer offset={9.3} speed={0.5}
      onClick={()=>ref.current.scrollTo(0.2)}>
      
      <Eigthimage></Eigthimage>
      </ParallaxLayer>

    </Parallax>
  )
}

export default App
