import React from 'react';
import ReactDOM from 'react-dom';

import './scss/main.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  getClassification(integer) {
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

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const result = this.getClassification(this.state.input);
  //   this.setState({result});
  // };

  // handleChange = ({ target: { name, value }}) => {
  //   this.setState({ [name]: value });
  // };

  render() {
    console.log(this.state);
    return (
      <main>
        <div className="content">
          <h1>Check whether a number is Perfect, Abundant, or Deficient</h1>
          {/* <form>
              <label>Please enter a number</label>
              <input type="text" className="input" />
              <button type="submit" name="button">Submit</button>
            </form>
            <h2 className="result"></h2> */}
        </div>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
