// Add this import at the top
import { useHistory, Link } from 'react-router-dom'
import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalDetail } from "./AnimalDetail"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
  const { releaseAnimal } = useContext(AnimalContext)
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
            // {
            // return <AnimalDetail key={animal.id} animal={animal} />

          //   const handleRelease = () => {
          //     releaseAnimal(animal.id)
          //         .then(() => {
          //             history.push("/animals")
          //         })
          // }
          //   return (
          //     <section className="animal" id={`animal--${animal.id}`} >
          //         <h3 className="animal__name">{animal.name}</h3>
          //         <div className="animal__breed">{animal.breed}</div>
          //         <div className="animal__location">Location: {animal.location.name}</div>
          //         <div className="animal__owner">Customer: {animal.customer.name}</div>
          //         <button onClick={handleRelease}>Release Animal</button>

          //         <button onClick={() => {
          //             history.push(`/animals/edit/${animal.id}`)
          //         }}>Edit</button>
          //     </section>
          // )

//           })
//         }
//       </div>
//     </>
//   )
// }

