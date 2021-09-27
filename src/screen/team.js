import React from "react";
import Nominate from "./nominate";
import Navbar from "./navbar";
import Sidebar2 from "./sidebar2";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Team() {
  let history = useHistory()
  const [user, setUser] = useState([]);

  const [reason, setReason] = useState("");
  const [ids, setIds] = useState("");

 
  const accessToken = localStorage.getItem("accessToken");


   const handleSubmit = (e) =>{ 
            e.preventDefault(); 
            const accessToken = localStorage.getItem("accessToken"); 
            var data = JSON.stringify({
              "votefor": `${ids}`,
              "validReason": reason,
            }); 
             
            var config = {
              method: "post",
              url: "/Nominate",
              headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${accessToken}`,    
              },
              data: data,
            };
 
            axios(config)
              .then(function (response) {
                console.log(response.data.mask,"mask");
                console.log(response.data,"mask2");
                if (response.data) {
                  toast("Nominated Successfully");
                  history.push("./team");
                }
                else if(response.data.mask=="already done"){
                  toast("already nominated Successfully");
                }
              })
              .catch(function (error) { 
                if(error.response.status=400){
                  toast(error.response.data.msg)
                }
              });
          


   }
 
  useEffect(()=>{
    var config = {
      method: "get",
      url: "/getMember",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${accessToken}`,
      },
      // credentials: "include",
    };

    axios(config)
      .then(
       function (response) {
          console.log(response.data, "priya111111");
          setUser(response.data.champions);
        }
      )
      .catch(function (error) {
        console.log(error);
      });

  },[])


  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 padding_sidebar">
            <Sidebar2 />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <h3 className="text-center my-4">Champions Portal</h3>
            <div class="table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm">
              <table class="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">SNO.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Department</th>
                    <th scope="col">Location</th>
                    <th scope="col">Nominations</th>
                  </tr>
                </thead> 
                <tbody>
                  {user.map((users, index) => {
                     console.log(users,"users")
                    return (
                      <>
                        <tr>
                          <td>
                            <FaUser />
                          </td>

                          <td>{users.name}</td>
                          <td>{users.email}</td>
                          <td>{users.designation}</td>
                          <td>{users.JobLocation}</td>  
                           

                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          onClick={(e) => {
                            setIds(users._id);
                          }} 
                        >
                          Nominate
                        </button>
                        </tr>
                      </>
                    );

                    
                  })}
                </tbody>
              </table>
          
                





          
            </div>
          </div>
        </div>
      </div>










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
                Reason to Nominate
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
              <input
                required
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Reason To Nominate"
                value={reason}
                name="reason"
                onChange={(e) => {
                  setReason(e.target.value);
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>





    </>
  );
}

export default Team;
