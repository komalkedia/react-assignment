import React, { Component } from 'react';

class Course extends Component {
  render() {
    const id = this.props.match.params.id;
    const searchString = this.props.location.search;
    const params = new URLSearchParams(searchString);
    return (
      <div>
        <h1>{params.get('title')}</h1>
        <p>You selected the Course with ID: {id}</p>
      </div>
    );
  }
}

export default Course;
