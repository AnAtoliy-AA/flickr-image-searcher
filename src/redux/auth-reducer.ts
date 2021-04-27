import { DEFAULT_VALUES } from "../shared/const";

const ACTION_CONST = {
  SET_USER_DATA: "SET_USER_DATA",
  SET_USER_FAILURE: "SET_USER_FAILURE",
  SET_DEFAULT_VALUES: "SET_DEFAULT_VALUES",
  SET_IS_LOADING_PROGRESS: "AUTH_REDUCER_TOGGLE_IS_LOADING_PROGRESS",
};

let initialState = {
  userData: {
    Aa: DEFAULT_VALUES.EMPTY,
    accessToken: DEFAULT_VALUES.EMPTY,
    ft: {
      FS: DEFAULT_VALUES.EMPTY,
      Te: DEFAULT_VALUES.EMPTY,
      qU: DEFAULT_VALUES.EMPTY,
      lS: DEFAULT_VALUES.EMPTY,
      yJ: DEFAULT_VALUES.EMPTY,
    },
    googleId: DEFAULT_VALUES.EMPTY,
    profileObj: {
      googleId: DEFAULT_VALUES.EMPTY,
      imageUrl: DEFAULT_VALUES.EMPTY,
      email: DEFAULT_VALUES.EMPTY,
      name: DEFAULT_VALUES.EMPTY,
      givenName: DEFAULT_VALUES.EMPTY,
    },
    qc: {
      token_type: DEFAULT_VALUES.EMPTY,
      access_token: DEFAULT_VALUES.EMPTY,
    },
    tokenId: DEFAULT_VALUES.EMPTY,
    tokenObj: {
      token_type: DEFAULT_VALUES.EMPTY,
      access_token: DEFAULT_VALUES.EMPTY,
      scope: DEFAULT_VALUES.EMPTY,
      login_hint: DEFAULT_VALUES.EMPTY,
    },
  },
  isAuthorized: DEFAULT_VALUES.FALSE,
  isLoading: DEFAULT_VALUES.FALSE,
  userFailureMessage: DEFAULT_VALUES.EMPTY,
};

const authReducer = (
  state = initialState,
  action: {
    type: string;
    isAuthorized: boolean;
    userData: string;
    isLoading: boolean;
    userFailureMessage: string;
  }
) => {
  switch (action.type) {
    case ACTION_CONST.SET_USER_DATA: {
      return {
        ...state,
        userData: action.userData,
        isAuthorized: DEFAULT_VALUES.TRUE,
      };
    }
    case ACTION_CONST.SET_DEFAULT_VALUES: {
      return {
        ...state,
        isAuthorized: DEFAULT_VALUES.FALSE,
        token: DEFAULT_VALUES.EMPTY,
      };
    }
    case ACTION_CONST.SET_USER_FAILURE: {
      return {
        ...state,
        userFailureMessage: action.userFailureMessage,
      };
    }
    case ACTION_CONST.SET_IS_LOADING_PROGRESS: {
      return { ...state, isLoading: action.isLoading };
    }
    default:
      return state;
  }
};

export const setUserData = (userData: any) => ({
  type: ACTION_CONST.SET_USER_DATA,
  userData,
});

export const setAuthFailure = (userFailureMessage: string) => ({
  type: ACTION_CONST.SET_USER_FAILURE,
  userFailureMessage,
});

export const setIsLoadingInProgress = (isLoading: boolean) => ({
  type: ACTION_CONST.SET_IS_LOADING_PROGRESS,
  isLoading,
});

export const logout = () => ({ type: ACTION_CONST.SET_DEFAULT_VALUES });

export default authReducer;
