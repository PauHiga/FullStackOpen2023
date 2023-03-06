import Header from "./Header";
import Content from "./Content";
import TotalExercises from "./TotalExercises";

const Course = (props) => {
  return (
    <>
      <Header props={props} />
      <Content props={props} />
      <TotalExercises props={props} />
    </>
  );
};

export default Course;
