import React, { useEffect, useState } from 'react'
import Card from '../Card';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

function ListPackages() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [packages, setPackages] = useState([])

    const navigate = useNavigate();

    const getPackages = async () => {
        try {
            const response = await axios.get(`${apiUrl}/packages/get/all/packages/`);
            setPackages(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getPackages()
    }, [])

    const handleCardClick = (pkg) => {
        navigate(`/all/packages/plans/${pkg.id}`, { state: { packageName: pkg.name } });
      };

    return (
        <div className='mx-auto max-w-screen-xl '>
            <div className=' h-[5rem] grid md:grid-cols-2 lg:my-10 '>
                <div className=' h-10'>
                    <h2 className='text-3xl item items-center'> View Packages</h2>
                </div>
            </div>
            <div  className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
                {packages.map((pkg, index) => (
                    <Card 
                        key={index}
                        image={`${apiUrl}${pkg.image}`}
                        name={pkg.name}
                        offerPercentage={pkg.offerPercentage}
                        onClick={() => handleCardClick(pkg)}    
                    />
                ))}
            </div>
        </div>
    )
}

export default ListPackages