import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

  const history = useNavigate();  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try{
        await axios.post("http://localhost:8000/signup",{email,password}).then(res => {
            if(res.data === "exist"){
                alert("Email already exist")
            }
            else if(res.data === "notexist"){
                history('/home', {state : {id : email}})
            }
          }).catch(e => {
            alert("Wrong details")
            console.log(e);
          })
    }catch(e){
        console.log(e);
    }
  }
  return (
    <>
      <div className="SignUp d-flex flex-column justify-content-center align-items-center">
        <h1>SignUp</h1>
        <form action="POST" className=" d-flex flex-column w-25">
          <input type="email" className="mb-3" onChange={(e) => {setEmail(e.target.value);}} placeholder="Email" name="" id=""/>
          <input type="password" className="mb-3" onChange={(e) => {setPassword(e.target.value);}} placeholder="Password" name="" id=""/>
          <input type="submit" value="SignUp" onClick={submit} />
        </form>
        <br />
        <p>OR</p>
        <br />
        <Link to="/">Login</Link>
      </div>
    </>
  );
};

export default SignUp;
