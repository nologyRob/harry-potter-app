import React from 'react'
import "./Checkboxes.scss"

const Checkboxes = (props) => {
  const {handleChecked} = props;

  return (
    <form className="checkboxes">
        <div>
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="Gryffindor"
            onChange = {handleChecked}
          />
          <label className="checkboxes__label" htmlFor="subscribeNews">Gryffindor</label>
          </div>
          <div>
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="Hufflepuff"
            onChange={handleChecked}
          />
          <label className="checkboxes__label" htmlFor="subscribeNews">Hufflepuff</label>
          </div>
          <div>
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="Ravenclaw"
            onChange={handleChecked}
          />
          <label className="checkboxes__label" htmlFor="subscribeNews">Ravenclaw</label>
          </div>
          <div>
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="Slytherin"
            name="Slytherin"
            onChange={handleChecked}
          />
          <label className="checkboxes__label" htmlFor="subscribeNews">Slytherin</label>
          </div>
      </form>
  )
}

export default Checkboxes