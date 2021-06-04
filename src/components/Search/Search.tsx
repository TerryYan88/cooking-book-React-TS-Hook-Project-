import { PropsWithChildren } from 'react';

import {Container} from './StyledSearch';

export interface SearchProps{
    outerbg: string;
    innerbg: string;
    hasborder: boolean;
}


const Search = (props:PropsWithChildren<SearchProps>) => {
    return (
        <Container {...props}>
            <div>
                <i className="iconfont icon-search1"></i>
                <span>想吃什么搜这里,如川菜</span>
            </div>
        </Container>
    )
}

export default Search;