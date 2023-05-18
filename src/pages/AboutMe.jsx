import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const TechStack = () => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)');
  return (
    <section
      id='about me'
      className='pt-5 pb-24 flex justify-between align-middle'
    >
      {/* HEADER AND IMAGE SECTION */}
      <div className='md:flex md:justify-between md:gap-16 mt-16'>
        <motion.div
          className='md:w-1/2 mt-8'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='font-playfair font-semibold text-4xl mb-5'>
            <span className='text-green'>About Me</span>
          </p>
          <LineGradient width='w-1/3' />
          {/* Tech Stack Box */}
          <div className='mt-5 mb-16'>
            <p className='mb-3 font-opensans'>
              I am <strong>Aljomarie Gabinete</strong>, a chemical engineer who
              has a passion in coding and wants to pursue a career in tech.
            </p>
            <p className='mb-3 font-opensans'>
              Eversice I was I kid I was always curious about how things worked,
              I remember the first time I got introduced to a computer back
              then. I had spent hundreds of hours to learn how to use it and the
              functions that go with it. To this day, I am still surprised on
              what we can do with the computers specially in web development. So
              much so that I want to pursue a career in tech so that I can
              contribute to solving different problems as well as continouosly
              learning the development of tech.
            </p>
            <p className='mb-3 font-opensans'>
              I am currently in the process of learning web development and here
              I will display some details about me and the projects that I have
              made in my journey towards learning web development
            </p>
          </div>
        </motion.div>

        <motion.div
          className=' md:w-1/2  p-6 w-60'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='font-playfair font-semibold text-4xl mb-5'>
            <span className='text-green'>Tech Stack</span>
          </p>
          <LineGradient width='w-1/3' />
          {/* Tech Stack Box */}
          <div className='flex gap-10 flex-col'>
            <div className='mt-5 flex gap-2 justify-between align-middle'>
              <a
                className='hover:opacity-50 transition duration-500 flex justify-center align-middle flex-col text-center w-20 h-20'
                href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
                target='_blank'
                rel='noreferrer'
              >
                HTML
                <img
                  className='w-20 h-20'
                  alt='linkedin-link'
                  src='../assets/html-5.png'
                />
              </a>

              <a
                className='hover:opacity-50 transition duration-500 flex justify-center align-middle flex-col text-center w-20 h-20'
                href='https://developer.mozilla.org/en-US/docs/Web/CSS'
                target='_blank'
                rel='noreferrer'
              >
                CSS
                <img
                  className='w-20 h-20'
                  alt='linkedin-link'
                  src='../assets/css-3.png'
                />
              </a>

              <a
                className='hover:opacity-50 transition duration-500 flex justify-center align-middle flex-col text-center w-20 h-20'
                href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                target='_blank'
                rel='noreferrer'
              >
                Javascript
                <img
                  className='w-20 h-20'
                  alt='linkedin-link'
                  src='../assets/java-script.png'
                />
              </a>
            </div>

            <div className='mt-5 flex gap-2 justify-between align-middle'>
              <a
                className='hover:opacity-50 transition duration-500 flex justify-center align-middle flex-col text-center w-20 h-20'
                href='https://react.dev/'
                target='_blank'
                rel='noreferrer'
              >
                React
                <img
                  className='w-20 h-20'
                  alt='linkedin-link'
                  src='../assets/react.png'
                />
              </a>

              <a
                className='hover:opacity-50 transition duration-500 flex justify-center align-middle flex-col text-center w-20 h-20'
                href='https://www.mongodb.com/'
                target='_blank'
                rel='noreferrer'
              >
                mongoDB
                <img
                  className='w-20 h-20'
                  alt='linkedin-link'
                  src='../assets/mongodb.png'
                />
              </a>

              <a
                className='hover:opacity-50 transition duration-500 flex justify-center align-middle flex-col text-center w-20 h-20'
                href='https://expressjs.com/'
                target='_blank'
                rel='noreferrer'
              >
                ExpressJS
                <img
                  className='w-20 h-20 border rounded-full bg-grey '
                  alt='linkedin-link'
                  src='../assets/express.png'
                />
              </a>
            </div>
            <div className='mt-5 flex gap-2 justify-between align-middle'>
              <a
                className='hover:opacity-50 transition duration-500 flex justify-center align-middle flex-col text-center w-20 h-20'
                href='https://nodejs.org/en'
                target='_blank'
                rel='noreferrer'
              >
                NodeJS
                <img
                  className='w-20 h-20'
                  alt='linkedin-link'
                  src='../assets/nodejs.png'
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
