import React from 'react';
import ReactDOM from 'react-dom/client';
import Image from 'next/image'
import styles from './coursesSection.module.css';
import CourseCard from '../courseCard/courseCard';

function coursesSection(props) {

  return (
    <div id={styles.coursesContainer}>
      <h1 id={styles.courseTitle}>{props.courseSectionTitle}</h1>
      <p id={styles.courseParagraph}>This is some text explaining how the product works and all that  This is some text explaining how the product works. This is some text explaining how the product works and all that  This is some text explaining how the product works.  This is some text.This is some text explaining how the product works and all that  This is some text explaining how the product works. This is some text explaining how the product works and all that  This is some text explaining how the product works.  This is some text.</p>
      <div id={styles.courseCardContainer}>
        <CourseCard cardTitle = "What is VC?" sectionsCompleted = "4" sectionsTotal = "20" cardParagraph = "This is some text explaining how the product works and all that  This is some text explaining how the product works. This is some text explaining how the product works and all that."></CourseCard>
        <CourseCard cardTitle = "What is 2?" sectionsCompleted = "4" sectionsTotal = "20" cardParagraph = "This is some text explaining how the product works and all that  This is some text explaining how the product works. This is some text explaining how the product works and all that."></CourseCard>
        <CourseCard cardTitle = "What is 3?" sectionsCompleted = "4" sectionsTotal = "20" cardParagraph = "This is some text explaining how the product works and all that  This is some text explaining how the product works. This is some text explaining how the product works and all that."></CourseCard>
        <CourseCard cardTitle = "What is 4?" sectionsCompleted = "4" sectionsTotal = "20" cardParagraph = "This is some text explaining how the product works and all that  This is some text explaining how the product works. This is some text explaining how the product works and all that."></CourseCard>
        <CourseCard cardTitle = "What is 5?" sectionsCompleted = "4" sectionsTotal = "20" cardParagraph = "This is some text explaining how the product works and all that  This is some text explaining how the product works. This is some text explaining how the product works and all that."></CourseCard>
      </div>
    </div>
  );
}

export default coursesSection;