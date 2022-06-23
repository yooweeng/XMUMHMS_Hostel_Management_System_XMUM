import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function HostelRequestRecord() {

  const [applicationRequestList, setApplicationRequestList] = useState();

  useEffect(() => {
      fetch('http://localhost:8080/api/v1/applicationrequest')
              .then(res => res.json())
              .then(data => {setApplicationRequestList(data)})
  }, [])

  return (
    <>
        <nav className='ms-4'>
            <ol className="breadcrumb font-breadcrumb">
            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
            <li className="breadcrumb-item active">Hostel Request Record/Log</li>
            </ol>
        </nav>
        <div className='container ms-3'>
          <h1>Hostel Request Record / Log</h1>
          <table className="table table-striped mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Request type</th>
                <th scope="col">Block</th>
                <th scope="col">Student id</th>
                <th scope="col">Remarks</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {applicationRequestList && applicationRequestList.map((item, index) => {
                let block;
                if(item.selectedBlockD){
                  block = 'Block D';
                }
                else{
                  block = 'Block LY';
                }
                return(
                  <tr key={item.applicationId}>
                    <th scope ='row'>{index +1}</th>
                    <td>{item.category}</td>
                    <td>{block}</td>
                    <td>{item.studentId}</td>
                    <td>{item.remarks}</td>
                    <td>{item.status}</td>
                    <td>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modalTarget${item.applicationId}`}>
                        View Details
                      </button>
                      <div className="modal fade" id={`modalTarget${item.applicationId}`}>
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Application</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                              <h5>Request Summary</h5>
                              Category: {item.category} <br/>
                              Student status: Existing Student <br/>
                              <h5 className='mt-3'>Personal Details</h5>
                              Student id: {item.studentId} <br/>
                              Fullname: {item.fullname} <br/>
                              Nickname: {item.nickname} <br/>
                              Nric/Passport: {item.nricPassport} <br/>
                              Gender: {item.gender} <br/>
                              Date of birth: {item.dob} <br/>
                              Nationality: {item.nationality} <br/>
                              Programme: {item.programme} <br/>
                              Enrollment Date: {item.enrollmentDate} <br/>
                              Email: {item.email} <br/>
                              Phone number: {item.phoneNo} <br/>
                              Address: {item.address} <br/>
                              <h5 className='mt-3'>Parent/Guardian/Next of Kin To Contact In Case of Emergency</h5>
                              Parent Name 01: {item.parentName1} <br/>
                              Relationship: {item.relationship1} <br/>
                              Mobile Number: {item.parentMobile1} <br/>
                              Parent Name 02: {item.parentName2} <br/>
                              Relationship: {item.relationship2} <br/>
                              Mobile Number: {item.parentMobile2} <br/>
                              <h5 className='mt-3'>Others</h5>
                              Name of Roomate (if applicable): {item.roommateName} <br/>
                              Roomate Mobile Number: {item.roommatePhoneNo} <br/>
                              Remark(s): {item.remarks}
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Back</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
    </>
  )
}

export default HostelRequestRecord
