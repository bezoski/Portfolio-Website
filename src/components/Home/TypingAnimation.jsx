import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypingAnimation = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Game Developer', 'UI/UX Designer'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div>
      <p className="font-merriweather text-body-l md:text-body-xl text-primary-flame text-center md:text-left">
        {text}
        <span>
          <Cursor cursorStyle="|" style={{ color: '#FFFCF2' }} />
        </span>
      </p>
    </div>
  );
};

export default TypingAnimation;
