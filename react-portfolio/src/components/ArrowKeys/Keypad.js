import React from 'react';
import classes from './Keypad.module.css';

const Keypad = () => {
  return (
    <>
      {/* arrow keys fixed on bottom right */}
      <div className={classes.arrowKeys}>
        <div className={classes.keyUp}>
          <div className={classes.arrow}></div>
        </div>
        <div className={classes.keyDown}>
          <div className={classes.arrow}></div>
        </div>
        <div className={classes.keyLeft}>
          <div className={classes.arrow}></div>
        </div>
        <div className={classes.keyRight}>
          <div className={classes.arrow}></div>
        </div>
      </div>
    </>
  );
};

export default Keypad;
