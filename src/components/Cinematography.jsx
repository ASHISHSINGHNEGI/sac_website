import React from "react";
import { Card } from "./Card";
import { Card1 } from "./Card1";
import { useState,useEffect } from 'react';
import { app } from '../firebase';
import { getAuth,}  from "firebase/auth";
import { getFirestore,  collection, onSnapshot, query,} from "firebase/firestore";





const auth=getAuth(app);
const db = getFirestore(app);



let b=[]








const Cinema=()=>{

  const [head,sethead]=useState("")
    const [user, setuserdata]=useState([]);
    console.log("akfk",b[0])
    console.log("hhh",user)
    useEffect(() => {
        const q = query(collection(db, "Cinematography"));
    
        
    
        const unsubscribeForMessage = onSnapshot(q, (snap) => {
            const a=(snap.docs.map((item)=>item.data()))
            // console.log(a[0].Member)
            
        const c=  a[0].Members;
        console.log(c[0])
        setuserdata(...c)
        sethead(a[0].Head)
           
            for(let i=0;i<c.length;i++){
b.push(c[i])
            }
          });
      
    
        return () => {
         
          unsubscribeForMessage();
        };
      }, []);






    return(
        <div className="cinema">
<div className="About">

<Card1
url={"/Docouments/Israr.jpeg"}
name={head}
position1={"Head"}
/>

<div className="description">
<h3 >The Cinematography Club at our college is a group where students who are interested in making movies and videos can join together. We organize workshops, watch films, work on projects, and meet other people who like the same things. It's a fun and supportive community where we can learn and practice our cinematography skills.


</h3>
</div>
</div>
<h2 className="gp">Members</h2>
<div className="About1">
   
{b.map((item,index)=>{

return (
  <Card name={item.Name}
  url={item.PhotoUrl}
  position1={`${item.Branch} ${item.Year} Yr`}
   />
 )
})}


</div>


        </div>
    )
}

export {Cinema};