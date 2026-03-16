
import { useEffect, useState } from 'react';
import profileImage from '/src/assets/profileImage.png';

const TITLES = [
  'Cybersecurity Enthusiast',
  'SOC Analyst',
  'GRC Specialist',
  'Network Security Analyst',
];

const About = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const typingSpeed = isDeleting ? 45 : 85;
    const holdAtEnd = 1200;
    const holdBeforeNext = 260;

    let timer;

    if (!isDeleting && displayText === currentTitle) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, holdAtEnd);
    } else if (isDeleting && displayText === '') {
      timer = window.setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      }, holdBeforeNext);
    } else {
      timer = window.setTimeout(() => {
        const nextText = isDeleting
          ? currentTitle.slice(0, displayText.length - 1)
          : currentTitle.slice(0, displayText.length + 1);

        setDisplayText(nextText);
      }, typingSpeed);
    }

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-center gap-8 md:gap-12">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I 
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Abdullah Akram
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <span className="inline-flex items-center gap-1 align-middle">
              <span className="inline-block animate-title-cyber">{displayText}</span>
              <span aria-hidden="true" className="title-cursor" />
            </span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
Computer Science undergraduate at COMSATS University Islamabad with a passion for securing digital infrastructure. I specialize in vulnerability assessment, network defense, and security operations — backed by industry-recognized certifications from Google and (ISC)².
          </p>
          {/* Resume Button */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] border-4 border-purple-700 rounded-full overflow-hidden shadow-[0_0_40px_rgba(130,69,236,0.20)]">
            <img
              src={profileImage}
              alt="Abdullah Akram"
              loading="eager"
              decoding="async"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
