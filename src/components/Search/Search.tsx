import { PropsWithChildren } from 'react';

import {
    Container,
    InnerContainer
} from './StyledSearch';

export interface SearchProps{
    outerbg: string;
    innerbg: string;
    hasborder: boolean;
    radius?:number;
    color?:string;
}


const Search = (props:PropsWithChildren<SearchProps>) => {
    return (
        <Container {...props}>
            <InnerContainer {...props}>
                <i className="iconfont icon-search1"></i>
                <span>想吃什么搜这里,如川菜</span>
            </InnerContainer>
        </Container>
    )
}

export default Search;