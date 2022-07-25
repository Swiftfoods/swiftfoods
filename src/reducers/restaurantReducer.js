import {
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
  RESTAURANT_LIST_FAILURE,
} from "../constants/restaurantConstant";

export const restaurantListReducer = (state = { restaurants: [] }, action) => {
  switch (action.type) {
    case RESTAURANT_LIST_REQUEST:
      return {
        // ...state,
        loading: true,
      };
    case RESTAURANT_LIST_SUCCESS:
      return {
        // ...state,
        loading: false,
        restaurants: action.payload,
      };
    case RESTAURANT_LIST_FAILURE:
      return {
        // ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
