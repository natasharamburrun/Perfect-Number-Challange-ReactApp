import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  getClassification = (integer) => {

    if (isNaN(integer) || (integer <= 0)) {
      return 'Please input a greater number than 0!';
    }

    var i = 1,
      aliquotSum = 0;
    while(i < integer){
      if (integer % i === 0)
        aliquotSum = aliquotSum + i;
      i++;
    }

    if (aliquotSum < integer) {
      return `Answer: ${integer} is a deficient number`;
    } else if (aliquotSum > integer) {
      return `Answer: ${integer} is an abundant number`;
    } else {
      return `Answer: ${integer} is a perfect number`;
    }
  }


  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const result = this.getClassification(this.state.input);
    return this.setState({result});
  }

  render() {
    return (
      <main>
        <h1>Perfect number challenge</h1>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <h2>Check whether a number is Perfect, Abundant, or Deficient</h2>
          <label>Please enter a number: </label>
          <input type="number" name="input" onChange={this.handleChange} />
          <button type="submit" name="button">Submit</button>
          <h3>{this.state.result}</h3>
        </form>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
