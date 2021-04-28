enum ACTION_TYPE {
  ADD_BOOKMARK = "ADD_BOOKMARK",
  REMOVE_BOOKMARK = "REMOVE_BOOKMARK",
}

let initialState = {
  bookmarksList: {},
};

const bookmarksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_BOOKMARK: {
     const assignedBookmarksList = Object.assign(state.bookmarksList);
     assignedBookmarksList[action.payload.bookmark] = action.payload;

        return {
          ...state,
          bookmarksList: assignedBookmarksList,
        };
    }
    case ACTION_TYPE.REMOVE_BOOKMARK: {
      const assignedBookmarksList = Object.assign(state.bookmarksList);
      delete assignedBookmarksList[action.payload];

      return {
        ...state,
        bookmarksList: assignedBookmarksList,
      };
    }
    default:
      return state;
  }
};

export const addBookmark = (bookmark: string, imageTitle: string, tagValue: string) => ({
  type: ACTION_TYPE.ADD_BOOKMARK,
  payload: { bookmark, imageTitle, tagValue },
});
export const removeBookmark = (bookmark: string) => ({
  type: ACTION_TYPE.REMOVE_BOOKMARK,
  payload: bookmark,
});

export default bookmarksReducer;
