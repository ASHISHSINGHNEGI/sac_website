import React from 'react'

export const Card3 = ({name,url,link,what,email,detail}) => {
  return (
    <><div className="containerr">
    <h1>{name}</h1>
    <div className="icon">
        <img className="i" src={url}  alt=""/>
    </div>
    <div className="social_media">

        <a href={link}><i className="fa-brands fa-linkedin" id="social" ></i></a>
        <p> <i className="fa-solid fa-envelope" id="social"></i>
        {email}</p>
        <p> <i className="fa-brands fa-whatsapp" id="social"></i>
       {what}</p>
    </div>
    <div className="details">
        <p>
            {detail}
</p>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, odit perferendis earum minus facere error, et ipsam reiciendis corporis ducimus dolorum voluptas repudiandae, aspernatur eos tempore voluptatem ea eaque voluptate!</p> */}
    </div>
    
</div></>
  )
}
//  <h1>Priti Dimri</h1>
// <div className="icon">
// <img className="i" src="./Docouments/preeti11.jpeg"  alt=""/>
// </div>
// <div className="social_media">

// <a href="https://www.linkedin.com/in/priti-dimri-76969579/"><i className="fa-brands fa-linkedin" id="social" ></i></a>
// <i className="fa-solid fa-envelope" id="social"></i>
// <i className="fa-brands fa-whatsapp" id="social"></i>
// </div>
// <div className="details">
// <p>Organisations are seeking for well-rounded students more than ever. Recruiters nowadays evaluate your interpersonal skills, leadership abilities, and GPA in addition to your GPA.
// GBPIET has over 15 clubs and organisations that help to create a dynamic campus life while also giving  the students opportunity to build leadership and interpersonal skills, gain valuable resume credits, and have a lot of fun.  
// Student Activity Cell(SAC) is the string that binds all these clubs and organisations together and is committed to creating an open and supportive community and works hard to bring students, faculty, staff and comunity together for a variety of experiences. SAC is a committee by the students, for the students
// And all student activities have a service component to contribute to the local community and are student-run. 
// Student Activity Cell(SAC) has been formed with a view to promote and further the cultural, sporting, social activities of the college 
// GBPIET Alumni consistently tell us that their involvement in student activities resulted in lifetime connections and had a significant impact on their careers and lives.
// Your education doesn't stop at the classroom door. Student activities are a vital part of the GBPIET experience, complementing your studies and creating opportunities for friendship and self-discovery. So develop an existing talent. Explore a new interest. Meet folks who share your interest. 
// But, whatever your interests are, we want you to participate! It's as easy as that.
// </p>
//     {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, odit perferendis earum minus facere error, et ipsam reiciendis corporis ducimus dolorum voluptas repudiandae, aspernatur eos tempore voluptatem ea eaque voluptate!</p> */}
// </div>

// </div></>kdfkjdkf