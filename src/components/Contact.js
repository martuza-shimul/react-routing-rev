import React from "react";

const Contact = (props) => {

    setTimeout( () => {
        props.history.push('./about')
    }, 2000)
  return (
    <div className="container">
      <h4 className="center">This is the Contact-Page</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo rem repellat aperiam omnis
        rerum est quisquam harum ad neque officia.
      </p>
    </div>
  );
};
export default Contact;
