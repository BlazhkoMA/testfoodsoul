export interface ItemTypes {
    name: string,
    type: string
}
export enum searchStateEnum {
    START,
    FINISH,
    LOADING
}

export interface StateInterface {
    items: ItemTypes[],
    searchState: searchStateEnum,
    defaultValue: string
}
