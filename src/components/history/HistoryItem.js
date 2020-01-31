import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ historyItem }) => (
  <p>{historyItem.url}</p>
);

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};
export default HistoryItem;
