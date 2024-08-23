import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchBar extends Component {
  state = {
    query: ''
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSearch = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.query); // Passa la query al componente genitore
  };

  render() {
    return (
      <Form onSubmit={this.handleSearch} className="mb-4">
        <Form.Group controlId="search">
          <Form.Control
            type="text"
            placeholder="Search for movies or TV shows..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-2">
          Search
        </Button>
      </Form>
    );
  }
}

export default SearchBar;