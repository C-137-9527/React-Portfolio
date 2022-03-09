import React from 'react';
import classes from './Description.module.css';
import { useState } from 'react';

const Description = ({ smallScreen }) => {
  // turn off alert window on small screen
  const [hideAlertWindow, setHideAlertWindow] = useState(false);

  //  toggle alert window via class
  const hideAlertWindowClass = hideAlertWindow ? classes.hideAlertWindow : '';

  return (
    <div className={classes.description + ' ' + hideAlertWindowClass}>
      {!smallScreen && (
        <ul>
          <li>author: Alvin Zhang</li>
          <li>
            react source code:{' '}
            <a href='#' target='_blank' rel='noreferrer'>
              Github Repo
            </a>
          </li>
          <li>
            inspired by:{' '}
            <a
              href='https://codepen.io/punkydrewster713/pen/WNrXPrb'
              target='_blank'
              rel='noreferrer'
            >
              Drew Conley
            </a>
          </li>
        </ul>
      )}

      {/* only visible on small screen */}
      {smallScreen && (
        <>
          <p>this project is not ideal for small screen.</p>
          <button onClick={() => setHideAlertWindow(true)}>OK</button>
        </>
      )}
    </div>
  );
};

export default Description;
