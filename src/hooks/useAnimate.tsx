/* eslint-disable react-hooks/rules-of-hooks */
import { PropsWithChildren } from "react";
import { CSSTransition } from "react-transition-group";
import { useRouteMatch, useLocation } from "react-router-dom";
interface UseAnimate {
    //meta:number;
}

interface UseLocation {
    from: string;
}
enum Animate {
    ANIMATE__SLIDEINRIGHT = "animate__slideInRight",
    ANIMATE__SLIDEINLEFT = "animate__slideInLeft",
    ANIMATE__SLIDEOUTLEFT = "animate__slideOutLeft",
    ANIMATE__SLIDEOUTRIGHT = "animate__slideOutRight"
}


const useAnimate = (WrappedComp: Function) => {
    return (props: PropsWithChildren<UseAnimate>) => {
        // const history = useHistory();
        const { pathname, state } = useLocation<UseLocation>();
        const match = useRouteMatch();
        //const {meta} = props;
        //console.log(!!match);//如果变量是null !!match 如果有值返回true和没值返回false
        //console.log(state?state.from:pathname)
        const from = state && state.from;//link event to "from" attribute
        let enterActive = "";
        let exitActive = "";
       // console.log(from,pathname);
        switch (true) {
            case from === "/home":
            case from === "/list" && pathname === "/detail":
            case from === undefined && pathname === "/detail":
            case from === undefined && pathname === "/list":
                enterActive = Animate.ANIMATE__SLIDEINRIGHT
                exitActive = Animate.ANIMATE__SLIDEOUTLEFT
                break;
            case from === "/list" && pathname === "/home":
            case from === "/detail" && pathname === "/home":
            case from === "/detail" && pathname === "/list":
                enterActive = Animate.ANIMATE__SLIDEINLEFT
                exitActive = Animate.ANIMATE__SLIDEOUTRIGHT
                break;
            default:
                break;
        }
        return (
            <CSSTransition
                in={!!match}
                timeout={1000}
                classNames={{
                    enter: "animate__animated",
                    //only two routes for ainimation
                    // enterActive:`${pathname==="/list"? "animate__slideInRight" : "animate__slideOutLeft"}`,
                    enterActive: enterActive,
                    exit: "animate__animated",
                    // exitActive:`${pathname==="/list"? "animate__slideOutLeft" : "animate__slideInRight"}`
                    exitActive: exitActive
                }}
                mountOnEnter={true}
                unmountOnExit={true}
            >
                <WrappedComp {...props} />
            </CSSTransition>
        )
    }
}

export default useAnimate;