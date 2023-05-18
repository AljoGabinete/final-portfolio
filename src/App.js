import Navbar from './pages/Navbar';
import Landing from './pages/Landing';

import LineGradient from './components/LineGradient';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import AboutMe from './pages/AboutMe';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app bg-deep-blue'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className='w-5/6 mx-auto md:h-full'>
        <motion.div
          margin='0 0 -200px 0'
          amount='all'
          onViewportEnter={() => setSelectedPage('home')}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full '>
        <motion.div
          margin='0 0 -200px 0'
          amount='all'
          onViewportEnter={() => setSelectedPage('aboutme')}
        >
          <AboutMe />
        </motion.div>
      </div>
      <LineGradient />

      <LineGradient />
      <div className='w-5/6 mx-auto'>
        <motion.div
          margin='0 0 -200px 0'
          amount='all'
          onViewportEnter={() => setSelectedPage('projects')}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />

      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
        <motion.div
          margin='0 0 -200px 0'
          amount='all'
          onViewportEnter={() => setSelectedPage('contact')}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
