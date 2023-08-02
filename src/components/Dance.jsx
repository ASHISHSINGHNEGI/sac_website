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







const Dance=()=>{

  const [head,sethead]=useState("")
    const [user, setuserdata]=useState([]);
    console.log("akfk",b[0])
    console.log("hhh",user)
    useEffect(() => {
        const q = query(collection(db, "Dance"));
    
        
    
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
        <div className="Dance">
<div className="About">

<Card1
url={"/Docouments/Aakriti.jpg"}
name={head}
position1={"Head"}
/>

<div className="description">
<h3 >There are secret to happiness and DANCING is one of them.Hello everyone for the first time, we are introducing a group, for people who love dancing and are passionated towards it. Here you can learn different style and forms of dance. You can learn and improve this time, cause this time it's not only about the people who can dance, but also about people who want to dance.
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

export {Dance};