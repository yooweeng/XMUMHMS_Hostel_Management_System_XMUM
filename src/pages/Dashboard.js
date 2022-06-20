import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
      <h1>Dashboard</h1>
      <div className="card mt-5">
        <h5 className="card-header">Profile</h5>
        <table className="table">
          <tbody>
            <tr className='table-primary'>
                <td>Status: </td>
                <td>Active</td>
              </tr>
            <tr>
              <td>Nationality: </td>
              <td>Malaysian</td>
            </tr>
            <tr className='table-primary'>
              <td>Student Name: </td>
              <td>Ng Yoo Wee</td>
            </tr>
            <tr>
              <td>Student ID: </td>
              <td>SWE1904867</td>
            </tr>
            <tr className='table-primary'>
              <td>NRIC/Passport Number: </td>
              <td>012345-01-1234</td>
            </tr>
            <tr>
              <td>Programme: </td>
              <td>Bachelor in Software Engineering</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card mt-4">
        <h5 className="card-header">Room</h5>
        <table className="table">
          <tbody>
            <tr className='table-primary'>
              <td>Room Status: </td>
              <td>In Stay</td>
            </tr>
            <tr>
              <td>Room Number (if any): </td>
              <td>D2-D505</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Dashboard
