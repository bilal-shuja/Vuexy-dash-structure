import React,{useState,useEffect} from 'react';

const WindowDimension = () => {
   const getWindowDimensions = ()=>{
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
   }
   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
   const  handleResize = ()=> {
    setWindowDimensions(getWindowDimensions());
}
    console.log('width'+windowDimensions.width);
    console.log('height'+windowDimensions.height);

   useEffect(() => {
    handleResize();
  }, []);
  return windowDimensions;

}

export default WindowDimension;