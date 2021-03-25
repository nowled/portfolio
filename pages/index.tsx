// import { GetStaticPropsContext } from 'next';
import { motion } from 'framer-motion';
import React from 'react';
import { fadeIn, routeAnimation, stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

const index = () => {
  return (
    <motion.div
      className='flex flex-col flex-grow px-6 pt-1'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <h5 className='my-3 font-medium'>
        Well-qualified Full Stack Developer familiar with wide range of
        programming utilities and languages. Knowledgeable of backend and
        frontend development requirements.
      </h5>
      <div
        className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className='my-3 text-xl font-bold tracking-wide'>What I offer</h4>
        <motion.div
          className='grid gap-6 lg:grid-cols-2'
          variants={stagger}
          initial='initial'
          animate='animate'
        >
          {services.map((service) => (
            <motion.div
              variants={fadeIn}
              className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1'
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
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
