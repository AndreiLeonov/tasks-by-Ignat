import {initialPeopleType} from "../HW8";

export const homeWorkReducer = (state: Array<initialPeopleType>, action: ActionsType): Array<initialPeopleType> => {
    switch (action.type) {
        case "sortUp": return [...state.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })];
        case "sortDown": {
            return [...state.sort(function(a, b){
                if(a.name > b.name) { return -1; }
                if(a.name < b.name) { return 1; }
                return 0;
            })];
        }
        case "checkAge": {
            return [...state.filter (person => person.age >= 18)]
        }
        default: return state
    }
};

export const SortUp = () => ({ type: "sortUp", payload: "up", } as const)
export const SortDown = () => ({ type: "sortDown", payload: "down", } as const)
export const ChekAge = () => ({ type: "checkAge", payload: 18, } as const)

export type ActionsType =
    | ReturnType<typeof SortUp>
    | ReturnType<typeof SortDown>
    | ReturnType<typeof ChekAge>
