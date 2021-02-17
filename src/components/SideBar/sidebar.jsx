import React from "react";
import "./SideBar.css";


// this is not React best practice. using className to reference an external CSS stylesheet is
// this is used when dynamic styling is needed at render
// the activeStyle is used when the currently active collection is selected

const activeStyle = {
    backgroundColor: 'green',
    color: 'white' 
}

const SideBar = (props) => {
    let activeIndex = props.activeCollectionIndex;
    const links = props.collections.map((item, index) => {
        if(index === activeIndex){
            return <a key={index} style={activeStyle} onClick={() => props.makeActive(index)} href="#collection3">{item.title}</a>
        } else {
            return <a key={index} onClick={() => props.makeActive(index)} href="#collection3">{item.title}</a>
        }        
    })
  return (
    <div className="sidebar">
        {links}
    </div>
  );
};

export default SideBar;
