import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import "./Nav.css";

function Home() {
  const navigate = useNavigate();


  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const handleLogInClick = () => {
    navigate("/login");
  };

  return <section id="home" style={sectionStyle}>
    <div>
      <img src='https://images.pexels.com/photos/5948347/pexels-photo-5948347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
    </div>
    <div>
      <p>
      Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. Sed hendrerit, est nec 
      cursus suscipit, massa arcu eleifend libero,
       in dapibus ex est sed orci. Integer vestibulum 
       tellus vel ex bibendum, ac bibendum tortor laoreet. 
       Sed a efficitur metus. Fusce ullamcorper vestibulum 
       risus, a tempor erat efficitur vel. Sed varius turpis 
       ac metus ultricies, vel egestas ante tincidunt. Nulla
        facilisi. Cras sit amet bibendum tortor. Curabitur 
        eget eros nec justo auctor feugiat vel ut arcu.
         Proin eu dui vel ex blandit consectetur in eu ipsum. 
         Suspendisse sed nunc non ipsum sodales suscipit.
          Sed consequat tortor id odio convallis laoreet.
      </p>
      <button onClick={handleLogInClick} className="btn btn-info">Get Started</button>
    </div>
  </section>;
}

export default Home;