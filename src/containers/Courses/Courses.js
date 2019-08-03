import React, { Component } from 'react';

import './Courses.css';
import { Route } from 'react-router-dom';
import Course from '../Course/Course';

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: 'Angular - The Complete Guide' },
      { id: 2, title: 'Vue - The Complete Guide' },
      { id: 3, title: 'PWA - The Complete Guide' }
    ]
  };

  navigateToCourse = (id, title) => {
    this.props.history.push({ pathname: '/courses/' + id, search: 'title=' + title });
  };
  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className='Courses'>
          {this.state.courses.map(course => {
            return (
              <article
                className='Course'
                onClick={this.navigateToCourse.bind(this, course.id, course.title)}
                key={course.id}
              >
                {course.title}
              </article>
            );
          })}
        </section>
        <Route path='/courses/:id' component={Course} />
      </div>
    );
  }
}

export default Courses;
