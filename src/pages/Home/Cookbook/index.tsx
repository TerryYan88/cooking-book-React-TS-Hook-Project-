
import {Container} from "./StyledCookBook";
import Swiper from "./Swiper";
import {Search} from '@/components';
import HotCate from './HotCate';

const CookBook = () => {

    return (
        <Container>
            <header>美食大全</header>
            <Swiper/>
            <Search/>
            <HotCate/>
        </Container>
    )
}

export default CookBook;