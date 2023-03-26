import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Image from 'next/image'
import styles from './caseStudyMultipleChoice.module.css';
import MultipleChoiceButton from '../multipleChoiceButton/multipleChoiceButton';

function CaseStudyMultipleChoice(props) {
  return (
    <div id={styles.caseStudyMultipleChoiceContainer}>
      <h1 id={styles.caseStudyMultipleChoiceTitle}>Multiple Choice</h1>
      <p id={styles.caseStudyMultipleChoiceQuestion}>Why is having equity good for the VC firm? </p>
      <div id = {styles.multipleChoiceAnswerContainer}>
        <MultipleChoiceButton button_title="Answer 1"></MultipleChoiceButton>
        <MultipleChoiceButton button_title="Answer 2"></MultipleChoiceButton>
        <MultipleChoiceButton button_title="Answer 3"></MultipleChoiceButton>
        <MultipleChoiceButton button_title="Answer 4"></MultipleChoiceButton>
      </div>
    </div>
  );
}

export default CaseStudyMultipleChoice;