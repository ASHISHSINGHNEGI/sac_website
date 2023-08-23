import React from "react";
import { useNavigate,Link } from "react-router-dom";
const Card=({url,name, position,position1})=>{

  const navigate = useNavigate();

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate(position);
  };



    return(
        <div id="event" onClick={navigateHome}>
       <div className="container">
         <div className="event-list">
           <div className="event">
             <img src={url} alt="member" />
             <h3>{name}</h3>
             <p>{position1}</p>
             <div className="layer">
               <a><i className="fa-solid fa-up-right-from-square"></i></a>
             </div>
           </div>
           </div>
           </div>
           </div>
    )
}

export {Card};