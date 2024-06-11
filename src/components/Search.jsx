import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {

    const [data,changedata]=useState(
        {
            "tit":""
        }
    )

    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value})
    }
const readValue=()=>{

    axios.post("",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="Success") {
                alert("Successfully Added")
                
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
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <label htmlFor="" className="form-label">Course title</label>
        <input type="text" className="form-control" name='tit' value={data.tit} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <button className="btn btn-success" onClick={readValue}></button>


        </div>
    </div>
</div>

    </div>
  )
}

export default Search