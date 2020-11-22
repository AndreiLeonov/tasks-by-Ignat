const initState = {
    loading: false
};

export type initStateType = typeof initState;

export const loadingReducer = (state: initStateType = initState, action: ActionsType): initStateType => { // fix any
    switch (action.type) {
        case "SET-LOADING": {
            return {...state, loading: action.loading};
        }
        default:
            return state;
    }
};
// type ActionsType = ReturnType<typeof loadingAC>

type ActionsType = {
    type: "SET-LOADING"
    loading: boolean
}

export const loadingAC = (loading: boolean): ActionsType => ({type: "SET-LOADING", loading} as const); // fix any

