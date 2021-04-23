
enum ACTION_TYPE {
    ADD_BOOKMARK = 'ADD_BOOKMARK',
    REMOVE_BOOKMARK = 'REMOVE_BOOKMARK',
}

let initialState = {
    bookmarksList: [String],
}

const bookmarksReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_BOOKMARK: {
            if (state.bookmarksList.includes(action.payload)) {
                return state
            } else return { ...state, bookmarksList: [...state.bookmarksList, action.payload] }
        }
        case ACTION_TYPE.REMOVE_BOOKMARK: {
            return { ...state, bookmarksList: state.bookmarksList.filter((b) => b !== action.payload), }
        }
        default:
            return state;
    }
}

export const addBookmark = (bookmark: string) => ({ type: ACTION_TYPE.ADD_BOOKMARK, payload: bookmark });
export const removeBookmark = (bookmark: string) => ({ type: ACTION_TYPE.REMOVE_BOOKMARK, payload: bookmark });

export default bookmarksReducer;
