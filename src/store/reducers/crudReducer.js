const initState ={
    errorStatus:'error'
}
const crudReducer = (state=initState, action) =>{
    switch(action.type){
        case "CREATE_TASK":
            console.log('create task',action.task)
            return{
                ...state,
                errorStatus:null
            }
        case "UPDATE_TASK":
            console.log('updated task',action.task)
            return {
                ...state, 
                errorStatus:null
            }
        case "DELETE_TASK":
            console.log('deleted task')
            return{
                ...state,
                errorStatus:null
            }
        default:
            return state 
    }
    
}
export default crudReducer