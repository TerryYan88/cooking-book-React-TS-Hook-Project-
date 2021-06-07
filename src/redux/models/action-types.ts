import {ListAsyncActions} from "../Cookbook/model/action-types";
import {MoreActionsTypes} from "../More/models/actions-types";
import {ActionsCateType} from "../Category/models/actions-type"
export type AppActions = ListAsyncActions | MoreActionsTypes | ActionsCateType;