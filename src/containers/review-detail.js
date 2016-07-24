import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewDetail extends Component {
	render() {
		if (!this.props.review) {
			return <div> Select a review to get started </div>;
		}

		return (
			<div> 
				<h3> Details for </h3>
				<div>
					Title: {this.props.review.title}
				</div>
				<div>
					Pages: {this.props.review.pages}
				</div>
			</div>

			);
	}
}
function mapStateToProps(state) {
	return {
		review: state.activeReview
	};
}

export default connect(mapStateToProps)(ReviewDetail);