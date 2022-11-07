// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiperHome.css";

import ImageMassage1 from "../../assets/images/masaje1.jpg";
import ImageMassage2 from "../../assets/images/masaje2.jpg";

// import required modules
// import { Autoplay, EffectFade, Navigation } from "swiper";
import { Autoplay, EffectFade } from "swiper";

export const SwiperHome = () => {
	return (
		<Swiper
			spaceBetween={30}
			effect={"fade"}
			// navigation={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[
				Autoplay,
				EffectFade,
				// , Navigation
			]}
			className='mySwiper'>
			<SwiperSlide>
				<div>FABIO GIROLAMI MASOTERAPEUTA</div>
				<img src={ImageMassage1} alt='img' />
			</SwiperSlide>
			<SwiperSlide>
				<div>FABIO GIROLAMI MASOTERAPEUTA</div>
				<img src={ImageMassage2} alt='img' />
			</SwiperSlide>
			<SwiperSlide>
				<div>FABIO GIROLAMI MASOTERAPEUTA</div>
				<img src={ImageMassage1} alt='img' />
			</SwiperSlide>
			<SwiperSlide>
				<div>FABIO GIROLAMI MASOTERAPEUTA</div>
				<img src={ImageMassage2} alt='img' />
			</SwiperSlide>
		</Swiper>
	);
};
