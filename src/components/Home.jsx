import React from "react";
import IndividualIntervalsExample from './Slider'
import { Card } from "./Card";



const Home=()=>{
    



    return(
        <div className="Home">
        <div className="abSac">
          <h1 className="h11"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat error voluptatum tempore tempora consequuntur maiores repellat voluptas, ab at perspiciatis nihil praesentium recusandae aut fuga in ratione iure incidunt accusantium!</h1> 
          <button><h3>Register</h3></button>
        </div>
        <div className="sllider">
            <h1>About Sac</h1>
            <div className="inner">
                <div className="inner2" style={{border:"solid 10px" ,borderStyle:"ridge", display:"flex", alignItems:"center" }}><iframe width="560" height="315" src="https://www.youtube.com/embed/ylFYB-yNwA4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe></div>
                <div className="inner2">
                    <div className="inner3"><h3>free swing</h3> <h3>unique Experiance </h3></div>
                    
                    Discover a world beyond the classNamerooms, where passion, creativity, and engagement flourish. The Student Activity Cell is your gateway to a vibrant and enriching college experience. Here, we believe that holistic development goes hand in hand with academic excellence.

Our mission is to foster a dynamic and inclusive environment that empowers students to explore their interests, unleash their talents, and create lifelong memories. Whether you're an artist, a sports enthusiast, a social activist, a tech wizard, or someone with a unique passion, we have something for everyone.

Join us and embark on a journey of self-discovery, personal growth, and unforgettable moments. Here, you'll find a myriad of activities, events, and initiatives designed to nurture your talents, expand your horizons, and build lifelong friendships.

What sets us apart:

</div>
            </div>
        </div>
        <div className="upcomingE">
                <h1>Upcomming Events</h1>
                <IndividualIntervalsExample/>
                {/* <div className="upineer">kdfkdfjkfk</div> */}
                <p>Join us at Goonj - Where Culture Unites!

Goonj, the cultural fest of Govind Ballabh Pant Institute of Engineering and Technology, is a vibrant celebration of talent, diversity, and creativity. Immerse yourself in an exhilarating experience that showcases the very essence of our college's spirit. Discover a world where traditions blend with modernity, and where passion takes center stage.

Key Attractions of Goonj 2023:

1. Celebrity Guest Appearances: Get up close and personal with your favorite Politician as this time we are getting an alluring presence of our loved Chief Minister . Prepare to be star-struck as they grace our fest with their presence and share their insights and experiences

2. Spectacular Performances: Witness awe-inspiring performances by the brilliant students showcasing their talent by the events like nukkad natak, footloose, drama, oppo, debate, quiz and many more acts with will make you feel spending your time worth and joyful. From traditional dances to contemporary acts, our stage comes alive with mesmerizing displays of talent.

4. Cultural Extravaganza: Immerse yourself in the rich tapestry of cultures that our fest offers. Experience captivating music, breathtaking art installations, and flavorsome culinary delights from various regions, all coming together to create an unforgettable fusion.

6. Street Food Fiesta: Indulge your taste buds in a gastronomic adventure at our Street Food Fiesta. Sample a variety of mouthwatering delicacies from all corners of the country, tantalizing your senses with flavors that will leave you craving for more.

Join us at Goonj, where a world of culture, talent, and excitement awaits. Save the date and get ready to be part of an extraordinary celebration that will leave you inspired and uplifted.

Follow us on social media for updates and be sure to mark your calendar for Goonj [25-26 May ]. See you there!</p>
                <button>See all Events</button>
        </div>
        <div className="Sponserd">
            <h1>Become a Sponsord </h1>
            <p>[11:28 pm, 17/05/2023] Abhikalp Mishra: Discover a world beyond the classNamerooms, where passion, creativity, and engagement flourish. The Student Activity Cell is your gateway to a vibrant and enriching college experience. Here, we believe that holistic development goes hand in hand with academic excellence.

Our mission is to foster a dynamic and inclusive environment that empowers students to explore their interests, unleash their talents, and create lifelong memories. Whether you're an artist, a sports enthusiast, a social activist, a tech wizard, or someone with a unique passion, we have something for everyone.

Join us and embark on a journey of self-discovery, personal growth, and unforgettable moments. Here, you'll find a myriad of activities, events, and initiatives designed to nurture your talents, expand your horizons, and build lifelong friendships.

What sets us apart:

1. Diverse Range of Activities: From cultural festivals to sports tournaments, from entrepreneurship workshops to community service initiatives, our wide array of activities cater to a diverse range of interests. Explore your passions or discover new ones – the choice is yours.

2. Collaborative Spirit: We believe in the power of collaboration. Our dedicated team of student leaders, faculty mentors, and staff work hand in hand to create engaging experiences and support your ideas. Join our committees, clubs, and societies to be part of a vibrant community that thrives on teamwork and cooperation.

3. Leadership Opportunities: The Student Activity Cell is a platform that encourages and nurtures leadership skills. Take charge of projects, organize events, and develop your managerial abilities. Lead by example and make a positive impact on your campus.

4. Skill Development: We are committed to helping you grow beyond academics. Participate in workshops, seminars, and training programs that enhance your skills, from public speaking to coding, from event planning to project management. Gain practical knowledge and develop competencies that will benefit you in your future endeavors.

5. Fun and Friendship: College life is not just about studying; it's also about making lifelong memories and forging lasting friendships. Through our social events, parties, cultural gatherings, and outings, we create opportunities for you to unwind, relax, and connect with your fellow students.

Take a step forward and explore the Student Activity Cell's offerings. Engage, learn, create, and discover your true potential. Your college journey starts here.

Let the adventure begin!


</p>
        </div>

    </div>

    )
}

export {Home};