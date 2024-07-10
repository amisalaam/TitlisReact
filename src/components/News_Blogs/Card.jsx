import React, { useEffect, useState } from 'react';
import axios from 'axios';

function formatDate(dateString) {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const date = new Date(dateString);
  const day = date.toLocaleDateString('en-US', { day: '2-digit' });
  const monthYear = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  return { day, monthYear };
}

function Card() {
  const [posts, setPosts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/feeds/get/all/posts/`);
      setPosts(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {posts.map((post) => {
          const { day, monthYear } = formatDate(post.created_at);
          return (
            <div key={post.id} className='shadow-lg mt-8 md:mt-16 mx-4 md:mx-8 lg:mx-16 xl:mx-16 rounded-3xl'  >
              <div
                className='bg-red-500 h-[20rem] rounded-t-xl relative'
                style={{
                  backgroundImage: `url(${apiUrl}${post.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className='absolute top-4 left-4 bg-white bg-opacity-60 text-opacity-70 px-2 py-1 rounded-lg'>
                  <p className='text-lg font-semibold text-center'>{day} {monthYear}</p>
                </div>
              </div>
              <div className='p-4'>
                <p className='text-xl font-semibold'>{post.title}</p>
                <p className='text-gray-600'>{post.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default Card;
