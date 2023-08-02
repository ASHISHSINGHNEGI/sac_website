import React from "react";
import { Card } from "./Card";
import { useState,useEffect } from 'react';
import { app } from '../firebase';
import { getAuth,}  from "firebase/auth";
import { getFirestore,  collection, onSnapshot, query,} from "firebase/firestore";
import { Card1 } from "./Card1";




const auth=getAuth(app);
const db = getFirestore(app);



let b=[]
console.log(b)










const Photography=()=>{
  const [head,sethead]=useState("")

    const [user, setuserdata]=useState([]);
    console.log("akfk",b[0])
    console.log("hhh",user)
    useEffect(() => {
        const q = query(collection(db, "Photography"));
    
        
    
        const unsubscribeForMessage = onSnapshot(q, (snap) => {
            const a=(snap.docs.map((item)=>item.data()))
            // console.log(a[0].Member)
            
        const c=  a[0].Member;
        console.log(c[0])
        sethead(a[0].Head)
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
        <div className="photo">
<div className="About">

<Card1
url={"/Docouments/Neeraj.jpg"}
name={head}
position1={"Head"}
/>

<div className="description">
<h3 >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, odio!
    a ratione enim architecto expedita dolore, aperiam rem incidunt facilis possimus exercitationem commodi, saepe, tenetur totam. Ab, eaque tenetur odit delectus repellendus voluptate, dicta ex ratione ut suscipit quas magnam aut quod ips


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

export {Photography};