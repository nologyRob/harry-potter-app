import React from "react";
import "./Checkboxes.scss";

const Checkboxes = (props) => {
  const { handleCheckbox } = props;

  return (
    <form className="checkboxes">
      <div>
        <input
          onClick={handleCheckbox}
          className="checkboxes__checkbox"
          type="checkbox"
          id="Gryffindor"
          value="Gryffindor"
        />
        <label className="checkboxes__label" htmlFor="subscribeNews">
          Gryffindor
        </label>
      </div>
      <div onClick={handleCheckbox}>
        <input
          className="checkboxes__checkbox"
          type="checkbox"
          id="Hufflepuff"
          value="Hufflepuff"
        />
        <label className="checkboxes__label" htmlFor="subscribeNews">
          Hufflepuff
        </label>
      </div>
      <div onClick={handleCheckbox}>
        <input
          className="checkboxes__checkbox"
          type="checkbox"
          id="Ravenclaw"
          value="Ravenclaw"
        />
        <label className="checkboxes__label" htmlFor="subscribeNews">
          Ravenclaw
        </label>
      </div>
      <div onClick={handleCheckbox}>
        <input
          className="checkboxes__checkbox"
          type="checkbox"
          id="Slytherin"
          name="Slytherin"
          value="Slytherin"
        />
        <label className="checkboxes__label" htmlFor="subscribeNews">
          Slytherin
        </label>
      </div>
    </form>
  );
};

export default Checkboxes;
