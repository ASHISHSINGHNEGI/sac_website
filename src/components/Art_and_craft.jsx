import React from "react";
import { Card } from "./Card";
import { Card1 } from "./Card1";
import { useState, useEffect } from "react";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

let b = [];

const Art = () => {
  const [head, sethead] = useState("");

  const [user, setuserdata] = useState([]);
  console.log("akfk", b[0]);
  console.log("hhh", user);
  useEffect(() => {
    const q = query(collection(db, "Art & Craft"));

    const unsubscribeForMessage = onSnapshot(q, (snap) => {
      const a = snap.docs.map((item) => item.data());
      // console.log(a[0].Member)

      const c = a[0].Member;
      console.log(c[0]);
      setuserdata(...c);
      sethead(a[0].Head);

      for (let i = 0; i < c.length; i++) {
        b.push(c[i]);
      }
    });

    return () => {
      unsubscribeForMessage();
    };
  }, []);

  return (
    <div className="Art">
      <div className="About">
        <Card1 url={"/Docouments/Naveen.jpg"} name={head} position1={"Head"} />

        <div className="description">
          <h3>
            {" "}
            Once Picasso said "The purpose of Art and Craft is washing the dust
            of daily life off our souls". Hello everyone we are the group which
            work for enhancing the crafty skills and talent with working
            together. Here we provide a platform to enhance up and showcase the
            talent through expressing it with colors and papers.
          </h3>
        </div>
      </div>
      <h2 className="gp">Members</h2>
      <div className="About1">
        {/* <Card
url={"/Docouments/sac1.jpg"}
name={"Manshi Bhatt"}
position1={"CSE 2nd Yr"}
/> */}
        {b.map((item, index) => {
          return <Card name={item.Name} url={item.PhotoUrl} />;
        })}
      </div>
    </div>
  );
};

export { Art };
