import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function Sidebar() {
  return (
    <div>
      <ProSidebar
      width="380px"
      height="1000px"
      breakPoint="xs | sm | md | lg | xl"
      >
        <Menu iconShape="square">
          <MenuItem >Neosoft</MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <SubMenu title="Components"
          height="300px">
          
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
