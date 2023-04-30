import React from 'react'
import Slider from "react-slick";
import "./carousel.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataBestSeller } from './carousel-data';

const Carousel = () => {

  return (
  <div className="card-slider">
  <div className="card-slide-track">
    {dataBestSeller.map(item=>(
      
       <div className="card-slide">
        <img src={item.linking} alt={item.title}/>
       
       </div>
       ))}
    </div>
   
    </div>



  )
}

export default Carousel

{/* <Slider {...settings}>
    {dataBestSeller.map(item=>(
      <div className="card-carousel">
       <div className="card-top-carousel">
        <img src={item.linking} alt={item.title}/>
       <h1>{item.title}</h1>
       </div>
        <div className="card-button-carousel">
        <h1>{item.price}</h1>
        <p>{item.category}</p>
        </div>
    </div>
    ))}
    </Slider> */}

      // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500,
  //   rows: 2,
  //   slidesPerRow: 2
  // };