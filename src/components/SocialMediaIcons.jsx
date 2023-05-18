const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/AljomarieGabinete/'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='linkedin-link' src='../assets/linkedin.png' />
      </a>

      <a
        className='hover:opacity-50 transition duration-500'
        href='https://github.com/AljoGabinete'
        target='_blank'
        rel='noreferrer'
      >
        <img
          alt='github-link'
          src='../assets/github-logo.png'
          className=' w-8 h-8 border rounded-full bg-grey'
        />
      </a>

      <a
        className='hover:opacity-50 transition duration-500'
        href='https://gitlab.com/AljoGabinete'
        target='_blank'
        rel='noreferrer'
      >
        <img
          alt='gitlab-link'
          src='../assets/gitlab.png'
          className=' w-8 h-8'
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
