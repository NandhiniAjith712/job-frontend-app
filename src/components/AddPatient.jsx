import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddPatient = () => {
    const [input,setInput] = new useState({
        "jobname":"",
        "jobid":"",
        "jobrole":"",
        "jobsalary":"",
        "jobduration":""
    })
        const inputHandler = (event)=>{
            setInput({...input,[event.target.name]:event.target.value})
        }

        const readvalues = ()=>{
            console.log(input)
            axios.post("http://localhost:3004/api/job/job_entry",input).then(
                (response)=>{
                    console.log(response.data)
                }
            )
        }
    return (
    <div> 
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Job name</label>
                        <input type="text" className="form-control" name='jobname' value={input.jobname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Job ID</label>
                        <input type="text" className="form-control" name='jobid' value={input.jobid} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Job Role</label>
                        <input type="text" className="form-control" name='jobrole' value={input.jobrole} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Job Salary</label>
                        <input type="text" className="form-control" name='jobsalary' value={input.jobsalary} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Job Duration</label>
                        <input type="text" className="form-control" name='jobduration' value={input.jobduration} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readvalues}>Register</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddPatient