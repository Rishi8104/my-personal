import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Name;-Rishiraj Shinde,
                mob; 90391-35819
                 Dear Hiring Manager, 
                       I am
                            excited to apply for the Full-Stack Developer position at my
                            Experience with both the back-end and front-end stack as well as
                            my proficiency in React, HTML and CSS ,JavaScript , Tailwind
                            CSS, MongoDB, and Node. js, Express js would be a great
                            contribution to your team and company. I'm committed to
                            improving the organization I belong to and my goal is to use my
                            skills and background to support innovative projects. Thank you
                            for your time and consideration, and I Look forward to hearing
                            from you soon
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
