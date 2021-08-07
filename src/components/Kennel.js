import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"
import "./animal/Animal.css"
import "./employee/Employee.css"
import "./location/Location.css"
import "./customer/Customer.css"


export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
    // <>
    //     <h2>Nashville Kennels</h2>
    //     <small>Loving care when you're not there.</small>

    //     <address>
    //         <div>Visit Us at the Nashville North Location</div>
    //         <div>500 Puppy Way</div>
    //     </address>

    //     <h2>Animals</h2>
    //     <article className="animals">
    //         <AnimalProvider>
    //             <AnimalList />
    //         </AnimalProvider>

    //     </article>

    //     <h2>Employees</h2>
    //     <article className="employees">
    //         <EmployeeProvider>
    //             <EmployeeList />
    //         </EmployeeProvider>
    //     </article>

    //     <h2>Locations</h2>
    //     <article className="locations">
    //         <LocationProvider>
    //             <LocationList />
    //         </LocationProvider>
    //     </article>

    //     <h2>Customers</h2>
    //     <article className="customers">
    //         <CustomerProvider>
    //             <CustomerList />
    //         </CustomerProvider>
    //     </article>
    // </>
)
