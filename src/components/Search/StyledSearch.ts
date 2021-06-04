import styled from "styled-components";
import {SearchProps} from "./Search";
const Container = styled.div`
    padding:.5rem .30rem;
    background-color: ${(props:SearchProps)=>props.outerbg};
    > div{
        display:flex;
        justify-content:center;
        align-items:center;
        height:2.0rem;
        border:${(props:SearchProps)=>props.hasborder===true?"solid 1px #ee742f":""};
        border-radius:.2rem;
        background-color: ${(props:SearchProps)=>props.innerbg};
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