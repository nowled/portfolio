// import { GetStaticPropsContext } from 'next';
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

const index = () => {
  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
      <h5 className='my-3 font-medium'>
        I have been involved in everything computer related. I am a Web
        developer / Software Engineer . In the past 3 years I have worked with
        React, Typescript, Javascript, Node.js, Next.js Gatsby and Express.
      </h5>
      <div
        className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className='my-3 text-xl font-bold tracking-wide'>What I offer</h4>
        <div className='grid gap-6 lg:grid-cols-2'>
          {services.map((service) => (
            <div
              className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1'
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

// export const getServerSideProps = async (context: GetServerSideProps) => {
//   const res = await fetch('http://localhost:3000/api/services');

//   const data = await res.json();
//   console.log('Server', services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch('http://localhost:3000/api/services');

//   const data = await res.json();
//   console.log('Server', services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
