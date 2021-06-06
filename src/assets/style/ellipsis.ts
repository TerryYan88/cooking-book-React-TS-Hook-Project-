import styled from "styled-components";

//common ellipsis style
const ellipsis = (WrappedComp:any)=>{
    return styled(WrappedComp)`
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:${({line})=> line || 1};
        -webkit-box-orient:vertical;  
    `
}

export default ellipsis;