import axios from "axios"
export const fetchAllData = () =>{
    return (dispatch, getState) =>{
        return axios.get("http://localhost:8000/todolist").then((res)=>{
            dispatch({type:"FETCH_DATA",res});
        })
    }
}
