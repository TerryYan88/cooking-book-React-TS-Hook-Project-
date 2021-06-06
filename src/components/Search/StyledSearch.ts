import styled from "styled-components";
import border from "@/assets/style/border";
import { SearchProps } from "./Search";

const Container = 
    styled.div`
    padding:.5rem .90rem;
    background-color: ${(props: SearchProps) => props.outerbg};
`


const InnerContainer = border(styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:2.0rem;
    background-color: ${(props: SearchProps) => props.innerbg};
    i{
        width:.9rem;
        height:.9rem;
        margin-right:1rem;
        color:#ee742f;
    }
    span{
        color:#666;
    }
`
);
export {
    Container,
    InnerContainer
}