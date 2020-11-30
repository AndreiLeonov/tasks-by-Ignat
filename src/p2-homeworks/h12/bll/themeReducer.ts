const initState = {
    theme: ""
};

export const themeReducer = (state = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case "SET-THEME": {
            return {...state, theme: action.theme };
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string): ActionsType => ({type: "SET-THEME", theme} as const);; // fix any

type ActionsType = {
    type: "SET-THEME"
    theme: string
}

type InitStateType = {
    theme: string
}