import { useCallback, useState } from 'react';
import * as XLSX from 'xlsx';

const useFileUpload = (fileEvent) => {
  const [outputData, setOutputData] = useState([]);

  const convertBooksAndGstrObj = (data) => {
    const [, ...result] = data.map((ele, index) => {
      if (index !== 0) {
        return {
          [data[0][0]]: ele[0],
          [data[0][1]]: ele[1],
          [data[0][2]]: ele[2],
          [data[0][3]]: ele[3],
          [data[0][4]]: ele[4],
          [data[0][5]]: ele[5],
          [data[0][6]]: ele[6],
          [data[0][7]]: ele[7],
          [data[0][8]]: ele[8],
          [data[0][9]]: ele[9],
          [data[0][10]]: ele[10]
        }
      }
    });
    return result;
  };

  const fileUploadHandler = useCallback(() => {
    if (fileEvent?.target) {
      const file = fileEvent.target.files[0];
      const reader = new FileReader();

      reader.onload = ((event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetNameTestBooks = workbook.SheetNames[1];
        const sheetNameTestGstr = workbook.SheetNames[2];
        const sheetBooks = workbook.Sheets[sheetNameTestBooks];
        const sheetGstr = workbook.Sheets[sheetNameTestGstr];
        let [, , , , ...jsonDataBooks] = XLSX.utils.sheet_to_json(sheetBooks, { header: 1 });
        let [, , , , , , ...jsonDataGstr] = XLSX.utils.sheet_to_json(sheetGstr, { header: 1 });
        jsonDataBooks = convertBooksAndGstrObj(jsonDataBooks);
        jsonDataGstr = convertBooksAndGstrObj(jsonDataGstr);

        // inner joining both books and gstr data and setting to outputData
        setOutputData(finalizeData(jsonDataBooks, jsonDataGstr));

      });
      reader.readAsArrayBuffer(file);
    }
  }, [fileEvent?.target?.files[0]]);




  const finalizeData = (booksData, gstrData) => {
    return booksData.map(
      book => {
        let gstr = gstrData.find(gstr => book['Invoice No.'] === gstr['Invoice No.']);
        if (gstr) {
          return {
            "Name of Party": book['Customer Name'],
            "Invoice No.": book["Invoice No."],
            "Book_Taxable Value": book["Taxable Value"],
            "Book_CGST": book["CGST"],
            "Book_SGST": book["SGST"],
            "Book_IGST": book["IGST"],
            "Gstr_Taxable Value": gstr["Taxable Value"],
            "Gstr_CGST": gstr["CGST"],
            "Gstr_SGST": gstr["SGST"],
            "Gstr_IGST": gstr["IGST"],
            "Diff_Taxable Value": book["Taxable Value"] - gstr["Taxable Value"],
            "Diff_CGST Value": book["CGST"] - gstr["CGST"],
            "Diff_SGST Value": book["SGST"] - gstr["SGST"],
            "Diff_IGST Value": book["IGST"] - gstr["IGST"]
          }
        }
      }
    );
  }

  return {
    fileUploadHandler,
    outputData
  }

}

export default useFileUpload;