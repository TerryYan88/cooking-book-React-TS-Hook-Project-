import styled from "styled-components";

const Container = styled.div`
    header{
        height:3.76rem;
        line-height:3.76rem;
        text-align:center;
        font-size:1.32rem;
        color:#fff;
        background-color:#ff6a00;
    },
`

const SwiperWrap = styled.div`
    height:0;
    font-size:0;
    padding-bottom:66.666667%;
    position:relative;
    .slider.am-carousel{
        position:static !important;
    }
`

export {
    Container,
    SwiperWrap
}