import React from 'react';
import PropTypes from 'prop-types'
;

const ResponseDisplay = ({ response }) => (
  <>
    <section>
      <p>{response}</p>
    </section>
  </>
)
    ;
ResponseDisplay.propTypes = {
  response: PropTypes.string.isRequired
};

export default ResponseDisplay;
