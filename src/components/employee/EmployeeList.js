import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useHistory, Link } from 'react-router-dom'

export const EmployeeList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()
  }, [])
  const history = useHistory()

  return (
    <>
      <h2>Employees</h2>
      <button onClick={
        () => history.push("/employees/create")
      }>
        Add Employee
      </button>
      <div className="employees">
        {
          employees.map(employee => {
            return (
              <div className="employee">
                <Link to={`/employees/detail/${employee.id}` } key={employee.id}>{employee.name}</Link>
              </div>

            )
          })
        }
      </div>
    </>
  )
}
{/* <Link to={`/employees/detail/${employee.id}`} key={employee.id}>{employee.name}</Link> */}

          // <div className="employee" id={`employee--${employee.id}`}>
          //   <div className="employee__name">
          //     Name: { employee.name }
          //   </div>
          //   <div className="employee__location_name">
          //     Address: { employee.location.name }
          //   </div>
          // </div>