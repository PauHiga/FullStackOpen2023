import Part from "./Part"

const Content = (props) => props.props.course.parts.map((item) => <Part key={item.id} name={item.name} excersises={item.exercises}/>)

export default Content