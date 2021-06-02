
import {Container} from "./StyledCookBook";
import Swiper from "./Swiper";
import {Search} from '@/components';

const CookBook = () => {

    return (
        <Container>
            <header>美食大全</header>
            <Swiper/>
            <Search/>
        </Container>
    )
}

export default CookBook;