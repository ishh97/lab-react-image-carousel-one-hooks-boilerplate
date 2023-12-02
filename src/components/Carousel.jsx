import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    let [count,setCount] = useState(0);

    let increase = () =>{
    if(count < 2){
        setCount(count = count +1)
        } 
    else{
        setCount(count = 0)
        }
    }
    
     
    let decrease = () =>{
        if(count>0){
            setCount(count = count - 1)
        } 
        else{
            setCount(count = 2)
        }
    }
       
        return(
            <div>
                <div  className="main">
                <button className="backwardArrow" onClick={decrease}>
                    <ArrowBackIosIcon/>
                </button>
                <div>
                    <img src={images[count].img} alt="" />
                    
                </div>
                    <button className="forwardArrow" onClick={increase}>
                <ArrowForwardIosIcon/>
                </button>
                </div>
                
                <div className="title">
                        <h1>{images[count].title}</h1>
                    </div> 
                <div className="subtitle">
                    <p>{images[count].subtitle}</p>
                    </div>
            </div>
          
        )
      
}


export default Carousel;