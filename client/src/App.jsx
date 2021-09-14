import React from 'react';

import {
  getProductInfo,
  getProductStyles,
  getRelatedProducts,
  getListReviews,
  getReviewMeta,
  getListQuestions,
  getListAnswers
} from './helpers/apiHelpers.js';

import Overview from './components/Overview/Overview';
import Navbar from './components/Navbar/Navbar';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews';
import QAwidget from './components/Q&A/QAwidget';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 48445,
      current_selection: {},
      your_outfit: {}
    };
  }

  render = () => (
    <div className="App">
      <Navbar />
      <Overview product_id={this.state.product_id} getInfo={getProductInfo} getStyles={getProductStyles}/>
      <div className='Carousels'>
        <div>Carousels</div>
        <div className='RelatedProducts'>
          <div>Related Products Carousel</div>
        </div>
        <div className='YourOutfit'>
          <div data-testid="App">Your Outfit Carousel</div>
        </div>
      </div>
      <div className='QandA'>
        <QAwidget
            product_id={this.state.product_id}
            getListAnswers={getListAnswers}
            getListQuestions={getListQuestions}
          />
      </div>
      <RatingsAndReviews id={this.state.product_id} />
    </div>
  );
}

export default App;