import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {

const [data,changedata]=useState(
    [
       
    ]
)

const fetchdata=()=>{
    axios.get("http://localhost:8081/view").then(
        (response)=>{
            changedata(response.data)
        }
    )
}

useEffect(()=>{fetchdata()},[])

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Discription</th>
      <th scope="col">Date</th>
      <th scope="col">Duration</th>
      <th scope="col">Venue</th>
      <th scope="col">Trainer Name</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
   {data.map((value,index)=>{
    return  <tr>
    <th scope="row">{value.tit}</th>
    <td>{value.dis}</td>
    <td>{value.date}</td>
    <td>{value.dur}</td>
    <td>{value.ven}</td>
    <td>{value.tra}</td>
  </tr> })}
   
  </tbody>
</table>

        </div>
    </div>
</div>


    </div>
  )
}

export default View