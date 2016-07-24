import { combineReducers } from 'redux';
import ReviewsReducer from './reviews';
import ActiveReview from './active-review';

const rootReducer = combineReducers({
  reviews: ReviewsReducer,
  activeReview: ActiveReview
});

export default rootReducer;
