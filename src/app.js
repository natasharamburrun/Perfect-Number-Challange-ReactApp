import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  getClassification = (integer) => {

    if (integer <= 0) {
      return 'Please input an integer number!';
    }

    var i = 1,
      aliquotSum = 0;
    while(i < integer){
      if (integer % i === 0)
        aliquotSum = aliquotSum + i;
      i++;
    }

    if (aliquotSum < integer) return `${integer} is a deficient number`;
    else if (aliquotSum > integer) return `${integer} is a abundant number`;
    return `${integer} is a perfect number`;

  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const result = this.getClassification(this.state.input);
    return this.setState({result});
  }

  render() {
    return (
      <main>
        <h1>Check whether a number is Perfect, Abundant, or Deficient</h1>
        <form onSubmit={this.handleSubmit}>
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
