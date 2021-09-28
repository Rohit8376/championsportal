import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Signup() {
  const [emails, setEmails] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [values, setValues] = useState("");
  console.log(emails, password,values);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emails, password, confirmPassword, values);
    if(password !==confirmPassword){
      toast("password not matched")
    }

    var data = JSON.stringify({
      "email": emails,
      "password": password,
      "confirmpassword": confirmPassword,
      "role": values,
    });

    var config = {
      method: "post",
      url: "https://aqueous-brushlands-41244.herokuapp.com/Signup",
      headers: {
        "Content-Type": "application/json",
     
      },
    //  credentials: "include",
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data) {
          toast("Register Successfully");
          history.push("./");
        }
      })
      .catch(function (error) {
        // console.log(error.response);
        // console.log(error.response.status);
        // console.log(  error.response.data.message)
  
        if (error.response.status=422) {
          toast(error.response.data.error)
    
        }
      
      });
  };
  let history = useHistory();
  const handleLogin = () => {
    history.push("/");
  };
  return (
    <>
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
                <h2 className="text-center">SIGN UP</h2>
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
                    
              <div>
              <label for="exampleInputPassword1"> Confirm Password</label>
                <input
                  value={confirmPassword}
                  required
                  type="password"
                  className="form-control"
                  id="exampleInputPassword"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                <button class="btn btn-md mx-5 my-2 btn-dark" onClick={handleSubmit}>
                  Signup
                </button>
                <button class="btn btn-md mx-5 my-2 btn-dark"onClick={handleLogin}>
                  Login
                </button>
             

                
                  </div>
                </div>
              </div>

            

          

           
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
