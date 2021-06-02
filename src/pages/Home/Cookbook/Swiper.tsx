import { Carousel } from 'antd-mobile';
import img1 from "@/assets/img/ads3.jpg";
import img2 from "@/assets/img/ads4.jpg";
import img3 from "@/assets/img/ads5.jpg";
import {SwiperWrap} from "./StyledCookBook";
const Swiper = () => {
    return (
        <SwiperWrap>
            <Carousel
                autoplay={true}
                infinite
            >
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </Carousel>
        </SwiperWrap>
    );
}

export default Swiper;