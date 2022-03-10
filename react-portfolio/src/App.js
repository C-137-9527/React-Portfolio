import Viewport from './components/Viewport/Viewport';
import Keypad from './components/Keypad/Keypad';
import ModalMessage from './components/ModalMessage/ModalMessage';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function App() {
  // track site visitors: send a post request to firebase whenever someone visits my portfolio
  const notifyVisitor = async () => {
    await fetch(
      'https://portfolio-visitor-tracking-default-rtdb.firebaseio.com/visitor.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          `visited on ${new Date().toLocaleString('en-US', {
            timeZone: 'America/Los_Angeles',
          })}`
        ),
      }
    );
  };

  // call notifyVisitor on page load
  useEffect(() => {
    notifyVisitor();
  }, []);

  // portal
  const portal = document.getElementById('modal');

  return (
    <>
      <Viewport />
      <Keypad />
      {createPortal(<ModalMessage />, portal)}
    </>
  );
}

export default App;
