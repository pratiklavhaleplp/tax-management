import React from 'react';
import { useSelector } from 'react-redux';
import './common-styles/final-output-css.css';

const FinalOutput = () => {
  // redux select/dispatch
  const outputJoinedData = useSelector(state => state.booksAndGstr.joinedData);

  console.log("received: ", outputJoinedData);
  return (
    <>
      <p className='final-output-heading-container'>Statement of Reconciliation of B2B sales between Books and GSTR1</p>
      <div className='final-output-grid-parent'>
        <div className='final-output-grid-header-container'>

          {/* headers */}
          <div className='f-o-header-party-name'>
            <p className='f-o-ptag-margin'>Name of the Party</p>
          </div>
          <div className='f-o-header-invoice-number'>
            <p className='f-o-ptag-margin'>Invoice No.</p>
          </div>
          <div className='f-o-header-as-per-books'>
            <p className='f-o-as-per-books-gstr-1-difference f-o-ptag-margin'>As per Books</p>
            <div className='f-o-as-per-books-gstr-1-difference-child'>
              <p style={{ borderRight: '0.08rem solid darkgray' }} className='f-o-ptag-margin'>Taxable Value</p>
              <p style={{ borderRight: '0.08rem solid darkgray' }} className='f-o-ptag-margin'>CGST</p>
              <p style={{ borderRight: '0.08rem solid darkgray' }} className='f-o-ptag-margin'>SGST</p>
              <p className='f-o-ptag-margin'>IGST</p>
            </div>
          </div>
          <div className='f-o-header-as-per-gstr-1'>
            <p className='f-o-as-per-books-gstr-1-difference f-o-ptag-margin'>As per GSTR-1</p>
            <div className='f-o-as-per-books-gstr-1-difference-child'>
              <p style={{ borderRight: '0.08rem solid darkgray' }} className='f-o-ptag-margin'>Taxable Value</p>
              <p style={{ borderRight: '0.08rem solid darkgray' }} className='f-o-ptag-margin'>CGST</p>
              <p style={{ borderRight: '0.08rem solid darkgray' }} className='f-o-ptag-margin'>SGST</p>
              <p className='f-o-ptag-margin'>IGST</p>
            </div>
          </div>
          <div className='f-o-header-as-per-difference'>
            <p className='f-o-as-per-books-gstr-1-difference f-o-ptag-margin'>As per Difference</p>
            <div className='f-o-as-per-books-gstr-1-difference-child'>
              <p style={{ borderRight: '0.08rem solid darkgray' }} className='f-o-ptag-margin'>Taxable Value</p>
              <p style={{ borderRight: '0.08rem solid darkgray' }} className='f-o-ptag-margin'>CGST</p>
              <p style={{ borderRight: '0.08rem solid darkgray' }} className='f-o-ptag-margin'>SGST</p>
              <p className='f-o-ptag-margin'>IGST</p>
            </div>
          </div>
          {outputJoinedData && outputJoinedData.map((joinedDataRow) => {
            return (<>
              <p className='f-o-row-data-block'>{joinedDataRow['Name of Party']}</p>
              <p className='f-o-row-data-block'>{joinedDataRow['Invoice No.']}</p>
              <div className='f-o-as-per-books-gstr-1-difference-child'>
                <p className='f-o-row-data-block'>{joinedDataRow['Book_Taxable Value']}</p>
                <p className='f-o-row-data-block'>{joinedDataRow['Book_CGST']}</p>
                <p className='f-o-row-data-block'>{joinedDataRow['Book_SGST']}</p>
                <p className='f-o-row-data-block'>{joinedDataRow['Book_IGST']}</p>
              </div>
              <div className='f-o-as-per-books-gstr-1-difference-child'>
                <p className='f-o-row-data-block'>{joinedDataRow['Gstr_Taxable Value']}</p>
                <p className='f-o-row-data-block'>{joinedDataRow['Gstr_CGST']}</p>
                <p className='f-o-row-data-block'>{joinedDataRow['Gstr_SGST']}</p>
                <p className='f-o-row-data-block'>{joinedDataRow['Gstr_IGST']}</p>
              </div>
              <div className='f-o-as-per-books-gstr-1-difference-child'>
                <p className='f-o-row-data-block'>{joinedDataRow['Diff_Taxable Value']}</p>
                <p className='f-o-row-data-block'>{joinedDataRow['Diff_CGST Value']}</p>
                <p className='f-o-row-data-block'>{joinedDataRow['Diff_SGST Value']}</p>
                <p className='f-o-row-data-block'>{joinedDataRow['Diff_IGST Value']}</p>
              </div>
            </>)
          })}
        </div>
      </div>
    </>
  );
}

export default FinalOutput;
