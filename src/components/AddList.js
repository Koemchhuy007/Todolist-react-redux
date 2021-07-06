import React, { useState } from "react";
export default function AddList() {
  const [taskname, settaskName] = useState();
  const [discription, setDescription] = useState();
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(taskname, discription)
  }
  return (
    <form onSubmit={handleSubmit}>
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
                  id="Description"
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
          </div>
        </div>
      </div>
    </form>
  );
}
