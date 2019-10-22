import React from "react";
import Rainbow from './../hoc/Rainbow'

const About = () => {
  return (
    <div className="container">
      <h4 className="center">This is the About-Page</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo rem repellat aperiam omnis
        rerum est quisquam harum ad neque officia.
      </p>
    </div>
  );
};
export default Rainbow(About);
