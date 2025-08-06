import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Doctor's Note</p>
          <h3>What a Doctor Observes in Us</h3>
          <p>
            As a professional accustomed to diagnosing human conditions and evaluating
            endurance, I’ve had the unique opportunity to observe this team of young
            developers closely. What I see in them is rare: an unwavering passion,
            intellectual curiosity, and an ability to persevere even in the face of
            technical challenges — qualities I would easily compare to those found in
            top-performing professionals in any discipline.
          </p>
          <p>
            Much like medicine, software development demands precision, empathy, and a
            problem-solving mindset. This team embodies those traits. They debug code
            the way a doctor diagnoses a patient — with care, insight, and attention to
            detail.
          </p>
          <p>
            Their commitment to the MERN stack project is not just about lines of code;
            it's about crafting a better future — for users, clients, and themselves.
            Their energy is contagious, their collaboration seamless, and their
            potential limitless.
          </p>
          <p>
            If I had to write a prescription, it would read: “Continue nurturing this
            passion, and you’re guaranteed to build more than just software — you’ll
            build impact.”
          </p>
          <p>— Dr. R. Mehra, MBBS, MD (Observer & Mentor)</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
