import React from 'react';
import './common-styles/home-css.css';
import FileListUpload from './file-list-upload';

function Home() {
  return (
    <div className='home-container'>
      <FileListUpload />
    </div>
  );
}

export default Home;
