const initState = {
  todolist: null,
};

const fetchDataReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      console.log("halo", action.res.data);
      return {
        ...state,
        todolist: action.res.data,
      };
    default:
      return state;
  }
};
export default fetchDataReducer;
