import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Addcourse = () => {

const [data,changedata]=useState(
    {
         "tit":"",
         "dis":"",
         "date":"",
         "dur":"",
         "ven":"",
         "tra":"",
    }
)

const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    axios.post("http://localhost:8081/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="Success") {

                alert("add successfully")
                
            } else {
                alert("error")
                
            }
        }
    )
    console.log(data)
}

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Course title</label>
<input type="text" className="form-control" name='tit' value={data.tit} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Course description</label>
    <textarea name="dis" id="" className="form-control"  value={data.dis} onChange={inputHandler}></textarea>


    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Date</label>
<input type="date" name="date" id="" className="form-control"  value={data.date} onChange={inputHandler}/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


    <label htmlFor="" className="form-label">Duration</label>
    <input type="text" className="form-control" name='dur' value={data.dur} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


    <label htmlFor="" className="form-label">Venue</label>
    <input type="text" className="form-control" name='ven' value={data.ven} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


    <label htmlFor="" className="form-label">Trainee name</label>
    <input type="text" className="form-control" name='tra' value={data.tra} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<button className="btn btn-success" onClick={readValue}>Submit</button>

    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Addcourse