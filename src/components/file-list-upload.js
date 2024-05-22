import React, { useEffect, useRef, useState } from 'react';
import './common-styles/file-list-upload-css.css';
import useUserInfo from './cust-hooks/useFileUpload';
import { useDispatch } from 'react-redux';
import { updateData } from '../store/books-and-gstr-sclice';
import { useNavigate } from 'react-router-dom';


function FileListUpload() {
  // router navigation
  const navigate = useNavigate();


  // react hooks
  const fileInputRef = useRef(null);
  const [fileEvent, setfileEvent] = useState({});


  // redux dispatch/select
  const dispatch = useDispatch();


  // hook calls
  const { fileUploadHandler, outputData } = useUserInfo(fileEvent);


  // file event handler
  const handleFileUpload = (e) => {
    setfileEvent(e);
  };


  // effect for calling fileUpload when file is changed
  useEffect(() => {
    fileUploadHandler();
  }, [fileEvent]);

  // rerender when we have output Data
  useEffect(() => {
    // if joined/result data is there then and then only go to next page else be on the same page.
    if (outputData.length) {
      dispatch(updateData(outputData));
      alert("file uploaded sucessfully!!")
    }
  }, [outputData])

  // btn click of upload file internally will call <input type="file"/>
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };


  return (
    <>
      <div className='file-list-upload-continer'>
        <div className='file-list-header-container'>
          <p className='file-list-header-names'>File Type</p>
        </div>
        <div className='file-list-header-container'>
          <p className='file-list-header-names'>Action</p>
        </div>


        <div className='file-list-row-container'>
          <p className='p-text-align'>Sales as per Books of Accounts</p>
        </div>
        <div className='file-list-row-container'>
          <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{ display: 'none' }} />
          <button onClick={handleButtonClick} className='file-list-button'>upload</button>
        </div>

        <div className='file-list-row-container'>
          <p className='p-text-align'>Sales as per GSTR 1</p>
        </div>
        <div className='file-list-row-container'>
          <button className='file-list-button'>upload</button>
        </div>

        <div className='file-list-row-container'>
          <p className='p-text-align'>Sales as per EWB records</p>
        </div>
        <div className='file-list-row-container'>
          <button className='file-list-button'>upload</button>
        </div>

        <div className='file-list-row-container'>
          <p className='p-text-align'>Sales as per E invoice Records</p>
        </div>
        <div className='file-list-row-container'>
          <button className='file-list-button'>upload</button>
        </div>


        <div className='file-list-row-container'>
          <p className='p-text-align generate-lable-text'>Statement of Reconciliation of B2B sales between Books and GSTR1</p>
        </div>
        <div className='file-list-row-container'>
          <button onClick={() => navigate("/showBooksAndGstr")} className='file-list-button'>Generate</button>
        </div>
        <div className='file-list-row-container'>
          <p className='p-text-align generate-lable-text'>Statement of Reconciliation of EWB sales between Books and EWB Records</p>
        </div>
        <div className='file-list-row-container'>
          <button className='file-list-button'>Generate</button>
        </div>
        <div className='file-list-row-container'>
          <p className='p-text-align generate-lable-text'>Statement of Reconciliation of  E Invoices  between Books and E Invoice Records</p>
        </div>
        <div className='file-list-row-container'>
          <button className='file-list-button'>Generate</button>
        </div>
      </div>
    </>
  );
}

export default FileListUpload;
