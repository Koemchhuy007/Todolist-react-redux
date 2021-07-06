import React from "react";
import { useSelector } from "react-redux";
export default function Home() {
  const data = useSelector((state) => state.fetchdata);
  return (
    <>
      <div class="row">
        {data.todolist.map((data) => (
          <div class="col s12 m3" key={data.id}>
            <div class="card  grey darken-3">
              <div class="card-content white-text">
                <span class="card-title">{data.taskname}</span>
                <p>{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
