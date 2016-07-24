import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectReview } from '../actions/index';
import { bindActionCreators } from 'redux';

class ReviewList extends Component {
	renderList() {
		return this.props.reviews.map((review) => {
			return (
				<li
					key={ review.title }
					onClick={ () => this.props.selectReview(review) } 
					className="list-group-item" >
					{review.title}
				</li>
			);
		});
	}
	render() {
		return (
				<ul className="list-group col-sm-4">
					{this.renderList()}
				</ul>
			)
	}
}

function mapStateToProps(state) {
	//Whatever is return will show up as props
	//inside of ReviewList
	return {
		reviews: state.reviews
	};
}

function mapDispatchToProps(dispatch) {
	//whenever selectReview dispatch is called , the results
	//should be passed to all of our reducers	
	return bindActionCreators({ selectReview: selectReview}, dispatch);
}
//Promote ReviewList from a component to a container - it needs
//to know about this new dispatch method, selectReview
//make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);

