import { NavBar } from "antd-mobile";
import { 
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";

import formatRelative from "data-fns";

import {TitleBar} from "./StyledMap";


const Map = ()=>{
    

    return (
        <div>
             <TitleBar>
                    <NavBar
                        mode="dark"
                    >美食地图</NavBar>
            </TitleBar>
        </div>
    )
}

export default Map;