import React from "react";
import { useNavigate,Link } from "react-router-dom";






const Card1=({url,name, position,position1})=>{

  const navigate = useNavigate();

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate(position);
  };



    return(
        <div id="event" onClick={navigateHome}>
       <div className="container1">
         <div className="event-list1">
           <div className="event1">
             <img className="photo1" src={url} alt="member" />
             <h3>{name}</h3>
             <p>{position1}</p>
             <div className="layer">
               <h3>Social Media app</h3>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore veniam numquam explicabo quos, quibusdam quis ab minima unde soluta incidunt et id recusandae optio molestiae sint atque expedita! Eum, quibusdam!</p>
               <a><i className="fa-solid fa-up-right-from-square"></i></a>
             </div>
           </div>
           </div>
           </div>
           </div>
    )
}

export {Card1};