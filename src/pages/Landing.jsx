import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)');
  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center gap-16 md:h-full py-10'
    >
      {/* Image Section */}
      <div className='basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2'>
        {isAboveLarge ? (
          <div>
            <img
              alt='profile'
              className='hover:filter hover:saturate-200 transition duration-500 z-10 w-80 rounded-full'
              src='./assets/aj.jpg'
            />
          </div>
        ) : (
          <img
            alt='profile'
            className='z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full'
            src='./assets/aj.jpg'
          />
        )}
      </div>

      <div className='z-30 basis-2/5 mt-12 md:mt-32'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='text-3xl font-playfair z-10 text-center md:text-start'>
            Hi!
          </p>
          <p className='text-4xl font-playfair z-10 text-center md:text-start font-semibold'>
            <span className='text-2xl font-playfair z-10 text-center md:text-start'>
              {' '}
              I'm
            </span>{' '}
            Aljomarie Gabinete
          </p>

          <p className='mt-10 mb-7 text-sm text-center md:text-start'>
            I'm Passionate about learning and Dedicated on providing solutions
            to your problems
          </p>
        </motion.div>

        {/* Contact Me and Resume */}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className='bg-gradient-rainblue text-deep-blue rounded-2xl py-3 px-7 font-semibold
              hover:bg-blue hover:text-red transition duration-400 mr-3'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            Contact Me
          </AnchorLink>
          <a
            className='bg-deepblue  text-white border border-green rounded-2xl py-3 px-7 font-semibold
           hover:bg-gradient-rainblue hover:text-black transition duration-400'
            target='blank'
            href='https://drive.google.com/file/d/1p5CQ93Nefg8oSYINt1-so6KIxTtZgByH/view'
          >
            View my Resume
          </a>
        </motion.div>

        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
