import Header from '../components/header/header';
import Footer from '../components/footer/footer'
import CoursesFold from '../components/coursesFold/couresesFold';
import CoursesSection from '../components/coursesSection/coursesSection';
import LeftCourseColumn from '../components/leftCourseColumn/leftCourseColumn';
import MiddleCourseColumn from '../components/middleCourseColumn/middleCourseColumn';
import RightCourseColumn from '../components/rightCourseColumn/rightCourseColumn';
import { Navbar } from "reactstrap";



export default function Courese() {
  return (
    <div className="Courses">
      <Header></Header>
      <LeftCourseColumn chapter="Chapter 1" chapterDescription="The Basics of VC"></LeftCourseColumn>
      <div id = "courseRightSection">
        <MiddleCourseColumn></MiddleCourseColumn>
        <RightCourseColumn></RightCourseColumn>
      </div>
      <Footer></Footer>
    </div>
  )
}