import axios from "axios";
import {
  MEAL_LIST_SUCCESS,
  MEAL_LIST_FAILURE,
  MEAL_LIST_REQUEST,
} from "../constants/mealConstant";

export const listMeals = () => async (dispatch) => {
  try {
    dispatch({
      type: MEAL_LIST_REQUEST,
    });

    const { data } = await axios.get(
      "https://swiftfoodng-api.herokuapp.com/API/v1/meals"
    );

    dispatch({
      type: MEAL_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: MEAL_LIST_FAILURE,
      payload: error.message,
    });
  }
};
