import React from 'react';
import { useState } from 'react';
import Description from './Description/Description';

const ProjectDescription = () => {
  // track and update screen size
  const [smallScreen, setSmallScreen] = useState(false);

  window.addEventListener('resize', () => {
    if (window.innerWidth < 1250) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  });

  return (
    <>
      {/* on large screen show message */}
      {!smallScreen && <Description />}

      {/* on small screen show different message */}
      {smallScreen && <Description smallScreen={smallScreen} />}
    </>
  );
};

export default ProjectDescription;
