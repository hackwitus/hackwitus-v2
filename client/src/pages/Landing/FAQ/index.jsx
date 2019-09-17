import React, { useState } from 'react';

import * as data from './faq.json';
import './style.scss';
import Spoiler from './Spoiler';

const FAQ = props => {
  const [shown, setShown] = useState('1');

  const handleClicked = key => {
    console.log(shown, key);
    if (shown === key) {
      setShown('');
    } else {
      setShown(key + '');
    }
  };

  const renderSpoilers = side => {
    return data.faqs[side].map(faq => {
      return (
        <Spoiler
          key={faq.key}
          title={faq.title}
          content={faq.content}
          show={shown === faq.key || shown === 'all'}
          onShow={() => handleClicked(faq.key)}
        />
      );
    });
  };
  return (
    <div className="faq">
      <div className="faq__upper">
        <h1 className="faq__title">
          <span
            role="img"
            aria-label={props.label ? props.label : ''}
            aria-hidden={props.label ? 'false' : 'true'}
          >
            🙋‍♀
          </span>
          &nbsp; Frequently Asked Questions
        </h1>
        <button
          className="faq__toggle"
          onClick={() => handleClicked(shown === 'all' ? '' : 'all')}
        >
          {shown === 'all' ? 'Hide All' : 'Show All'}
        </button>
      </div>
      <div className="faq__list">
        <div className="faq__list--inner">{renderSpoilers('left')}</div>
        <div className="faq__list--inner">{renderSpoilers('right')}</div>
      </div>
      <div className="faq__lower">
        <h3 className="faq__meta">Got More Questions?</h3>
        <a href="/" className="faq__toggle">
          Join Our Discord
        </a>
      </div>
    </div>
  );
};

export default FAQ;
