import React from 'react';

function Contact() {
  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  return <section id="contact" style={sectionStyle}>
    <div>
      <img src='https://images.pexels.com/photos/5378353/pexels-photo-5378353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
    </div>
    <div>
      <h1>Contact</h1>
      <p>Our services are available and <br></br>
      we have a dedicated team ready to<br></br>
      assist you.</p><br></br>
      <p>@ snudge@gmail.com</p>
      <p>+254-712-456-789</p>
      <p>Moringa School<br></br>Ngong road</p>
    </div>
  </section>;
}

export default Contact;