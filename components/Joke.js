import React from 'react';
import { PropTypes } from 'react-bootstrap/esm/Image';

export default function Joke({ joke, btnText }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      { btnText === 'Get Punchline!' ? <h2>{joke.delivery}</h2> : ''};
    </>
  );
}

Joke.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    delivery: PropTypes.string.isRequired,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
