import {MoreActions} from "./models/actions-types";
import {AppActions} from "../models/action-types";

export const changeSwitch = (checked:boolean):AppActions=>({
    type:MoreActions.CHECKED_STATE,
    checked,
})