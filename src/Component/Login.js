import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try{
        await axios.post("http://localhost:8000/",{email,password}).then(res => {
          if(res.data === "exist"){
            history('/home', {state : {id : email}})
          }
          else if(res.data === "notexist"){
            alert("Email not found")
          } 
          else if(res.data === 'wrongpassword'){
            alert("Password is wrong");
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
      <div className="login d-flex flex-column justify-content-center align-items-center">
        <h1>Login</h1>
        <form action="POST" className=" d-flex flex-column w-25">
          <input type="email" className="mb-3" onChange={(e) => {setEmail(e.target.value);}} placeholder="Email" name="" id=""/>
          <input type="password" className="mb-3" onChange={(e) => {setPassword(e.target.value);}} placeholder="Password" name="" id=""/>
          <input type="submit" value="Login" onClick={submit} />
        </form>
        <br />
        <p>OR</p>
        <br />
        <Link to="/signup">create a new account?</Link>
      </div>
    </>
  );
};

export default Login;
