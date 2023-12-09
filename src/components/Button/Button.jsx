import React from 'react';
import css from './Button.module.css';

const ButtonLoadMore = ({ handleLoadMore }) => {
  return (
    <div className={css.btn}>
      <button className={css.buttomLM} onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};
export default ButtonLoadMore;
