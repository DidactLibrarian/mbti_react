import React from 'react';
import axios from 'axios';
import { Button, ProgressBar } from 'react-bootstrap';

class TestProcess extends React.Component {
  state = {
    data: {},
    processStep: 1,
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0,
  };

  mbtiUp = () => {
    const { processStep, data } = this.state;

    const elementsUse = data[processStep - 1].elements;

    let elementsCount = {};
    elementsCount[elementsUse] = this.state[elementsUse] + 1;

    this.setState((prevState) => ({
      ...prevState,
      processStep: prevState.processStep + 1,
      ...elementsCount,
    }));
  };

  mbtiDown = () => {
    this.setState((prevState) => ({
      ...prevState,
      processStep: prevState.processStep + 1,
      result: prevState.processStep === prevState.data.length,
    }));
  };

  fetchAPI = async () => {
    const { data } = await axios.get(`/api/index.php`);

    this.setState((prev) => {
      return {
        ...prev,
        data: data,
      };
    });
  };

  componentDidMount() {
    this.fetchAPI();
  }

  render() {
    const { data, processStep } = this.state;
    const totalQuestionCount = data.length;
    const progress = (100 / totalQuestionCount) * processStep;
    const result = processStep === totalQuestionCount;

    if (result) {
      window.localStorage.setItem('resultData', JSON.stringify(this.state));
      this.props.history.push('/result');
    }

    return (
      <article className="question container">
        <ProgressBar animated now={progress} />
        <h2 id="title" className="text-center mt-5">
          {data.title}
        </h2>
        <div className="questionButtons">
          <Button variant="primary mt-5" onClick={this.mbtiUp}>
            {data.question1}
          </Button>
          <Button variant="primary mt-5" onClick={this.mbtiDown}>
            {data.question2}
          </Button>
        </div>
      </article>
    );
  }
}

export default TestProcess;
