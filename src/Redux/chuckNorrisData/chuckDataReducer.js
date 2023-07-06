import { chuckDataCatFailure, chuckDataCatLoading, chuckDataCatSuccess, chuckDataFailure, chuckDataLoading, chuckDataSuccess } from "./actionTypes"

const initialState = {
isLoading : false,
isError : false,
data : [],
catData : {}
}

export const chuckReducer = (state=initialState , {type,payload}) => {
 switch(type){
    case chuckDataLoading : {
        return {
            ...state,
            isLoading : true,
            isError : false,
        }
    }
    case chuckDataSuccess : {
        return {
            ...state,
            isLoading : false,
            isError : false,
            data : [...payload]
        }
    }
    case chuckDataFailure : {
        return {
            ...state,
            isLoading : false,
            isError : true,
        }
    }
    case chuckDataCatLoading : {
        return {
            ...state,
            isLoading : true,
            isError : false,
        }
    }
    case chuckDataCatSuccess : {
        return {
            ...state,
            isLoading : false,
            isError : false,
            catData : {...payload}
        }
    }
    case chuckDataCatFailure : {
        return {
            ...state,
            isLoading : false,
            isError : true
        }
    }
     default : return state
 }
}