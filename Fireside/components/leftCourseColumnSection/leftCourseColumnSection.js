import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Image from 'next/image'
import styles from './leftCourseColumnSection.module.css';

function LeftCourseColumnSection(props) {

  return (
    <div id = {styles.LeftCourseColumnSectionContainer}>
      {props.sectionTitle}
    </div>
  );
}

export default LeftCourseColumnSection;