import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://swiftfoodng-api.herokuapp.com/API/v1/auth/customers/login",
      {
        email,
        password,
      },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    console.log(error);
  }
};

export const register =
  (first_name, last_name, email, phone, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://swiftfoodng-api.herokuapp.com/API/v1/auth/customers/register",
        {
          first_name,
          last_name,
          email,
          phone,
          password,
        },
        config
      );

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      dispatch({ type: USER_LOGIN_SUCCESS });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.error,
      });
      console.log(error);
    }
  };
