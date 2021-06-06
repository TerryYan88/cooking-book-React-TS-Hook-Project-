import styled from "styled-components";
import border from "@/assets/style/border";
import ellipsis from "@/assets/style/ellipsis";
//hearder container
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
//carousel
const SwiperWrap = styled.div`
    height:0;
    font-size:0;
    padding-bottom:66.666667%;
    position:relative;
    .slider.am-carousel{
        position:static !important;
    }
`
//category h1
const H1Container = border(styled.h1`
    height:2.5rem;
    padding-left:1.1rem;
    color:#666;
    line-height:2.5rem;
    font-weight:normal;
    background-color:#fff;
`);

//category 
const HotCateWrap = styled.div`  
    >div{
        background-color:#fff;
         padding-top:1.0rem;
            .grid-item{
                padding-bottom:.4rem;
                img{
                    width:3.2rem;
                    height:3.2rem;
                    margin-bottom:.24rem;
                    border-radius:.26rem;
                    &[src="blank"]{
                        display:none;
                        text-align:center;
                    }
                }
            }
            .am-grid-item-content{
                padding:0 !important;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
            }
    }

`
//top ten food
const TopTenWrap = styled.div`
    h1{
        height:2.5rem;
        padding-left:1.1rem;
        color:#666;
        line-height:2.5rem;
        font-weight:normal;
    }
    ul{
        display:flex;
        width:100%;
        flex-wrap:wrap;
        padding-left:.4rem;
        li{
            width:50%;
            padding-right:.4rem;
            img{
                width:100%;
            }
            > div:last-child{
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                height:3.6rem;
                background-color:#fff;
                margin-buttom:.3rem;
                > p:first-child{
                    font-size:1.2rem
                }
            }
        } 
    }
`

const SubTitle = ellipsis(
    styled.p`
    font-size:.9rem;
    color:#666;
    margin-top:.2rem;
`);


export {
    Container,
    SwiperWrap,
    HotCateWrap,
    TopTenWrap,
    H1Container,
    SubTitle
}