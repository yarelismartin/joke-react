import { useState } from 'react';
import getAJoke from '../api/jokeData';
import Joke from '../components/Joke';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setbtnText] = useState('Get A Joke');

  const singleJoke = () => {
    getAJoke().then((jokeObj) => {
      setJoke({
        setup: jokeObj.setup,
        delivery: jokeObj.delivery,
      });
      setbtnText('Get Punchline!');
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome Home!</h1>
      <Joke joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get A New Joke' ? (
        <button type="button" onClick={singleJoke}>{btnText}</button>
      ) : (
        <button type="button" onClick={() => setbtnText('Get A New Joke')}>{btnText}</button>
      )}
    </div>
  );
}

export default Home;
