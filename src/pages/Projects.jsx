import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section id='projects' className='pt-20 pb-48'>
      {/* HEADINGS */}
      <motion.div
        className='md:w-2/5 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className='font-playfair font-semibold text-4xl text-green'>
            PROJECTS
          </p>
          <div className='flex justify-center mt-5 mb-10'>
            <LineGradient width='w-2/3' />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className='flex justify-between'>
        <motion.div
          className='sm:grid sm:grid-cols-2 gap-10'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className='relative'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              className='absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue'
            >
              <p className='text-2xl font-playfair'>Project 1</p>
              <p>
                This is the fist project that I made with the use of HTML and
                CSS.This is the first portfolio that I made wherein it is made
                to showcase what I have learned sofar using html and css
              </p>
              <div className='flex gap-1 mt-2'>
                <a
                  className='bg-deepblue  text-black border border-black  bg-green rounded-2xl py-1 px-1 font-semibold'
                  target='blank'
                  href='https://github.com/AljoGabinete/Portfolio'
                >
                  View Code
                </a>
                <a
                  className='bg-deepblue  text-black border  border-black  bg-green rounded-2xl  py-1 px-1  font-semibold'
                  target='blank'
                  href='https://agabinete-portfolio.netlify.app/'
                >
                  View Live Demo
                </a>
              </div>
            </div>
            <img src={`../assets/project1.png`} alt='title' className='h-30' />
          </motion.div>

          <motion.div
            className='relative'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              className='absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue'
            >
              <p className='text-2xl font-playfair'>Project 2</p>
              <p>
                This is my second project, this is something I made with
                javascript. A simple 2048 game clone that you can play using the
                arrow keys of your keyboard.
              </p>
              <div className='flex gap-1 mt-2'>
                <a
                  className='bg-deepblue  text-black border border-black  bg-green rounded-2xl py-1 px-1 font-semibold'
                  target='blank'
                  href='https://github.com/AljoGabinete/Doubles'
                >
                  View Code
                </a>
                <a
                  className='bg-deepblue  text-black border  border-black  bg-green rounded-2xl  py-1 px-1  font-semibold'
                  target='blank'
                  href='https://agabinete-js-game.netlify.app/'
                >
                  View Live Demo
                </a>
              </div>
            </div>
            <img src={`../assets/project2.png`} alt='title' />
          </motion.div>

          <motion.div
            className='relative'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              className='absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue'
            >
              <p className='text-2xl font-playfair'>Project 3</p>
              <p>
                This is the 3rd project that I made, this was made using React,
                this is a planner/dashboard wherein you can input your upcoming
                tasks/events as well as check the weather for the day
              </p>
              <div className='flex gap-1 mt-2'>
                <a
                  className='bg-deepblue  text-black border border-black  bg-green rounded-2xl py-1 px-1 font-semibold'
                  target='blank'
                  href='https://github.com/AljoGabinete/planIt'
                >
                  View Code
                </a>
                <a
                  className='bg-deepblue  text-black border  border-black  bg-green rounded-2xl  py-1 px-1  font-semibold'
                  target='blank'
                  href='https://agabinete-react-app.netlify.app/'
                >
                  View Live Demo
                </a>
              </div>
            </div>
            <img src={`../assets/project3.png`} alt='title' />
          </motion.div>

          <motion.div
            className='relative'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              className='absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue'
            >
              <p className='text-2xl font-playfair'>Project 4</p>
              <p>
                This is my fourth project and this was done as a team, we
                created a scholarship management dashboard wherein the
                admin/staff can create/manage the accounts of their upcoming
                scholars and monitor their progress. This app also has a
                dashboard wherein you would be able to visualize the data of all
                the scholars.
              </p>
              <div className='flex gap-1 mt-2'>
                <a
                  className='bg-deepblue  text-black border border-black  bg-green rounded-2xl py-1 px-1 font-semibold'
                  target='blank'
                  href='https://github.com/team-project-aljo-niel/Aboitiz-Scholars-Central'
                >
                  View Code
                </a>
                <a
                  className='bg-deepblue  text-black border  border-black  bg-green rounded-2xl  py-1 px-1  font-semibold'
                  target='blank'
                  href='https://aboitiz-scholars-central.onrender.com/'
                >
                  View Live Demo
                </a>
              </div>
            </div>
            <img src={`../assets/project4.png`} alt='title' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
