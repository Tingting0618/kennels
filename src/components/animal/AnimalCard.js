import React from "react"
import "./Animal.css"

export const AnimalCard = () => (
    <section className="animal">
        <h3 className="animal__name">Doodles</h3>
        <div className="animal__breed">Breed: Poodle</div>
    </section>
)

// import React from "react"
// import "./Animal.css"


// export const AnimalCard = ({ animal }) => (
//     <section className="animal">
//         <h3 className="animal__name">{animal.name}</h3>
//         <address className="location__address">{animal.location.name}</address>
//     </section>
// )
