import {CheckedState} from "./more";

export enum MoreActions {
    CHECKED_STATE ="CHECKED_STATE",
}


export interface Checked_State extends CheckedState{
    type:typeof MoreActions.CHECKED_STATE
}

export type MoreActionsTypes = Checked_State