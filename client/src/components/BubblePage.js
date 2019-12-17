import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  console.log('bubble', props)
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  const fetchBubbles = () => {
    axiosWithAuth().get('/colors')
    // set that data to the colorList state property
    .then(res => {
      console.log('colors', res.data)
      setColorList(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
    useEffect(() => {
      fetchBubbles()
    },[])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} fetchBubbles={fetchBubbles} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
