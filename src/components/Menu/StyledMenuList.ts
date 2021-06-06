import styled from "styled-components";
import border from "@/assets/style/border";
const MenuWrap = styled.div`
flex:1;
display:flex;
overflow:hidden;
border-top:solid 1px #ccc;
aside{
    overflow-y:scroll;
    width:6rem;
    ul{
        li{
            height:2.5rem;
            text-align:center;
            line-height:2.5rem;
            &.active{
                background-color:#fff;
                color:#ee742f;
                span{
                    display:inline-block;
                    width:auto;
                    height:100%;
                    border-bottom:solid 1px #ee742f;
                }
            }
        }
    }
}
section{
    overflow-y:scroll;
    flex:1;
    padding:1.25rem;
    background-color:#fff;
    ul{
        display:flex;
        flex-wrap:wrap;
        li{
            width:33.333333%;
            height:3.75rem;
            text-align:center;
            font-size:.9rem;
        }
    }
}
`

export default border(MenuWrap)
