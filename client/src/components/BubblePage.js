import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts

    axiosWithAuth().get('/colors')
    // set that data to the colorList state property
    .then(res => {
      console.log('colors', res.data)
      setColorList(res.data)
    })
    .catch(err => {
      console.log(err)
    })


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
