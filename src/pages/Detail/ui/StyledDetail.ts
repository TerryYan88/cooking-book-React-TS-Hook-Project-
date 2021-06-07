import styled from "styled-components";


const DetailWrap = styled.div`
    position:absolute;
    top:8%;
    left:0;
    z-index:-1;
    width:100%;
    height:8.4rem;
    img{
         width:100%;
    }
    .details{
        height:8.4rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        h1{
            font-size:1.3rem;
        }
        h3{
            font-width:normal;
            font-size:.9rem;
            margin:.7rem 0;
        }
        button{
            width:7.9rem;
            height:2.62rem;
            background-color:#ee742f;
            border-radius:.28rem;
            color:white;
            font-size:.7rem;
        }
    }
`



const TitleBar = styled.div`
.am-navbar-dark{
    background-color:#ee742f;
}
`

export {
    TitleBar,
    DetailWrap
}