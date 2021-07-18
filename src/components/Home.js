import React, { useEffect } from "react";
import { connect } from "react-redux";
import {fetchAllData} from '../store/actions/fetchDataAction'
import {Link} from 'react-router-dom'
const Home = (props) => {
  const { data } = props;
  console.log("hello",data);
  useEffect(() => {
  props.fetchAllData();
  }, [])
  return (
    <>
      {data && (
        <div class="row">
          {data.map((data) => (
            <Link to={"/list-detail/"+data.id}>
            <div class="col s12 m3" key={data.id}>
              <div class="card  grey darken-3">
                <div class="card-content white-text">
                  <span class="card-title">{data.taskname}</span>
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return{
    fetchAllData: () => dispatch(fetchAllData())
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.fetchData.todolist
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);
