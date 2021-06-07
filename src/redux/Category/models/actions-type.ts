
export enum ActionsCate{
    SELECTED_TAB = "SELECTED_TAB",
    CATE_TYPE = "CATE_TYPE",
    CATE_ASIDE = "CATE_ASIDE",
}


interface Selected_Tab{
    type:typeof ActionsCate.SELECTED_TAB;
    selectedTab:string;
}

interface Cate_Type{
    type:typeof ActionsCate.CATE_TYPE;
    cateType:string;
}

interface Cate_Aside{
    type:typeof ActionsCate.CATE_ASIDE;
    cateAside:string;
}

export type ActionsCateType = Selected_Tab |  Cate_Type | Cate_Aside;

