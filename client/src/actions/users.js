import * as api from '../api';
import { LOGIN } from '../actionTypes'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    
    dispatch({ type: LOGIN, data });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
  
      dispatch({ type: LOGIN, data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
