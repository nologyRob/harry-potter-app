import React from 'react'
import "./Checkboxes.scss"

const Checkboxes = () => {
  return (
    <form className="checkboxes">
        <div>
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="subscribeNews"
            name="subscribe"
            value="newsletter"
          />
          <label className="checkboxes__label" for="subscribeNews">Gryffindor</label>
          </div>
          <div>
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="subscribeNews"
            name="subscribe"
            value="newsletter"
          />
          <label className="checkboxes__label" for="subscribeNews">Hufflepuff</label>
          </div>
          <div>
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="subscribeNews"
            name="subscribe"
            value="newsletter"
          />
          <label className="checkboxes__label" for="subscribeNews">Ravenclaw</label>
          </div>
          <div>
          <input className="checkboxes__checkbox"
            type="checkbox"
            id="subscribeNews"
            name="subscribe"
            value="newsletter"
          />
          <label className="checkboxes__label" for="subscribeNews">Slytherin</label>
          </div>
      </form>
  )
}

export default Checkboxes