import React from 'react';

function About() {

  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  return <section id="about" style={sectionStyle}>
    <div>
      <h1>About Us</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, est nec cursus suscipit, massa arcu eleifend libero, in dapibus ex est sed orci. Integer vestibulum tellus vel ex bibendum, ac bibendum tortor laoreet. Sed a efficitur metus. Fusce ullamcorper vestibulum risus, a tempor erat efficitur vel.
      </p>
    </div>
    <div>
      <img src='https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
    </div>
  </section>;
}

export default About;