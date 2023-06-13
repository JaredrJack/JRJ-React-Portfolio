import React from 'react';
let myPic = "/assets/images/IMG_2259 (2).jpg"

export default function About() {
    return (
      <div>
        <h1>About Page</h1>
        <div className="d-flex justify-content-center">
          <img src={process.env.PUBLIC_URL+myPic} alt="my pic" height={250}></img>
        </div>
        <br></br>
        <p>
        Service Professional and Army Veteran transitoning into the Web Development industry. Known for having exceptional relationships with keen skills, elevated level of initiative, attention to detail, and commitment to excellence and growth. Proven ability to provide customer service in high-volume populations. Experienced in effectively collaborating with individuals of diverse backgrounds, and tactfully communicating with challenging customers. Ability to work independently and be self-disciplined in a virtual work environment.
        </p>
    </div>
  );
}