import React from "react";
import "./sidebar.css";

const SideBar = (props) => {
    const links = props.collections.map((item, index) => {
        return <a key={index} onClick={() => props.makeActive(index)} href="#collection3">{item.title}</a>
    })
    console.log(links);
  return (
    <div className="sidebar">
        {links}
    </div>
  );
};

export default SideBar;
