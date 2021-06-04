import {List} from "./cookbook";

export enum CookBookActions{
    LOAD_DATA = "LOAD_DATA",
}

interface ListAsync{
    list:List[]
}

export interface Load_data extends ListAsync{
    type:typeof CookBookActions.LOAD_DATA
}

export type ListAsyncActions = Load_data;
