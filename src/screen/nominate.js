import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Nominate(props) {
  let history = useHistory()
  console.log(props.ids,"nominations");
  console.log(props,"nominations");
  const [reason, setReason] = useState([]);
  const nominate=(ids)=>{
    console.log(ids)

  }
  const handleSubmit = (e,ids) => {

  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        // data-target="#exampleModalCenter"
        // onClick={() => {nominate(props.ids) }}
     
      >
        Nominate
      </button>

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
                onClick={(e)=>{handleSubmit(e,props.ids)}}
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

export default Nominate;
