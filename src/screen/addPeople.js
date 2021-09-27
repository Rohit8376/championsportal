import React from "react";
import Sidebar2 from "./sidebar2";
import Navbar from "./navbar";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function AddPeople() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [teamName, setTeamName] = useState("");


  const [designation, setDesignation] = useState("");
  const [location, setLocation] = useState("");
  const [emails, setEmails] = useState("");
  const [values, setValues] = useState("");

  const [isTeam, setIsteam] = useState(false);

  let history = useHistory();


  const HandleSubmit = (e) => {
    console.log(firstName, "priya");
    e.preventDefault();
    if (values == "lead") {
      var data = JSON.stringify({
        teamname: teamName,
        username: firstName,
        email: emails,
        JobLocation: location,
        designation: designation,
      });

      var config = {
        method: "post",
        url: "http://localhost:2000/addTeam",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }; 

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          console.log(JSON.stringify(response.error));
          if (response.data) {
            toast("Added Lead Successfully");
            history.push("/admin");
          }
        })
        .catch(function (error) {
          if (error) {
            if(error.response.status=422){
              toast(error.response.data.error)
  
            }
          }
        });
    } else {
   
      var data = JSON.stringify({
        firstname: firstName,
        lastname:lastName,
        email: emails,
        JobLocation: location,
        designation: designation,
      });
      const accessToken = localStorage.getItem("accessToken");

      var config = {
        method: "post",
        url: "http://localhost:2000/addmember",
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json', 
          Authorization: `bearer ${accessToken}`,
        },
        data: data,
      };
 
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          if (response.data) {
            toast("Added member Successfully");
            history.push("./champions");
          }
        })
        .catch(function (error) {
          console.log(error);
          console.log(error.response.error)
          console.log(error.response.status);
          if(error.response.status=422){
            toast(error.response.data.error)

          }
          console.log( error.response.data.error)
        });
    }
  };


  const setSelectState = (e)=>{
     if(e.target.value=='lead'){
       setIsteam(true)
     }else{
      setIsteam(false)
     }
     setValues(e.target.value)
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 padding_sidebar">
            <Sidebar2 />
          </div>
          <div className="col-lg-8  col-md-8 col-sm-8 py-3 ">
            <div
              className="container py-5 my-5"
              style={{ background: "white" }}
            >
              <div>
                <h5 className="text-center">Add Champions</h5>
              </div>

              <form onSubmit={HandleSubmit}>
                <div className="form-row">



                <div className="form-group col-md-6">
                    <label for="lastname">Role</label> 

                    <select
                      className="form-control"
                      onChange={setSelectState}
                    >
                      <option value="lead" >
                        Lead
                      </option>
                      <option value="member" selected >champions</option>
                    </select>
                  </div>

                  
                  <div className="form-group col-md-6">
                    <label for="firstname">first Name</label>
                    <input
                      value={firstName}
                      required
                      type="text"setSelectState
                      className="form-control"
                      id="firstname"
                      placeholder="first name"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>

                  
                  <div className="form-group col-md-6" style={ isTeam? {display:'none'} : {} }  >
                    <label for="lastname"> last Name</label>
                    <input
                      value={lastName}
                      required
                      type="text"setSelectState
                      className="form-control"
                      id="lastname"
                      placeholder="last name"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>


                  <div className="form-group col-md-6"   style={ isTeam == false? {display:'none'} : {} } > 
                    <label for="teamname"> Team Name</label>
                    <input
                      value={teamName}
                      required
                      type="text"setSelectState
                      className="form-control"
                      id="lastname"
                      placeholder="team name"
                      onChange={(e) => {
                        setTeamName(e.target.value);
                      }}
                    />
                  </div>  
            
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input
                      value={emails}
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmails(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label for="designation">Designation</label>
                    <input
                      value={designation}
                      type="text"
                      className="form-control"
                      id="designation"
                      placeholder="Designation"
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
               
                 
                  <div className="form-group col-md-6">
                    <label for="location">Location</label>
                    <input
                      value={location}
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="Location"
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  </div>
                

                <button type="submit" onClick={HandleSubmit} className="loginbtn btn-sm">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPeople;
