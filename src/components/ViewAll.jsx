import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const[data,setData] = new useState([])
    const getdata = ()=>{
        axios.get("http://localhost:3004/api/job/viewall").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{getdata()},[])

    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Job Name</th>
                                    <th scope="col">Job ID</th>
                                    <th scope="col">Job Role</th>
                                    <th scope="col">Job Salary</th>
                                    <th scope="col">Job Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{value.jobname}</th>
                                            <td>{value.jobid}</td>
                                            <td>{value.jobrole}</td>
                                            <td>{value.jobsalary}</td>
                                            <td>@{value.jobduration}</td>
                                        </tr>
                                        }
                                    )
                                }
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll