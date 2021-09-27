import React from "react";
import Navbar from "./navbar";
import Sidebar2 from "./sidebar2";
import { useState } from "react";

function Session() {
  const [values, setValues] = useState("");
  const [fileupload, setFileUpload] = useState("");
  const upload = (e) => {
    console.log("40",e.target.files[0]);
    setFileUpload(e.target.files[0])
   
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(fileupload,values)
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 padding_sidebar">
            <Sidebar2 />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-9">
            <button
              className="loginbtn"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Add Sessions
            </button>

            <div
              className="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
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
                    <form>
                      <div className="form-group">
                        <label>Title</label>
                        <input
                          value={values}
                          required
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="Title"
                          onChange={(e)=>setValues(e.target.value)}
                        />
                        <label for="exampleFormControlFile1">Upload</label>
                        <input
                        required
                          type="file"
                          className="form-control-file"
                          id="exampleFormControlFile1"
                          onChange={(e) => upload(e)}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                     
                      className="loginbtn mr-5"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button className="loginbtn" onClick={handleSubmit}>
                      Send Emails
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

export default Session;
