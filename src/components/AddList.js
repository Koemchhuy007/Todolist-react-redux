import React, { useState } from "react";
import { createTask } from "../store/actions/crudAction";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

const AddList = (props) => {
  const [taskname, settaskName] = useState();
  const [description, setDescription] = useState();
  const [error, setError] = useState();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(taskname, discription);
    const task = { taskname, description };
    props.createTask(task);
    const { errorStatus } = props;
    setError(errorStatus);
    if (errorStatus === null) {
      history.push("/");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task Information</h2>
      <div className="container">
        <div class="col s12 m2">
          <div class="z-depth-3" style={{ marginTop: "10px" }}>
            <div class="row" style={{ margin: "10px" }}>
              <div class="input-field col s12">
                <input
                  onChange={(e) => settaskName(e.target.value)}
                  id="first_name"
                  type="text"
                  class="validate"
                />
                <label for="first_name">Task Name</label>
              </div>
              <div class="input-field col s12">
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  class="materialize-textarea"
                  id="description"
                />
                <label for="first_name">Description</label>
              </div>
              <button
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
                style={{ margin: "10px", float: "right" }}
              >
                Submit
              </button>
            </div>
            <div className="red-text-center">
              {error ? null : <p>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task) => dispatch(createTask(task)),
  };
};
const mapStateToProps = (state) => {
  return {
    errorStatus: state.crud.errorStatus,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddList);
//Notice: The first parameter of connect function is "mapStateToProps", and the second is "mapDispatchToProps"
