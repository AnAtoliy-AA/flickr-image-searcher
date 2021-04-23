import { imageAppApi } from "../services/image-api";

enum ACTION_CONST {
  SET_IMAGES_INFO = "SET_IMAGES_INFO",
}

let initialState = {};

const imagesListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_CONST.SET_IMAGES_INFO: {
      return { ...state, imagesInfoList: action.imagesInfoList };
    }
    default:
      return state;
  }
};

export const setImagesInfoData = (imagesInfoList: any) => ({
  type: ACTION_CONST.SET_IMAGES_INFO,
  imagesInfoList,
});

export const getImagesByNameInfo = (imageName: string) => async (
  dispatch: (arg0: { type: string; imagesInfoList: any }) => void
) => {
  const response = await imageAppApi.getImagesByName(imageName);

    dispatch(setImagesInfoData(response.photos));
};

export default imagesListReducer;
