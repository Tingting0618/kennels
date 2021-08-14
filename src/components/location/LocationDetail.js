import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider" 
import "./Location.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)
    const [ location, setLocation ] = useState({ })

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { locationId } = useParams();

    useEffect(() => {
        const thisLocation = locations.find(a => a.id === parseInt(locationId)) || {  }

        setLocation(thisLocation)
    }, [locationId])

    return (
    <section className="location">
        <h3 className="location__name">{ location.name }</h3>
        <div className="location__location_name">Address: { location.address}</div>
    </section>
    )
}
          // <div className="location" id={`location--${location.id}`}>
          //   <div className="location__name">
          //     Name: { location.name }
          //   </div>
          //   <div className="location__location_name">
          //     Address: { location.location.name }
          //   </div>
          // </div>