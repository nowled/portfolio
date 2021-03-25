import React from 'react';
import Bar from '../components/Bar';
import { languages, tools } from '../data';
import { motion } from 'framer-motion';
import { fadeIn, routeAnimation } from '../animations';

const Resume = () => {
  return (
    <motion.div
      className='px-6 py-2'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fadeIn} initial='initial' animate='animate'>
          <h4 className='my-3 text-2xl font-bold'>Education</h4>
          <div>
            <p className='my-2 font-medium'>Computer Science degree</p>
            <p className='my-2 font-medium'>
              Temple University Japan/ Java course
            </p>
            <p className='my-2 font-medium'>Bloc.io BootCamp</p>
          </div>
        </motion.div>
        <motion.div variants={fadeIn} initial='initial' animate='animate'>
          <h4 className='my-3 text-2xl font-bold'>Experience</h4>
          <div>
            <p className='my-2 font-medium'>Computer Science degree</p>
            <p className='my-2 font-medium'>
              Temple University Japan/ Java course
            </p>
            <p className='my-2 font-medium'>Bloc.io BootCamp</p>
          </div>
        </motion.div>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
          <div className='my-2'>
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Software</h5>
          <div className='my-2'>
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
