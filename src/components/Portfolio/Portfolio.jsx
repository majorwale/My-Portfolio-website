import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Buzz from "../../img/Buzz.png";
import Cblapp from "../../img/cbl-app.png";
import Commerce from "../../img/commerce.png";
import Web from "../../img/web.png";
import 'swiper/css'
import {themeContext} from "../../Context";
import {useContext} from "react";
const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; 
  return (
    <div className="portfolio" id="Portfolio">
        {/* heading */}
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor= {true}
        className= 'portfolio-slider'
        >
            <SwiperSlide>
                <img src={Buzz} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Cblapp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Commerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Web} alt="" />
            </SwiperSlide>




        </Swiper>
    </div>
  )
}

export default Portfolio