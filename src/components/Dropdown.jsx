import React, { useEffect, useState } from 'react'
import ddata from './final_api_response.json'
function Dropdown() {
    const [data,setData] = useState([])


    useEffect (() =>{
        setData(ddata)
    },[])

    
  return (
    <div>
        <select>
            <option value="select a country">select</option>
            {data.map((country,index)=>(
                <option value={country.name}>
                    {country.name}

                </option>
            

            ))}
        </select>
    </div>
  )
}

export default Dropdown