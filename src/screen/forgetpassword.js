import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Forgetpassword() {
  const [emails, setEmails] = useState("");
  const [values, setValues] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(emails,values);

    var data = JSON.stringify({
      email: emails,
      role: values,
    });

    var config = {
      method: "post",
      url: "/forgot-password",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Link to="/forget-password"
        className="loginbtns"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Forget your Password?
      </Link>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Email
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div class="form-group">
                <input
                  value={emails}
                  required
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => setEmails(e.target.value)}
                />
              </div>
              <div class="form-group">
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
            <div className="modal-footer">
              <button type="button" className="loginbtn" data-dismiss="modal">
                Close
              </button>

              <button className="loginbtn" onClick={handelSubmit}>
                Send Eamil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgetpassword;
