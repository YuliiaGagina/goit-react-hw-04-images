import { Component } from 'react';
import css from './Searchbar.module.css';
export class Searchbar extends Component {
  state = {
    query: '',
  };

  hendleInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  hendleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <header className={css.Searchbar}>
  <form onSubmit={this.hendleSubmit} className={css.Form}>
    <button type="submit" className={css.Button}>
      <span className={css['Button-label']}>Search</span>
    </button>

    <input
      className={css.Input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="query"
      value={this.state.query}
      onChange={this.hendleInput}
    />
  </form>
</header>
      // <form onSubmit={this.hendleSubmit}>
      //   <input
      //     type="text"
      //     name="query"
      //     value={this.state.query}
      //     onChange={this.hendleInput}
      //   />
      //   <button type="submit">Search</button>
      // </form>
    );
  }
}
