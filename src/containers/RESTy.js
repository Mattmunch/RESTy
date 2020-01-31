import React, { Component } from 'react';
import Form from '../components/form/Form';
import HistoryList from '../components/history/HistoryList';
import ResponseDisplay from '../components/responseDisplay/ResponseDisplay';
import { makeFetch } from '../services/makeFetch';
import styles from './RESTy.css';

export default class RESTy extends Component {
  state = {
    url:'',
    method: '',
    requestBody:'',
    response: [],
    historyItems: []
  }
    handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);
      this.setState(prevState => ({
        historyItems: [
          ...prevState.historyItems,
          { url: this.state.url }
        ] }));
      makeFetch(this.state.url)
        .then(res => {
          this.setState({ response: res });
        });
    }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  render() {
    const { url, method, requestBody, response, historyItems } = this.state;

    return (
      <main className={styles.Container}>
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange} url={url} method={method} requestBody={requestBody}  />
        <HistoryList historyItems={historyItems} />
        <ResponseDisplay response={response} />
      </main>
    );
  }

}
