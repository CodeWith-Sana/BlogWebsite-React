// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <div>
    <div className='flex justify-center text-black font-bold text-5xl  ml-8 font-sans mb-4'>Read Our Blogs
   </div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className =' ml-4 mt-4' width ={100} height={300 }src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNOZKui7pu4LB7rbk3K4YA2av2AYBrAeuU5VRvzFkhw&s'/>
      <h2 className='m-4 text-black font-bold'>Nodejs</h2>
      <p className='m-2 text-justify text-xs'>Node.js is a runtime environment <br/>that allows you to run JavaScript code <br/> outside of a web browser.</p>
        </SwiperSlide>
      <SwiperSlide><img  className='mt-4'width ={100} height={300 }src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXL-1zziuaMBq6odxaQVrg7RfT9sr5UWQL1fKzXVCkMw&s'/>
       <h2 className='m-4 text-black font-bold' >Nextjs</h2>
       <p className='m-2 text-justify text-xs'>Next.js is a React framework that <br/> adds server-side rendering, routing,<br/> and other helpful features to React applications</p>
      </SwiperSlide>
      <SwiperSlide>  <img  className='mt-4' width ={100} height={300 } src ='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'/>
      <h2 className='m-4 text-black font-bold'>React</h2>
      <p className =' text-xs text-justify m-2'>React is a JavaScript library <br/>for building user interfaces,<br/> known for its component-based architecture.</p>
      </SwiperSlide>
      <SwiperSlide><img className='mt-4' width ={100} height={300 } src = 'https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png'/>
      <h2 className='m-4 text-black font-bold'>Redux</h2>
      <p className =' text-xs text-justify m-2'>Redux is a predictable state container <br/>for JavaScript applications making it <br/>easier to develop complex applications<br/> with predictable behavior.</p>
      </SwiperSlide>
      <SwiperSlide><img  className='mt-4' width ={100} height={300 } src ='https://cdn.thenewstack.io/media/2014/04/homepage-docker-logo.png'/>
      <h2 className='m-4 text-black font-bold'>Docker</h2>
      <p className =' text-xs text-justify m-2'>Docker is a platform that enables developers to <br/>package applications and their dependencies into <br/>lightweight containers, providing consistency <br/>across different environments</p>
      </SwiperSlide>
      <SwiperSlide><img  className='mt-4' width ={100} height={300 } src ='https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1'/>
      <h2 className='m-4 text-black font-bold'>Python</h2>
      <p className =' text-xs text-justify m-2'>Python is a high-level programming language known <br/>for its simplicity and readability, widely used<br/> for web development, data analysis,<br/> and artificial intelligence</p>
      </SwiperSlide>
      ...
    </Swiper>
    </div>
  );
};





