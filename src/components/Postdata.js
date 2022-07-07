import React, { useState } from "react";
import "../Assets/Home.css";
import Axios from "axios";

function Postdata() {
  const url = "http://localhost:7000/web/linkedin";
  const [data, setData] = useState({
    message: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      message: data.message,
      userId:9},{
        headers:{
          "x-access-key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo5LCJhdXRoX3R5cGUiOjQsImlhdCI6MTY1NzA5ODE2NiwiZXhwIjoxNjU3NzAyOTY2fQ.2OAhmf91Kdx-2-I58XdVg_NSTZcXdRvyaF6YvRUrIOo" 
        }
      }
    ).then((res) => {
      console.log(res.data);
      alert("Post successfully Created");
    })
    .catch(error =>{
      console.log(error);
    })
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <form onSubmit={(e) => submit(e)}>
      <label>
        <textarea
          className="textarea"
          placeholder="message"
          type="text"
          id="message"
           
          value={data.message}
          onChange={(e) => handle(e)}
        />
      </label>
      <button>submit</button>
    </form>
  );
}

export default Postdata;
