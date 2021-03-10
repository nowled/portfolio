import { useState, useEffect, FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  route: string;
  name: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)} className='hover:text-green'>
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActiveItem('About');
    if (pathname === '/projects') setActiveItem('Projects');
    if (pathname === '/resume') setActiveItem('Resume');
  }, []);

  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className='text-2xl font-bold border-b-4 text-green border-green md:'>
        {activeItem}
      </span>
      <div className='flex space-x-5 text-lg'>
        <NavItem
          setActiveItem={setActiveItem}
          activeItem={activeItem}
          name='About'
          route='/'
        />
        <NavItem
          setActiveItem={setActiveItem}
          activeItem={activeItem}
          name='Projects'
          route='/projects'
        />
        <NavItem
          setActiveItem={setActiveItem}
          activeItem={activeItem}
          name='Resume'
          route='/resume'
        />
      </div>
    </div>
  );
};

export default Navbar;
