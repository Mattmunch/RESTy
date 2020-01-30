import React, { Component } from 'react';
import Form from '../components/form/Form';
import HistoryList from '../components/history/HistoryList';
import ResponseDisplay from '../components/responseDisplay/ResponseDisplay';
import { makeFetch } from '../services/makeFetch';

export default class RESTy extends Component {
  state = {
    url:'',
    method: '',
    requestBody:'',
    response: '',
    historyItems: []
  }

    handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);
      makeFetch(this.state.url)
        .then(res => {
          const stringifiedRes = JSON.stringify(res);
          this.setState({ response: stringifiedRes });
        });
    }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  render() {
    const { url, method, requestBody, response, historyItems } = this.state;

    return (
      <main>
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange} url={url} method={method} requestBody={requestBody}  />
        <HistoryList historyItems={historyItems} />
        <ResponseDisplay response={response} />
      </main>
    );
  }

}
