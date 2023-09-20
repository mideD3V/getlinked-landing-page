import React from "react";
import Button from './Buttonx'

const Header = () => {
  return (
    <section id="header">
      <logo>
        get<span className="purple-text">linked</span>
      </logo>
      <navlinks>
        <p>Timeline</p>
        <p>Overview</p>
        <p>FAQs</p>
        <p>Contact</p>
      </navlinks>

      <Button text='Register'/>
    </section>
  );
};

export default Header;
