import React from 'react'
import "./Checkboxes.scss"

const Checkboxes = (props) => {
  const {house} = props;

  return (
    <form className="checkboxes">
        <div>
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="Gryffindor"
            value={house}
          />
          <label className="checkboxes__label" htmlFor="subscribeNews">Gryffindor</label>
          </div>
          <div>
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="Hufflepuff"
            value={house}
          />
          <label className="checkboxes__label" htmlFor="subscribeNews">Hufflepuff</label>
          </div>
          <div>
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="Ravenclaw"
            value={house}
          />
          <label className="checkboxes__label" htmlFor="subscribeNews">Ravenclaw</label>
          </div>
          <div>
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="Slytherin"
            name="Slytherin"
            value={house}
          />
          <label className="checkboxes__label" htmlFor="subscribeNews">Slytherin</label>
          </div>
      </form>
  )
}

export default Checkboxes