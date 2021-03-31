import React, { Component } from 'react';

import s from './SearchBar.module.scss';

class SearchBar extends Component {
    state = {
        search: '',
    };
    handleChange = e => {
        this.setState({ search: e.currentTarget.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmitForm(this.state.search);
        this.setState({ search: '' });
    };
    render() {
        return (
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.SearchForm_button}>
                        <span className={s.SearchForm_button_label}>Search</span>
                    </button>
                    <input
                        className={s.SearchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.search}
                        onChange={this.handleChange}
                    />
                </form>
            </header>)
    };
}
export default SearchBar;