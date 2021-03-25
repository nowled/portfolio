import React, { FunctionComponent } from 'react';
import { ISkill } from '../type';
import { motion } from 'framer-motion';

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        duration: 0.2,
        type: 'spring',
        damping: 4,
        stiffness: 100,
      },
    },
  };

  return (
    <div className='my-2 text-white bg-gray-300 rounded-full dark:bg-dark-500 dark:bg-black-300'>
      <motion.div
        className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600'
        style={{ width: level }}
        variants={variants}
        initial='initial'
        animate='animate'
      >
        <Icon className='mr-3' />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
