import React from 'react';
import classes from './PortfolioMessage.module.css';
import avatar from '../../../assets/avatar.jpeg';
import { FaGithub, FaLinkedin, FaFileCode } from 'react-icons/fa';
import { useState } from 'react';

const PortfolioMessage = ({ onSetShowModal }) => {
  // toggle downward arrow on user scroll
  const [showScroll, setShowScroll] = useState(true);

  // toggle modal off handler
  const handleHideModal = () => {
    onSetShowModal(false);
  };

  // listen to scroll event to toggle showScroll
  const handleShowScroll = () => {
    setShowScroll(false);
  };

  return (
    <>
      {/* backdrop */}
      <div className={classes.backdrop} onClick={handleHideModal}></div>

      {/* modal */}
      <div className={classes.portfolioMessage} onScroll={handleShowScroll}>
        {/* welcome message */}
        <section className={classes.welcome}>
          <h3>Welcome to My Portfolio</h3>
        </section>

        {/* contact */}
        <section className={classes.aboutMe}>
          <img src={avatar} alt='avatar' className={classes.avatar} />
          <div className={classes.basicInfo}>
            <ul>
              <li>Peng Fei (Alvin), Zhang</li>
              <li>front-end developer</li>
              <li>zpf9193@gmail.com</li>
              <li>(+1) 236-988-1101</li>
            </ul>
            <p>
              <a
                href='https://www.linkedin.com/in/peng-fei-zhang-a351b9b2/'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedin className={classes.icon} />
              </a>
              <a
                href='https://github.com/C-137-9527'
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub className={classes.icon} />
              </a>
              <a
                href='https://alvinzhang-portfolio.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                <FaFileCode className={classes.icon} />
              </a>
            </p>
          </div>
        </section>

        {showScroll && <p className={classes.scrollArrow}>\/</p>}

        {/* skillset */}
        <section className={classes.skillset}>
          <h5>A Bit About Me</h5>

          {/* brief intro */}
          <article className={classes.path}>
            <p>
              I started coding in May 2021, mostly learning from Udemy and
              Youtube as self-taught. Feel free to contact me if you have any{' '}
              <span>junior</span> developer position opening!
            </p>
          </article>

          {/* main skills */}
          <article className={classes.skills}>
            <p>
              <span>My Main Skills:</span> HTML 5, CSS 3, Javascript ES6, React
              (Hooks + Router v6).
            </p>

            {/* other skills */}
            <p>
              <span>Also Familiar With:</span> Sass, Bootstrap, Typescript,
              Redux, unit testing, and NodeJS. By familiar, I mean familiar with
              the basic syntax and usage.
            </p>

            {/*  more */}
            <p>
              <span>To Learn More:</span> please checkout my main{' '}
              <span>
                <a
                  href='https://alvinzhang-portfolio.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Portfolio
                </a>
              </span>
              . WARNING: this is a boring portfolio consists of weather api,
              countdown timer, login validation...Sorry I can't come up with
              something you have never seen before. But do trust me that I
              tweaked and coded all these projects by myself. You can also check
              out my{' '}
              <span>
                <a
                  href='https://github.com/C-137-9527'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </span>{' '}
              to see even more projects.
            </p>
          </article>

          {/* close button at bottom */}
          <button onClick={handleHideModal}>Close</button>
        </section>
      </div>
    </>
  );
};

export default PortfolioMessage;
