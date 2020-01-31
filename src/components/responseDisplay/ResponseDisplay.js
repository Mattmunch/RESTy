import React from 'react';
import PropTypes from 'prop-types'
;
import ReactJson from 'react-json-view';
import gridLayout from '../../containers/RESTy.css';


const ResponseDisplay = ({ response }) => (
  <>
    <section className={gridLayout.responseDisplay}>
      <ReactJson src={response} />
    </section>
  </>
)
    ;
ResponseDisplay.propTypes = {
  response: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default ResponseDisplay;
