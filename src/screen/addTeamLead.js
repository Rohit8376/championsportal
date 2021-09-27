import React from "react";
import Sidebar2 from "./sidebar2";
import Navbar from "./navbar";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function AddTeamLead() {
  const [firstName, setFirstName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [designation, setDesignation] = useState("");
  const [location, setLocation] = useState("");
  const [emails, setEmails] = useState("");
  const [values, setValues] = useState("");
  let history = useHistory();
  const HandleSubmit = (e) => {
    console.log(firstName, "priya");
    e.preventDefault();
    if (values == "lead") {
      var data = JSON.stringify({
        teamname: values,
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
            // toast("Login Failed");
          }
        });
    } 
  };
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
                    <label for="firstname"> Name</label>
                    <input
                      value={firstName}
                      required
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="first name"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="lastname">Role</label>
                    <select
                      className="form-control"
                      onChange={(e) => setValues(e.target.value)}
                    >
                      <option value="lead" selected>
                        Lead
                      </option>
                      <option value="member">champions</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
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
                </div>
                <div className="form-row">
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

                <button type="submit" className="loginbtn btn-sm">
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

export default AddTeamLead;
