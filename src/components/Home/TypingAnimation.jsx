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
      <p className="font-merriweather text-body-l md:text-body-xl text-primary-floral-white text-center md:text-left">
        I&apos;m a <span className="text-primary-flame">{text}</span>
        <span>
          <Cursor cursorStyle="|" style={{ color: '#FFFCF2' }} />
        </span>
      </p>
    </div>
  );
};

export default TypingAnimation;
