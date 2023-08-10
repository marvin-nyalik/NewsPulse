import React from 'react';
import '../assets/css/spiner.module.css';

const Loading =  () => {
  return (
    <div className="spinner-container" data-testid="loading-spinner">
      <div className="loading-spinner" />
    </div>
  );
}

export default Loading;
