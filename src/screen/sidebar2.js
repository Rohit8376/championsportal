import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart, FaUser,FaUsers } from "react-icons/fa";
import {
  FiUsers,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";

import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar2.css";
import { useHistory } from "react-router";

const Sidebar2 = () => {
  const [menuCollapse, setMenuCollapse] = useState("");


  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse() : setMenuCollapse(true);
  };


  let history = useHistory();


  const handleTeam = (e) => {
    console.log(e);
    history.push("/team");
  };

  
  const handleSession = (e) => {
    console.log(e);
    history.push("/session");
  };
  const handleLogout = (e) => {
    localStorage.removeItem("fname", "priya");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
    history.push("./")
  };
  const handleAdmin = (e) => {
    console.log(e);
    history.push("/admin");
  };
  const handleMember = (e) => {
    console.log(e);
    history.push("/champions");
  };
  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
           
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">

              {!localStorage.getItem("role")?(
                <MenuItem
                active={true}
                icon={<FaUsers />}
                onClick={(e) => handleTeam()}
              >
                Team
              </MenuItem>
              ):""}
               
               <MenuItem
                active={true}
                icon={<FaList />}
                onClick={(e) => handleSession()}
              >
                Sessions
              </MenuItem>


              {localStorage.getItem("role") ?  <MenuItem
                    active={true}
                    icon={<FaUser />}
                    onClick={(e) => handleAdmin()}
                  >
                  Result
                  </MenuItem> :""}
                  {localStorage.getItem("role") ?  <MenuItem
                    active={true}
                    icon={<FaUser />}
                    onClick={(e) => handleMember()}
                  >
                  Add Member
                  </MenuItem> :""}
                   

             
          
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={() => handleLogout()}>
                Logout
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar2;
