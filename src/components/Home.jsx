import React from "react";
import IndividualIntervalsExample from './Slider'
import { Card } from "./Card";
import { useNavigate,Link} from "react-router-dom";
import { useState,useEffect } from 'react';
import { app } from '../firebase';
import { getAuth,}  from "firebase/auth";
import { getFirestore,  collection, onSnapshot, query,} from "firebase/firestore";

const auth=getAuth(app);
const db = getFirestore(app);














const Home=()=>{


// upcoming events







const [event1,setevent1]=useState(" ");
const [event2,setevent2]=useState(" ");
const [event3,setevent3]=useState(" ");
const [url1,seturl1]=useState(" ");
const [url2,seturl2]=useState(" ");
const [url3,seturl3]=useState(" ");
const [ decs1,setdecs1]=useState(" ");
const [ decs2,setdecs2]=useState(" ");
const [ decs3,setdecs3]=useState(" ");
const [event4,setevent4]=useState(" ");
const [url4,seturl4]=useState(" ");
const [event5,setevent5]=useState(" ");
const [url5,seturl5]=useState(" ");
const [ decs5,setdecs5]=useState(" ");
const [ decs4,setdecs4]=useState(" ");
const [lenk,setlenk]=useState("https://google.com");
const [aboutSac,setabout]=useState(" ");
const [upcommingdec,setupcoming]=useState(" ");
const [Sponserd,setSponserd]=useState("");
const [url6,seturl6]=useState("")
const [url7,seturl7]=useState("")
const [url8,seturl8]=useState("")
const [video_link,setvideolink]=useState("")








    useEffect(() => {
        const q = query(collection(db, "upcoming events"));
        const unsubscribeForMessage = onSnapshot(q, (snap) => {
            const a=(snap.docs.map((item)=>item.data()))
          
        
        setevent1(a[0].Event1) 
        setevent2(a[0].Event2) 
        setevent3(a[0].Event3) 
        setdecs1(a[0].Decription1)
        setdecs2(a[0].Decription2)
        setdecs3(a[0].Decription3)
        seturl1(a[0].PhotoUrl1)
        seturl2(a[0].PhotoUrl2)
        seturl3(a[0].PhotoUrl3)
        setevent4(a[0].Event4) 
        setevent5(a[0].Event5) 
        setdecs4(a[0].Decription4)
        seturl4(a[0].PhotoUrl4)
        setdecs5(a[0].Decription5)
        seturl5(a[0].PhotoUrl5)  
        seturl6(a[0].footer_photo1)
        seturl7(a[0].footer_photo2)
        seturl8(a[0].footer_photo3)
        setvideolink(a[0].video_link)
          });


          const m = query(collection(db, "Registration Link"));
          const unsubscribeForMessage1 = onSnapshot(m, (snap) => {
            const d=(snap.docs.map((item)=>item.data()))
            setlenk(d[0].link);
          })
      
          const n = query(collection(db, "Home content"));
          const unsubscribeForMessage2 = onSnapshot(n, (snap) => {
            const e=(snap.docs.map((item)=>item.data()))
            setabout(e[0].AboutSac);
            setupcoming(e[0].AboutUpcomming);
            setSponserd(e[0].Sponsord);
          })
      

        return () => {
         unsubscribeForMessage1();
          unsubscribeForMessage();
          unsubscribeForMessage2();
        };
      }, []);
    

















    
    // const navigate = useNavigate();

    const navigateHome1 = () => {
      // 👇️ navigate to /
      let alink = document.createElement('a');
      alink.href = lenk;
      alink.click();
    };
    const eventpage=()=>{
      let nev=<Link className="link" to="/Event"></Link>
      nev.click()
    }
    


    return(
        <div className="Home">
        <div className="abSac">
        <h1>UPCOMMING EVENTS</h1>
                <IndividualIntervalsExample 
                SRC1={url1}
                Event1={event1}
                dec1={decs1}
                SRC2={url2}
                Event2={event2}
                dec2={decs2}
                SRC3={url3}
                Event3={event3}
                dec3={decs3}
                SRC4={url4}
                Event4={event4}
                dec4={decs4}
                SRC5={url5}
                Event5={event5}
                dec5={decs5}
                />
                <br></br>
          <button onClick={navigateHome1}><h3>Register</h3></button>
        </div>
        <div className="sllider">
            <h1>ABOUT SAC</h1>
            <div className="inner">
                <div className="inner2" ><iframe className="frame" src={video_link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>
                <div className="inner2">
                    
                 <p> {aboutSac}</p> 

</div>
            </div>
        </div>
        <div className="upcomingE">
            <div className="gallery">
           <Card
url={"/Docouments/Circket.webp"}
// name={"Tech"}
// position={"/Tech"}
/>
<Card
url={url6}
// name={"Tech"}
// position={"/Tech"}
/>
<Card
url={url7}
// name={"Tech"}
// position={"/Tech"}
/>
<Card
url={url8}
// name={"Tech"}
// position={"/Tech"}
/>
</div>
                
                {/* <div className="upineer">kdfkdfjkfk</div> */}
                <p>{upcommingdec}</p>
                <button><Link className="all_event" to="/Event">See all Events</Link></button>
        </div>
        <div className="Sponserd">
            <h1>Become a Sponsord </h1>
            <p> 

{Sponserd}
</p>
        </div>

    </div>

    )
}

export {Home};