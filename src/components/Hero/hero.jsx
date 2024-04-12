import React from "react";

export default function Hero() {
  return (
    <div className="w-ful md:flex">
      <div className="sm:w-full md:w-1/2">
      </div>
      <div className="sm:w-full md:w-1/2">
        <h2>INFORMATION</h2>

        <p>Full name: Vo Phong Giang</p>
        <p>Phone: 0834718218</p>
        <p>Email: vophonggiang0205@gmail.com</p>
        <h3>PROGRAMMING LANGUAGES:</h3>
        <div>
          <h3>Others:</h3>
          <p>Responsive design, UI/UX design</p>
          <p>
            Effective communication, Teamwork Problem solving, Attention to
            Detail Design pattern
          </p>
          <p>styled-components ,clean code, OOP</p>
        </div>
        <div>
          <h3>CERTIFICATES:</h3>
          <p>TOEIC 740</p>
          <p>Cybersoft FrontEnd Developer</p>
        </div>
      </div>
    </div>
  );
}
