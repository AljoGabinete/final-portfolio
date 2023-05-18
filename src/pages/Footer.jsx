import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
  return (
    <footer className='h-64 bg-dark-green'>
      <div className='mx-auto flex justify-center align-middle flex-col '>
        <div className='flex justify-center align-middle'>
          <SocialMediaIcons />
        </div>

        <div className='flex justify-center align-middle'>
          <p className='font-playfair  text-yellow'>Icons are from Flaticon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
