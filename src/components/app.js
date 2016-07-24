import React, { Component } from 'react';
import ReviewList from '../containers/review-list';
import ReviewDetail from '../containers/review-detail';

export default class App extends Component {
  render() {
    return (
      <div>
      	<ReviewList />
      	<ReviewDetail />
      </div>
    );
  }
}
