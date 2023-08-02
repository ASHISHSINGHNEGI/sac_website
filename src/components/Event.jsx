import React from "react";
import { Card } from "./Card";
import { Card1 } from "./Card1";
const Event = () => {
  return (
    <div className="A">
      <div className="About">
        <Card1
          url={"/Docouments/gargi.jpg"}
          name={"Dr. Preti"}
          position1={"Head"}
        />

        <div className="description">
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            odio! a ratione enim architecto expedita dolore, aperiam rem
            incidunt facilis possimus exercitationem commodi, saepe, tenetur
            totam. Ab, eaque tenetur odit delectus repellendus voluptate, dicta
            ex ratione ut suscipit quas magnam aut quod ips
          </h3>
        </div>
      </div>
      <h2 className="gp">CLUBS</h2>
      <div className="About1">
        <Card
          url={"/Docouments/sac1.jpg"}
          name={"Auditorium"}
          position={"/Auditorium"}
        />
        <Card
          url={"/Docouments/sac1.jpg"}
          name={"Cultural"}
          position={"/Cultural"}
        />

        <Card url={"/Docouments/sac1.jpg"} name={"Band"} position={"/Band"} />

        <Card url={"/Docouments/sac1.jpg"} name={"Tech"} position={"/Tech"} />

        <Card
          url={"/Docouments/sac1.jpg"}
          name={"Web Development"}
          position={"/Web_development"}
        />
        <Card url={"/Docouments/sac1.jpg"} name={"Dance"} position={"/Dance"} />
        <Card
          url={"/Docouments/sac1.jpg"}
          name={"Cinematography"}
          position={"/Cinematography"}
        />
        <Card
          url={"/Docouments/sac1.jpg"}
          name={"Marketing"}
          position={"/Markting"}
        />
        <Card
          url={"/Docouments/sac1.jpg"}
          name={"Media and Publication"}
          position={"/Media_and_publication"}
        />
        <Card
          url={"/Docouments/sac1.jpg"}
          name={"Robotics"}
          position={"/Robotics"}
        />
        <Card
          url={"/Docouments/sac1.jpg"}
          name={"Takshilla"}
          position={"/Takshilla"}
        />
        <Card
          url={"/Docouments/sac1.jpg"}
          name={"Art and Carft"}
          position={"/Art_and_craft"}
        />
        <Card
          url={"/Docouments/sac1.jpg"}
          name={"Entrepreneurship"}
          position={""}
        />
        <Card url={"/Docouments/sac1.jpg"} name={"Abhivyakti"} position={""} />
        <Card
          url={"/Docouments/sac1.jpg"}
          name={"Photography"}
          position={"/Photography"}
        />
      </div>
    </div>
  );
};

export { Event };
