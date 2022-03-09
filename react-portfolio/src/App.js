import Viewport from './components/Viewport/Viewport';
import Keypad from './components/ArrowKeys/Keypad';
import ProjectDescription from './components/ProjectDescription/ProjectDescription';
import { useEffect } from 'react';

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

  return (
    <>
      <Viewport />
      <Keypad />
      <ProjectDescription />
    </>
  );
}

export default App;
