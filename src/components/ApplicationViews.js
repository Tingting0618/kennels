import React from "react"
import { Route } from "react-router-dom"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationForm } from "./location/LocationForm"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalSearch } from "./animal/AnimalSearch"


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

                            <Route path="/locations/detail/:locationId(\d+)">
                                <LocationDetail />
                            </Route>
                            {/* Render the animal list when http://localhost:3000/animals */}

                            <Route exact path="/animals">
                                <AnimalSearch />
                                <AnimalList />
                            </Route>

                            <Route exact path="/animals/create">
                                <AnimalForm />
                            </Route>

                            <Route path="/animals/detail/:animalId(\d+)">
                                <AnimalDetail />
                            </Route>

                            <Route path="/animals/edit/:animalId(\d+)">
                                <AnimalForm />
                            </Route>

                            {/* Render the animal list when http://localhost:3000/customers */}

                            <Route path="/customers">
                                <CustomerList />
                            </Route>

                            {/* Render the animal list when http://localhost:3000/employees */}

                            <Route exact path="/employees">
                                <EmployeeList />
                            </Route>

                            <Route exact path="/employees/create">
                                <EmployeeForm />
                            </Route>

                            <Route path="/employees/detail/:employeeId(\d+)">
                                <EmployeeDetail />
                            </Route>


                        </EmployeeProvider>
                    </AnimalProvider>
                </CustomerProvider>
            </LocationProvider>
        </>
    )
}
