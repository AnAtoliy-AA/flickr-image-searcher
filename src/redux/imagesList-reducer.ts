import { DEFAULT_VALUES } from "./../shared/const";
import { imageAppApi } from "../services/image-api";

enum ACTION_CONST {
  SET_IMAGES_INFO = "SET_IMAGES_INFO",
  SET_IS_LOADING = "SET_IS_LOADING",
}

let initialState = {
  imagesInfoList: {
    page: 0,
    pages: 0,
    perpage: 0,
    total: "0",
    photo: [],
  },
  isLoading: DEFAULT_VALUES.FALSE,
};

const imagesListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_CONST.SET_IMAGES_INFO: {
      return { ...state, imagesInfoList: action.payload };
    }
    case ACTION_CONST.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default:
      return state;
  }
};

export const setImagesInfoData = (imagesInfoList: any) => ({
  type: ACTION_CONST.SET_IMAGES_INFO,
  payload: imagesInfoList,
});

export const setIsLoading = (isLoading: boolean) => ({
  type: ACTION_CONST.SET_IS_LOADING,
  payload: isLoading,
});

export const getImagesByNameInfo = (
  imageName: string,
  pageNumber: number
) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
  if (imageName) {
    dispatch(setIsLoading(DEFAULT_VALUES.TRUE));

    const response = await imageAppApi.getImagesByName(imageName, pageNumber);

    dispatch(setImagesInfoData(response.photos));
    dispatch(setIsLoading(DEFAULT_VALUES.FALSE));
  } else dispatch(setImagesInfoData(initialState.imagesInfoList));
};

export default imagesListReducer;
