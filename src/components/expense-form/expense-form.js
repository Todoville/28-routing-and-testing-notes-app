import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  price: 0,
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleSubmit = (e) => {
    event.preventDefault();
    this.props.handleAddExpense(this.state);
    this.setState(defaultState);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={ this.state.title }
          onChange={ this.handleChange }
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          value={ this.state.price }
          onChange={ this.handleChange }
        />
        <button type="submit">Create Expense</button>
      </form>
    );
  }
}

ExpenseForm.PropTypes = {
  handleAddExpense: PropTypes.func,
};