import styled from "styled-components";

const CategoryWrap = styled.div`
    nav{
        height:3.76rem;
        font-size:1.32rem;
        color:#fff;
        background-color:#ff6a00;
        display:flex;
        align-items:center;
        justify-content:center;
        ul{
            display:flex;
            width:9.4rem;
            height:3rem;
            border:solid 1px #fff;
            border-radius:1.5rem;
            position:relative;
            li{
                flex:1;
                text-align:center;
                line-height:3rem;
                color:#fff;
                transition:all .3s ease-in-out;
                &.active{
                    color:#ff6a00;
                    z-index:4;
                }
                &.slide{
                    position:absolute;
                    width:4.7rem;
                    height:3rem;
                    background-color:#fff;
                    z-index:2;
                    border-radius:1.5rem;
                    left:0;
                    top:0;
                }
                &.slide.right{
                    left:4.7rem
                }
            }
        }
    }
`

export {
    CategoryWrap,
}