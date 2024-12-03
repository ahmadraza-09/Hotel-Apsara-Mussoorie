import React from "react";
import "../css/introduction-section.css";
import IntroductionImg from "../assets/hero.jpg";

const IntroductionSection = () => {
  return (
    <section className="introduction-section">
      <div className="introduction-section-right swipe">
        <h1 className="after">
          Welcome To <br />
          <h1>Hotel Apsara Mussoorie</h1>
        </h1>
        <p>
        Occupying a part of the main road, lying right opposite to the Picture Palace you can find Apsara Hotel Mussoorie. It is near to the bus or taxi stand and its location is easily found as it is situated on a busy road. The hotel welcomes its guests by providing breakfast to all of them. The hotel defines itself to be pleasant and delightful concerning its guests. Apsara Hotel Mussoorie Rooms are guest comforting and within budget. There are different types of rooms available in the hotel. Suite rooms are nicely facilitated with cable television, dressing mirror, comfortable beds and a clean bathroom with constant supply of hot/cold water. Deluxe rooms are also provided with cable television, dressing mirror, comfortable beds and a clean bathroom with constant supply of hot/cold water. Pleasurable semi deluxe rooms are momentously equipped with cable television, dressing mirror, comfortable beds and a clean bathroom with constant supply of hot/cold water.
        </p>
      </div>
      <div className="introduction-section-left swipe">
        <img
          src={IntroductionImg}
          alt="The Pearl 21 Villa Image"
          loading="eager"
          width="100%"
          height="auto"
        />
      </div>
    </section>
  );
};

export default IntroductionSection;
