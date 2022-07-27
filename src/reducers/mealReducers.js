import {
  MEAL_LIST_REQUEST,
  MEAL_LIST_SUCCESS,
  MEAL_LIST_FAILURE,
} from "../constants/mealConstant";

export const mealListReducer = (state = { meals: [] }, action) => {
  switch (action.type) {
    case MEAL_LIST_REQUEST:
      return {
        loading: true,
      };
    case MEAL_LIST_SUCCESS:
      return {
        loading: false,
        meals: action.payload,
      };
    case MEAL_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
