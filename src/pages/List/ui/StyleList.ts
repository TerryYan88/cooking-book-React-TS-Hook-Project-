import styled from "styled-components";
import border from "@/assets/style/border";
import ellipsis from "@/assets/style/ellipsis";

const ListContainer = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    ul{
        flex:1;
        overflow-y:scroll;
    }
`


const ListWrap = border(styled.li`
        display:flex;
        padding:.6rem;
        background-color: #fff;
        img{
            margin-right:.6rem;
        }
        > div:last-child {
            h1{
                font-size:1.2rem;
                line-height:1.4rem;
            }
            h2{
                font-weight:normal;
                font-size:.9rem;
            }
            h3{
                font-size:.9rem;
                font-weight:normal;
                transform:scale(1);
                transform-origin:0 0;
                line-height:3rem;
            }
        }
`)


const TitleBar = styled.div`
.am-navbar-dark{
    background-color:#ee742f;
}
`
const SubTi = ellipsis(styled.h2``);


export {
    ListWrap,
    TitleBar,
    SubTi,
    ListContainer
}