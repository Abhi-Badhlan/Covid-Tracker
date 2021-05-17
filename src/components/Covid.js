
import React, { useEffect, useState } from 'react'
import '../components/covid.css'

const Covid=()=>{

const [data,setData]= useState([])
const getCovidData= async()=>{
    const res= await fetch("https://api.covid19india.org/data.json");
    const actualData=await  res.json();
    console.log(actualData.statewise)
    setData(actualData.statewise)

    
}

    useEffect(
        ()=>{
            getCovidData();
          },[])
    return(
        <>
        <div className='container-fluid mt-5' >
            <div className='main-heading'>
                <h1 className='mb-5'><span className='font-weight-bold'>INDIA</span>COVID-19 DATA STATEWISE </h1>

            </div>
            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>recovered</th>
                            <th>deaths</th>
                            <th>active</th>
                            <th>updated</th>
                        </tr>

                    </thead>

                <tbody>
                   {
                       data.map((elem,index)=>{
                           return(
                               <tr key={index}>
                                   <td>{elem.state}</td>
                                   <td>{elem.confirmed}</td>
                                   <td>{elem.recovered}</td>
                                   <td>{elem.deaths}</td>
                                   <td>{elem.active}</td>
                                   <td>{elem.lastupdatedtime}</td>

                               </tr>
                           )

                       })
                   }
                </tbody>

                </table>

            </div>

        </div>
        </>
    )
}
export default Covid;