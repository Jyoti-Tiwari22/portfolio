// Home.js
import React from "react";
import imageSrc from "../assets/images/image2.jpeg"

function Home() {
  const name = "Jyoti Tewari";
  const profession = "Front-end Developer";

  return (
    <section>
      <div className="home-section section active" id="home">
        <div className="effect-wrap">
          <div className="effect effect-1"></div>
          <div className="effect effect-2">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
          <div className="effect effect-3"></div>
          <div className="effect effect-4"></div>
          <div className="effect effect-5">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </div>
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="home-text">
              <p>Hello, my name is</p>
              <h2 className="name-h2">{name}</h2>
              <p>
                And I'm a <span className="h1">{profession}</span>
              </p>
              <a href="#about" className="link-item btn-1 outer-shadow hover-in-shadow">
                More About Me
              </a>
            </div>
            <div className="home-img">
              <div className="img-box inner-shadow">
                <img src={imageSrc} className="outer-shadow" alt="profile-pic" onContextMenu={(e) => e.preventDefault()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
