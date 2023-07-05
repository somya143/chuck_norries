import axios from "axios";
import { chuckDataCatFailure, chuckDataCatLoading, chuckDataCatSuccess, chuckDataFailure, chuckDataLoading, chuckDataSuccess } from "./actionTypes";

export const getDataByCategory = () => async(dispatch) => {
    dispatch({ type : chuckDataLoading });
    try {
        let response = await axios.get(`https://api.chucknorris.io/jokes/categories`)
        dispatch({ type : chuckDataSuccess , payload : response.data });
        console.log(response.data);
    } catch (error) {
        dispatch({ type : chuckDataFailure , payload : error.message })
    }
}

export const getDataByCategoryName = (category) => async(dispatch) => {
    dispatch({ type : chuckDataCatLoading });
    try {
        let response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
        dispatch({ type : chuckDataCatSuccess , payload : response.data })
    } catch (error) {
        dispatch({ type : chuckDataCatFailure , payload : error.message })
    }
} 