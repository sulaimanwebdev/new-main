import React, {useRef, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const Slider1 = () => {

    
let navigationPrevRef = React.useRef(null);
let navigationNextRef = React.useRef(null);
const [slidPrevsBtn, setSlidPrevsBtn] = React.useState(false);
const [slidNextBtn, setSlidNextBtn] = React.useState(true);




  return (
    <>
      <div className='z-[99999999999] w-full main-slider mt-[100px]'>
         <Swiper 
        
         
         spaceBetween={30}
         onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl =
                navigationPrevRef.current;
              swiper.params.navigation.nextEl =
                navigationNextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}

          breakpoints={{

            500: {
              width: 500,
              slidesPerView: 1,
            },

           
            800: {
              width: 800,
              slidesPerView: 3,
            },


            900: {
              width: 900,
              slidesPerView: 4,
            },

          }}
         modules={[Navigation]} className="mySwiper w-full h-full">
       
        <SwiperSlide className="max-w-[full] sm:max-w-full md:max-w-full lg:max-w-full  relative px-4 sm:px-0">
            <div className="w-[100%] h-[calc(100%-30px)] absolute top-[40px] sm:top-[20px] left-[0px]  bg-[#221B47] rounded-md -z-[99]"></div>
            <img src="/images/slider-image-1.png" alt="nft"  className=' mx-auto text-center rounded-2xl w-[full] sm:w-[180px]'/>
            <div className='text-white font-[600]  px-7 text-[18px] mt-[30px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2  px-7"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>

        <SwiperSlide className="max-w-[full] sm:max-w-full md:max-w-full lg:max-w-full  relative px-4 sm:px-0">
            <div className="w-[100%] h-[calc(100%-30px)] absolute top-[40px] sm:top-[20px] left-[0px]  bg-[#221B47] rounded-md -z-[99]"></div>
            <img src="/images/slider-image-2.png" alt="nft"  className=' mx-auto text-center rounded-2xl w-[full] sm:w-[180px]'/>
            <div className='text-white font-[600] px-7 text-[18px] mt-[30px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2  px-7"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


        <SwiperSlide className="max-w-[full] sm:max-w-full md:max-w-full lg:max-w-full  relative px-4 sm:px-0">
            <div className="w-[100%] h-[calc(100%-30px)] absolute top-[40px] sm:top-[20px] left-[0px]  bg-[#221B47] rounded-md -z-[99]"></div>
            <img src="/images/slider-image-3.png" alt="nft"  className=' mx-auto text-center rounded-2xl w-[full] sm:w-[180px]'/>
            <div className='text-white font-[600] px-7 text-[18px] mt-[30px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2  px-7"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


        <SwiperSlide className="max-w-[full] sm:max-w-full md:max-w-full lg:max-w-full  relative px-4 sm:px-0">
            <div className="w-[100%] h-[calc(100%-30px)] absolute top-[40px] sm:top-[20px] left-[0px]  bg-[#221B47] rounded-md -z-[99]"></div>
            <img src="/images/slider-image-4.png" alt="nft"  className=' mx-auto text-center rounded-2xl w-[full] sm:w-[180px]'/>
            <div className='text-white font-[600] px-7 text-[18px] mt-[30px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2  px-7"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


        <SwiperSlide className="max-w-[full] sm:max-w-full md:max-w-full lg:max-w-full  relative px-4 sm:px-0">
            <div className="w-[100%] h-[calc(100%-30px)] absolute top-[40px] sm:top-[20px] left-[0px]  bg-[#221B47] rounded-md -z-[99]"></div>
            <img src="/images/slider-image-1.png" alt="nft"  className=' mx-auto text-center rounded-2xl w-[full] sm:w-[180px]'/>
            <div className='text-white font-[600] px-7 text-[18px] mt-[30px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2  px-7"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>

        <SwiperSlide className="max-w-[full] sm:max-w-full md:max-w-full lg:max-w-full  relative px-4 sm:px-0">
            <div className="w-[100%] h-[calc(100%-30px)] absolute top-[40px] sm:top-[20px] left-[0px]  bg-[#221B47] rounded-md -z-[99]"></div>
            <img src="/images/slider-image-2.png" alt="nft"  className=' mx-auto text-center rounded-2xl w-[full] sm:w-[180px]'/>
            <div className='text-white font-[600] px-7 text-[18px] mt-[30px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2  px-7"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


        <SwiperSlide className="max-w-[full] sm:max-w-full md:max-w-full lg:max-w-full  relative px-4 sm:px-0">
            <div className="w-[100%] h-[calc(100%-30px)] absolute top-[40px] sm:top-[20px] left-[0px]  bg-[#221B47] rounded-md -z-[99]"></div>
            <img src="/images/slider-image-3.png" alt="nft"  className=' mx-auto text-center rounded-2xl w-[full] sm:w-[180px]'/>
            <div className='text-white font-[600] px-7 text-[18px] mt-[30px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2  px-7"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


        <SwiperSlide className="max-w-[full] sm:max-w-full md:max-w-full lg:max-w-full  relative px-4 sm:px-0">
            <div className="w-[100%] h-[calc(100%-30px)] absolute top-[40px] sm:top-[20px] left-[0px]  bg-[#221B47] rounded-md -z-[99]"></div>
            <img src="/images/slider-image-4.png" alt="nft"  className=' mx-auto text-center rounded-2xl w-[full] sm:w-[180px]'/>
            <div className='text-white font-[600] px-7 text-[18px] mt-[30px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2  px-7"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


        <SwiperSlide className="max-w-[full] sm:max-w-full md:max-w-full lg:max-w-full  relative px-4 sm:px-0">
            <div className="w-[100%] h-[calc(100%-30px)] absolute top-[40px] sm:top-[20px] left-[0px]  bg-[#221B47] rounded-md -z-[99]"></div>
            <img src="/images/slider-image-1.png" alt="nft"  className=' mx-auto text-center rounded-2xl w-[full] sm:w-[180px]'/>
            <div className='text-white font-[600] px-7 text-[18px] mt-[30px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2  px-7"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


        <SwiperSlide className="max-w-[full] sm:max-w-full md:max-w-full lg:max-w-full  relative px-4 sm:px-0">
            <div className="w-[100%] h-[calc(100%-30px)] absolute top-[40px] sm:top-[20px] left-[0px]  bg-[#221B47] rounded-md -z-[99]"></div>
            <img src="/images/slider-image-4.png" alt="nft"  className=' mx-auto text-center rounded-2xl w-[full] sm:w-[180px]'/>
            <div className='text-white font-[600] px-7 text-[18px] mt-[30px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2  px-7"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


       
        
      </Swiper>

      <div className="flex items-center justify-center gap-6 mt-10">
                <button
                  className="w-[50px] h-[50px] rounded-xl flex items-center justify-center bg-[#3E3576]"
                  
                  ref={navigationPrevRef}
                >
                  <img src="/images/left.svg"/>
                </button>
                <button
                  className="w-[50px] h-[50px] rounded-xl flex items-center justify-center bg-[#3E3576]"
                  
                  ref={navigationNextRef}
                >
                  <img src="/images/right.svg"/>

                </button>
              </div>
         </div>
    </>
  )
}

export default Slider1