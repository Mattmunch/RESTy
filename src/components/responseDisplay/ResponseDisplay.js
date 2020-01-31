import React from 'react';
import PropTypes from 'prop-types'
;
import ReactJson from 'react-json-view';

const ResponseDisplay = ({ response }) => (
  <>
    <section>
      <ReactJson src={response} />
    </section>
  </>
)
    ;
ResponseDisplay.propTypes = {
  response: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default ResponseDisplay;
