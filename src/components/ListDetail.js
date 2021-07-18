import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { updateTask } from "../store/actions/crudAction";
import { deleteTask } from "../store/actions/crudAction";
import { useHistory } from "react-router";
const ListDetail = (props) => {
  const [taskname, settaskName] = useState();
  const [description, setDescription] = useState();
  const [btnType, setBtnType] = useState("");
  const id = props.match.params.id;
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { id, taskname, description };
    if (btnType === "DELETE") {
      props.deleteTask(task);
      history.push("/");
    } else if (btnType === "UPDATE") {
      props.updateTask(task);
      history.push("/");
    }
  };
  const { todolist } = props;
  useEffect(() => {
    if (!todolist) return <Redirect to="/" />;
    settaskName(todolist.taskname);
    setDescription(todolist.description);
  }, []);
  if (!todolist) return <Redirect to="/" />;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Task Information</h2>
      <div className="container">
        <div class="col s12 m2">
          <div class="z-depth-3" style={{ marginTop: "10px" }}>
            <div class="row" style={{ margin: "10px" }}>
              <div class="input-field col s12">
                <input
                  onChange={(e) => settaskName(e.target.value)}
                  id="taskname"
                  type="text"
                  class="validate"
                  defaultValue={todolist.taskname}
                 
                />
                <label class="active" for="taskname">Task Name</label>
              </div>
              <div class="input-field col s12">
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  class="materialize-textarea"
                  id="description"
                  defaultValue={todolist.description}
                  multiline
                  rows={5}
                  
                />
                <label class="active" for="description">Description</label>
              </div>
              <button
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
                style={{ margin: "10px", float: "right" }}
                onClick={() => setBtnType("DELETE")}
              >
                Delete
              </button>
              <button
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
                style={{ margin: "10px", float: "right" }}
                onClick={() => setBtnType("UPDATE")}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const todolists = state.fetchData.todolist;
  if (todolists) {
    let todolist = todolists.find((todolist) => todolist.id === id);
    return {
      todolist: todolist,
    };
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (task) => dispatch(deleteTask(task)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListDetail);
