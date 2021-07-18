import axios from "axios";

export const createTask = (task) => {
  return (dispatch, getState) => {
    //make async call to database
    // dispatch({type:'CREATE_TASK',task});
    return axios
      .post("http://localhost:8000/todolist", {
        taskname: task.taskname,
        description: task.description,
      })
      .then(() => {
        dispatch({ type: "CREATE_TASK", task });
      });
  };
};

export const updateTask = (task) => {
  return (dispatch, getstate) => {
    return axios
      .put("http://localhost:8000/todolist/" + task.id, {
        taskname: task.taskname,
        description: task.description,
      })
      .then(() => {
        dispatch({ type: "UPDATE_TASK", task });
      });
  };
};
export const deleteTask = (task) => {
  return (dispatch, getState) => {
    return axios
      .delete("http://localhost:8000/todolist/" + task.id)
      .then(() => {
        dispatch({ type: "DELETE_TASK" });
      });
  };
};
