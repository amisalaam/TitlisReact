import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Card';
import { useNavigate } from 'react-router-dom';


function BestValueTrip() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    }



    return (
        <div className='mx-auto max-w-screen-xl '>

            <div className='grid grid-cols-2 md:my-10 my-5 mx-3'>
                <div className=''>
                    <h2 className='md:text-3xl text-2xl item items-center'> Best Value Trips</h2>
                </div>
                <div className=''>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className='block md:hidden ml-auto text-lg text-titlisRed'
                    >
                        View all
                    </button>
                    <ul
                        className={`${isDropdownOpen ? 'block' : 'hidden'
                            } md:flex md:justify-end  list-none md:space-x-4  top-full left-0 w-full  p-4`}
                    >
                        <li className='mx-4 text-lg'>Asia</li>
                        <li className='mx-4 text-lg'>Middle East</li>
                        <li className='mx-4 text-lg'>Africa</li>
                        <li className='mx-4 text-lg'>Europe</li>
                        <li className='mx-4 md:block hidden text-lg text-titlisRed'>View All</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
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

export default BestValueTrip