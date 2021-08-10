import React from "react"
import { Route } from "react-router-dom"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationForm } from "./location/LocationForm"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <LocationProvider>
            <CustomerProvider>
            <AnimalProvider>
            <EmployeeProvider>

                <Route exact path="/">
                    <LocationList />
                </Route>

            {/* Render the location list when http://localhost:3000/locations */}

                <Route exact path="/locations">
                    <LocationList />
                </Route>

                
                <Route exact path="/locations/create">
                    <LocationForm />
                </Route>

            {/* Render the animal list when http://localhost:3000/animals */}

                <Route path="/animals">
                    <AnimalList />
                </Route>

                <Route exact path="/animals/create">
                    <AnimalForm />
                </Route>

            

            {/* Render the animal list when http://localhost:3000/customers */}

                <Route path="/customers">
                    <CustomerList />
                </Route>

            {/* Render the animal list when http://localhost:3000/employees */}
            
                <Route path="/employees">
                    <EmployeeList />
                </Route>

                <Route exact path="/employees/create">
                    <EmployeeForm />
                </Route>


            </EmployeeProvider>
            </AnimalProvider>
            </CustomerProvider>
            </LocationProvider>
        </>
    )
}
