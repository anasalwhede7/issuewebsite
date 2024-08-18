import React, { useState } from "react";

const LoginPage = () => {

    const[username,usernameupdate]=useState('');
    const[password,passwordupdate]=useState('');
    const ProceedLogin=(e) =>
        {
           e.preventDefault();
           if(validate){}

        }
        const validate=()=>
            {
             const result=true;
             if(username===''&& password===null)
                {
                    result=false;
                    Toast.warning("please enter usename");
                    
                }
             return result;

             }
    return (
        <div className="row">
            <div className="offset-lg col-lg-6">
       
<form onSubmit={ProceedLogin}  className="container"></form>
  <div className="card">
<div className="card-header">
    <h2>User Login</h2>
    </div>
    <div className="card-body"></div>
    <div className="form-group">
    <label>User Name <span className="eersmg"></span></label>
    <input value={username} onChange={(e)=>usernameupdate(e.target.value)}  className="form-control"></input>
    </div>
  </div>
  <div className="form-group">
    <label>password<span className="eersmg"></span></label>
    <input value={password} onChange={(e)=>passwordupdate(e.target.value)} className="form-control"></input>
    </div>
            </div>
            <div className="card-footer"></div>
            <button type="submit" className="btn btn-primary">Login</button>
            <link className="btn btn-success" to={'/register'}>New user</link>
            </div>


    )


}

export default LoginPage;