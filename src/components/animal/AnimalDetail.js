import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Animal.css"

export const AnimalDetail = () => {
    const { animals, releaseAnimal } = useContext(AnimalContext)
    const [animal, setAnimal] = useState({ location: {}, customer: {} })
    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { animalId } = useParams();

    useEffect(() => {
        const thisAnimal = animals.find(a => a.id === parseInt(animalId)) || { location: {}, customer: {} }
        setAnimal(thisAnimal)
    }, [animalId])

    // Update this line of code to include releaseAnimal
    const history = useHistory()
    const handleRelease = () => {
        releaseAnimal(animal.id)
            .then(() => {
                history.push("/animals")
            })
    }

    return (
        <section className="animal" id={`animal--${animal.id}`} >
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            <div className="animal__location">Location: {animal.location.name}</div>
            <div className="animal__owner">Customer: {animal.customer.name}</div>
            <button onClick={handleRelease}>Release Animal</button>

            <button onClick={() => {
                history.push(`/animals/edit/${animal.id}`)
            }}>Edit</button>
        </section>
    )
}


