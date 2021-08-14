import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams } from "react-router-dom"

export const EmployeeDetail = () => {
    const { employees } = useContext(EmployeeContext)
    const [ employee, setEmployee ] = useState({location: {} })

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { employeeId } = useParams();

    useEffect(() => {
        const thisEmployee = employees.find(a => a.id === parseInt(employeeId)) || { location: {} }

        setEmployee(thisEmployee)
    }, [employeeId])

    return (
    <section className="employee">
        <h3 className="employee__name">{ employee.name }</h3>
        <div className="employee__location_name">Location: { employee.location.name }</div>
    </section>
    )
}
          // <div className="employee" id={`employee--${employee.id}`}>
          //   <div className="employee__name">
          //     Name: { employee.name }
          //   </div>
          //   <div className="employee__location_name">
          //     Address: { employee.location.name }
          //   </div>
          // </div>