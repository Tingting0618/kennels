// Add this import at the top
import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useHistory, Link } from 'react-router-dom'
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
  // Since you are no longer ALWAYS displaying all of the animals
  const [filteredAnimals, setFiltered] = useState([])
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    getAnimals()
  }, [])

  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])

  return (
    <>
      <h1>Animals</h1>

      <button onClick={() => history.push("/animals/create")}>
        Make Reservation
      </button>

      <div className="animals">
        {
          filteredAnimals.map(animal =>{
            return (
            <div className="animal">
              <Link to={`/animals/detail/${animal.id}`}>
                {animal.name}
              </Link>
            </div>
          )}
          )
        }
      </div>
    </>
  )
}