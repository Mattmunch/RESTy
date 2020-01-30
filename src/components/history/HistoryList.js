import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ historyItems }) => {
  const historyElements = historyItems.map((historyItem, i) => (
    <li key={i}>
      <HistoryItem historyItem={historyItem} />
    </li>
  ));
  return (
    <ul>
      {historyElements}
    </ul>
  );
};

History.propTypes = {
  historyItems: PropTypes.arrayOf(PropTypes.string).isRequired
};
