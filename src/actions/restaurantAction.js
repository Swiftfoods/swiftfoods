import axios from "axios";
import {
  RESTAURANT_LIST_SUCCESS,
  RESTAURANT_LIST_FAILURE,
  RESTAURANT_LIST_REQUEST,
} from "../constants/restaurantConstant";

export const listRestaurants = () => async (dispatch) => {
  try {
    dispatch({
      type: RESTAURANT_LIST_REQUEST,
    });

    const { data } = await axios.get(
      "https://swiftfoodng-api.herokuapp.com/API/v1/vendors"
    );

    dispatch({
      type: RESTAURANT_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: RESTAURANT_LIST_FAILURE,
      payload: error.message,
    });
  }
};
