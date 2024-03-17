import React from 'react';
import pdfFile from '../../assets/SB PLANNER.pdf';
import { PDFContainer } from './index.styled.ts';
const PDFViewer = () => {
  return (
    <PDFContainer>
      <iframe title='PDF Viewer' src={pdfFile} width={'100%'} height={'100%'} />
    </PDFContainer>
  );
};
export default PDFViewer;
