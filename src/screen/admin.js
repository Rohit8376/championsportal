import React from "react";
import Navbar from "./navbar";
import Sidebar2 from "./sidebar2";
import { useState, useEffect } from "react";
import axios from "axios";


function Admin() {
 
  let [data, setData] = useState([]);

  const [filterObj, setFilterObj] = useState({month:null, week:null, year:null}); 

  const[monthnamess,setMonthNamess]=useState(["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"])
  const[weekss,setWeekss]=useState(["1st week", "2nd week", "3rd week", "4th week", "5th week"])
  const[years,setYears]=useState(["2019","2020","2021", "2022", "2023", "2024", "2025"])


  const [currentDate, setCurrentDate] = useState({ "date":"", "month":"", "year":"", });
   
    
  function getWeekOfMonth(date) {
    const startWeekDayIndex = 1; 
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDay = firstDate.getDay();

    let weekNumber = Math.ceil((date.getDate() + firstDay) / 7);
    if (startWeekDayIndex === 1) {
      if (date.getDay() === 0 && date.getDate() > 1) {
        weekNumber -= 1;
      }

      if (firstDate.getDate() === 1 && firstDay === 0 && date.getDate() > 1) {
        weekNumber += 1;
      }
    }
    return weekNumber;
  }

  const accessToken = localStorage.getItem("accessToken"); 


  const getResult = async() =>{ 
   
    var url = "/getResult"

    
    if(filterObj.month!==null){
      if(url.includes('?')){
        url+=`&month=${filterObj.month}`
      }else{
        url+=`?month=${filterObj.month}`
      }
    } 
    
    if(filterObj.week!==null){
      if(url.includes('?')){
        url+=`&week=${filterObj.week}`
      }else{
        url+=`?week=${filterObj.week}`
      }
    }

    if(filterObj.year!==null){
      if(url.includes('?')){
        url+=`&year=${filterObj.year}`
      }else{
        url+=`?year=${filterObj.year}`
      }
    } 

 


    var data = "";
    var config = {
      method: "get",
      url:url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${accessToken}`,
      },
      data: data,
    };

    axios(config)
      .then(
        await function (response) {  
          console.log(response.data.champions)
          setData(response.data.champions);
        }
      )
      .catch(function (error) {
        console.log(error);
      }); 

  } 

  useEffect(async () => {  
    getResult(); 
    datefilter()
  }, []); 

  function handleChange(e) {
    const temp  = filterObj;
    temp[e.target.name] = e.target.value;
    setFilterObj(temp)
    getResult(); 
  }
 
  function  datefilter(){
    var dateObj = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const month = monthNames[dateObj.getMonth()];
    var year = dateObj.getUTCFullYear();
    let week =  getWeekOfMonth(dateObj);
    if(week===1){ week+='st week'
    }else if(week ===2){week+='nd week'
    }else{  week+='th week' }  
    setCurrentDate({month,year,week})

 
  }

  
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 padding_sidebar">
            <Sidebar2 />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <h3 className=" my-4">Champions Result </h3>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 my-3">
                <div class="form-group">
                  <select className="form-control" name = "month" onChange={handleChange}>
                 {monthnamess.map((monthss,i)=>{
                   return(
                     <>
                  <option selected={currentDate.month === monthss ? true : false} key={i}> 
                     {monthss}
                    </option>
                     </>
                   )
                 })}  
                    
                  </select>
                </div>
                
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 my-3">
              <div class="form-group">
              <select className="form-control" name="week" onChange={handleChange}>
                 {weekss.map((weeks,i)=>{
                   return(
                     
                  <option selected={currentDate.week === weeks ? true : false} key={i}> 
                     {weeks}
                    </option>
                     
                   )
                 })}  
                    
                  </select>
                 
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 my-3">
              <div class="form-group">
              <select className="form-control" name="year" onChange={handleChange}>
                 {years.map((yearss,i)=>{
                   return( 
                         <option selected={currentDate.year == yearss ? true : false} key={i}> 
                             {yearss}
                        </option>  
                      )
                    })}  
                    
                  </select>
                
                </div>
              </div>
            </div>

            <div class="table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm">
              <table class="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">SNO.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                   
                    <th scope="col">Designation</th>
                    <th scope="col">Location</th>
                    <th scope="col">Week </th>
                    <th scope="col">Vote </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((champ, index) => {
                    return (
                      
                        <tr key={index}>
                          <td><i className="fa fa-user"></i></td>
                          <td> {champ.name}</td>
                          <td>{champ.email}</td>
                          <td>{champ.designation}</td>
                          <td>{champ.JobLocation}</td>
                          <td>{champ.week}</td>
                          <td>{champ.count}</td>
                        </tr>
                      
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
