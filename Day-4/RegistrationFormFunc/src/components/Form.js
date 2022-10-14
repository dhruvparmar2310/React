import React, { useState } from 'react'

function Form () {
  const [userRegistration, setUserRegistration] = useState({
    fname: '',
    lname: '',
    dob: '',
    age: '',
    occupation: '',
    company: '',
    email: '',
    contact: ''
  })

  const [records, setRecords] = useState([])
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUserRegistration({ ...userRegistration, [name]: value })
  }
  const handleSubmitButton = (e) => {
    const newRecord = { ...userRegistration }
    setRecords([...records, newRecord])
    setUserRegistration({
      fname: '',
      lname: '',
      dob: '',
      age: '',
      occupation: '',
      company: '',
      email: '',
      contact: ''
    })
    // console.log('name', userRegistration.fname)
    e.preventDefault()
  }
  return (
    <>
        <div className='form container shadow-lg'>
            <h2>Registration Form</h2><span className='underline'><span className='underline-2'></span></span>

            <form className='mt-5' onSubmit={(e) => handleSubmitButton(e)}>
                <table className='table table-borderless' cellPadding={8} cellSpacing={8}>
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <div className="row p-0">
                                <div className="col">
                                    <input type="text" name="fname" id='fname' className="form-control form-control-sm" placeholder="First name" onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="col">
                                    <input type="text" name="lname" id='lname' className="form-control form-control-sm" placeholder="Last name" onChange={(e) => handleChange(e)} />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Date of Birth</td>
                        <td>
                            <input type='date' name="dob" id='dob' className='form-control form-control-sm' onChange={(e) => handleChange(e)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>
                            <input type='number' name='age' id='age' className='form-control form-control-sm' placeholder='your age' onChange={(e) => handleChange(e)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Occupation</td>
                        <td>
                            <input type='text' name='occupation' id='occupation' className='form-control form-control-sm' placeholder='your occupation' onChange={(e) => handleChange(e)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Company</td>
                        <td>
                            <input type='text' name='company' id='company' className='form-control form-control-sm' placeholder='your company name' onChange={(e) => handleChange(e)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Email ID</td>
                        <td>
                            <input type='email' name='email' id='email' className='form-control form-control-sm' placeholder='eg: example@gmail.com' onChange={(e) => handleChange(e)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Contact No.</td>
                        <td>
                            <input type='number' name='contact' id='contact' className='form-control form-control-sm' placeholder='eg: 9999888777' onChange={(e) => handleChange(e)} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button type='submit'>Save</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>

        <div className='details container shadow-lg mt-5 rounded-3'>
            <h4>Form Details</h4><span className='underline'><span className='underline-2'></span></span>
                    <table className='table mt-5' >
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Age</th>
                            <th>Occupation</th>
                            <th>Company</th>
                            <th>Email ID</th>
                            <th>Contact No.</th>
                        </tr>
                        </thead>
                {records.map((curElem) => {
                  return (
                        <>
                        <tbody key={curElem.id}>
                        <tr>
                            <td>{curElem.fname} {curElem.lname}</td>
                            <td>{curElem.dob}</td>
                            <td>{curElem.age}</td>
                            <td>{curElem.occupation}</td>
                            <td>{curElem.company}</td>
                            <td>{curElem.email}</td>
                            <td>{curElem.contact}</td>
                        </tr>
                        </tbody>
                    </>
                  )
                })}
                </table>
        </div>
    </>
  )
}

export default Form
