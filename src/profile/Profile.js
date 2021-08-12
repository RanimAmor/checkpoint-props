import React from "react";
import PropTypes from "prop-types";

const styleObject={color:"red",textAlign: "center"};
const styleObject1={color:"#451c1b",textAlign: "center"};


const Profile = props =>{
    return (
        [
         <div> {props.children}</div>,
        <h1 style={styleObject}>  {props.name}</h1>,
        <h2 style={styleObject1}>  {props.profession}</h2>,
        <h3 style={styleObject1}>  {props.bio}</h3>,
        <button onClick={() => props.handleName(props.name)}  style={{backgroundColor:"#008CBA",  border: "none",   color: "white",  fontSize: "16px", width:"100px",height:"40px"
    }}>
        My Name
      </button>
        
        ]
        )
   };
 Profile.defaultProps = {
 name: "ranim",
 profession: "Student",
 bio: "At medtech",
};
Profile.propTypes ={
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}
   export default  Profile;