import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EmployeeContext = createContext()

// This component establishes what data can be used.
export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("https://kennels-api.herokuapp.com/employees?_expand=location&_sort=location.id")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployee = employeeObj => {
        return fetch("https://kennels-api.herokuapp.com/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }

    const deleteEmployee = employeeId => {
        return fetch(`https://kennels-api.herokuapp.com/employees/${employeeId}`, {
            method: "DELETE"
        })
            .then(getEmployees)
    }
    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployee,deleteEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}
