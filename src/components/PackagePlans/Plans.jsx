import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../Card';

function Plans() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { packageId } = useParams(); // Get packageId from the URL
  const location = useLocation();
  const packageName = location.state.packageName; // Access packageName from location state
  const [plans, setPlans] = useState([]);

  const getPlans = async (packageId) => {
    try {
      const response = await axios.get(`${apiUrl}/packages/get/package/plans/`, {
        params: {
          package_id: packageId,
        },
      });

      setPlans(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (packageId) {
      getPlans(packageId);
    }
  }, [packageId]);

  return (
    <div className='mx-auto max-w-screen-xl '>
      <div className='h-[5rem] grid md:grid-cols-2 lg:my-10 '>
        <div className='h-10'>
          <h2 className='text-3xl item items-center'> View {packageName} Plans</h2>
          {/* Use packageName here */}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        {plans.map((pkg, index) => (
          <Card
            key={index}
            image={`${apiUrl}${pkg.image}`}
            name={pkg.name}
            offerPercentage={pkg.offerPercentage}
          />
        ))}
      </div>
    </div>
  );
}

export default Plans;
