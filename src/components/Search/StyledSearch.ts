import styled from "styled-components";

const Container = styled.div`
    padding:.5rem .30rem;
    > div{
        display:flex;
        justify-content:center;
        align-items:center;
        height:2.0rem;
        border:solid 1px #ee742f;
        border-radius:.2rem;
        background-color: #fff;
        i{
            width:.9rem;
            height:.9rem;
            margin-right:1rem;
            color:#ee742f;
        }
        span{
            color:#666;
        }
    }
`

export {
    Container
}