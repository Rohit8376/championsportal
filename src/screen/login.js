import React, { useEffect }  from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import Forgetpassword from "./forgetpassword";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function Login() {
  const [emails, setEmails] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState("");
  console.log(emails, password);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emails, password);
    var axios = require("axios");
    var data = JSON.stringify({
      role: values,
      email: emails,
      password: password,
    });
    var config = {
      method: "post",
      url: "https://aqueous-brushlands-41244.herokuapp.com/Signin",
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("accessToken", response.data.UserLogin.token);
        localStorage.setItem(
          "role",
          response.data.UserLogin.userlogin.role == "lead" ? "lead" : ""
        );
        // console.log(response.data.UserLogin.token);

 

        if (response.data) {
          toast("Login Successfully"); 
          if(response.data.UserLogin.userlogin.role=='lead'){
             history.push("./admin");
          }else{
          history.push("./team");
        }
        }
      })
      .catch(function (error) {
        console.log(error.status);
        if (error.response) {
          toast(error.response.data.message);
        }
      });
  };
  let history = useHistory();
  const handleLogin = () => {
    history.push("/signup");
  };



  useEffect(()=>{
  
    if(localStorage.getItem('accessToken')){
      if(localStorage.getItem('role')){

        console.log("admin jinda h")
        // <Redirect to="/admin"/> 
        history.push('/admin')
      }else{
        console.log("user jinda h")
        // <Redirect to="/team"/> 
        history.push('/team')
      }
    }
},[])


  return (
    <>
      {/* <form onClick={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={emails}
            onChange={(e) => setEmails(e.target.value)}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={password}
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form> */}
      <div className="container background_design">
        <div className="row my-5">
          <div className="col-lg-6" style={{ margin: "0 auto" }}>
            <div class="login">
              <h1 class="title">
                <span>N</span>
                <span>e</span>
                <span>o</span>
                <span>S</span>
                <span>O</span>
                <span>F</span>
                <span>T</span>
                <span className="ml-3">T</span>
                <span>e</span>
                <span>c</span>
                <span>h</span>
                <span>n</span>
                <span>o</span>
                <span>l</span>
                <span>o</span>
                <span>g</span>
                <span>y</span>
              </h1>
              <div class="card">
                <div class="card-body">
                  <h2 class="text-center">LOGIN</h2>
                  <div>
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      value={emails}
                      required
                      type="email"
                      className="form-control "
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={(e) => setEmails(e.target.value)}
                    />
                  </div>
                  <div>
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      value={password}
                      required
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div class="form-group">
                    <select
                      className="form-control my-4"
                      onChange={(e) => setValues(e.target.value)}
                    >
                      <option selected>Choose Role</option>
                      <option value="lead">Lead</option>
                      <option value="member">champions</option>
                    </select>
                  </div>

                  <div className="text-center">
                    <button class="btn btn-md mx-5 my-2" onClick={handleSubmit}>
                      Login
                    </button>
                    <button class="btn btn-md mx-5 my-2" onClick={handleLogin}>
                      Signup
                    </button>

                    <Forgetpassword />
                  </div>
                </div>
              </div>

              {/* <form onSubmit={handleSubmit}>
                <div>
                  <input
                    value={emails}
                    required
                    type="email"
                    className="input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) => setEmails(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    value={password}
                    required
                    type="password"
                    className="input"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="text-center">
                  <button class="loginbtns">Login</button>

                  <button class="loginbtns" onClick={handleSignUp}>
                    Signup
                  </button>
                  <Forgetpassword />
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
