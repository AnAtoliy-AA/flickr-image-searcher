
enum ACTION_TYPE {
    SET_SEARCH_TERM = 'SET_SEARCH_TERM',
}

let initialState = {
    searchTerm: '',
}

const searchFormReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_TYPE.SET_SEARCH_TERM: {
            return { ...state, searchTerm: action.payload.toLowerCase() }
        }
        default:
            return state;
    }
}

export const setSearchFormTerm = (searchTerm: string) => ({ type: ACTION_TYPE.SET_SEARCH_TERM, payload: searchTerm });

export default searchFormReducer;
