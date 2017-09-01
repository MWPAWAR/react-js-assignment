import React from 'react';
import { Link } from 'react-router';

const AboutUs = props => {
  return (
    <div>
      <div>About Us</div>
      <div class="links">
        <li><Link to="aboutus/profile">Profile</Link></li>
        <li><Link to="aboutus/team">Team</Link></li>
        <li><Link to="aboutus/contact">Contact</Link></li>
      </div>
      <p>{props.children}</p>
    </div>
  );
}

export default AboutUs;
