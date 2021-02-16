import React from "react";
import "./sidebar.css";

const activeStyle = {
    backgroundColor: 'green' 
}

const SideBar = (props) => {
    let activeIndex = props.activeCollection;
    const links = props.collections.map((item, index) => {
        if(index === activeIndex){
            return <a key={index} style={activeStyle} onClick={() => props.makeActive(index)} href="#collection3">{item.title}</a>
        } else {
            return <a key={index} onClick={() => props.makeActive(index)} href="#collection3">{item.title}</a>
        }        
    })
    console.log(links);
  return (
    <div className="sidebar">
        {links}
    </div>
  );
};

export default SideBar;
