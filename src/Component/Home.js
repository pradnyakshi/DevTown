import React,{useState} from "react";
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import getResult from "./getResult";

const Home = () => {
    const location = useLocation();
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('')
    const user = location.state.id;
    const code2="abs";

    async function submit(e)
    {
        e.preventDefault();
        setLanguage(document.getElementById('lang').value);
        try{
            await axios.post("http://localhost:8000/submitcode",{user, code, language}).then(res => {
                if(res.data === "submited") {
                    //document.getElementById('result').innerHTML = "Code submited";
                }
            })
        }catch(e){
            console.log(e);
        }
    }

    return (
        <>
            <div className="container vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
                <h3>Hello {user}</h3>
                <form action="POST" className="d-flex flex-column">
                    <select name="" id="lang" className="select mb-3 w-25">
                        <option value="none">Select the language</option>
                        <option value="python">python</option>
                        <option value="java">java</option>
                        <option value="javascript">javascript</option>
                        <option value="c++">c++</option>
                        <option value="c">c</option>
                    </select>
                    <textarea className="bg-dark text-white" name="" id="" cols="130" rows="25" onChange={(e) => {setCode(e.target.value);}}></textarea>
                    <button type="submit" className="btn btn-primary mt-2" onClick={submit}>Submit</button>
                </form>
                <getResult param1={code2}/>
            </div>
        </>
    )
}

export default Home;