import React from "react";

function Task(props){
    return(
        <>
            <li id={props.id} className='shadow my-2 p-2 col-sm-9'> {props.value}</li>
            {/* we will get data by id from App.js and will be able to delete */}
            <button className="btn btn-outline-danger btn-sm my-2 col-sm-2 offset-1" onClick={ () => {props.getData(props.id)} }><i class="fa-solid fa-trash"></i></button>
        </>
    )
}

export default Task;
