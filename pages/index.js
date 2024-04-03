import getAJoke from '../api/jokeData';

function Home() {
  const singleJoke = () => {
    getAJoke().then((jokeObj) => {
      console.warn(jokeObj);
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
      <h2>Joke</h2>
      <button type="button" onClick={singleJoke}> Get a joke </button>
    </div>
  );
}

export default Home;
