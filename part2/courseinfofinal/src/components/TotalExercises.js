const TotalExercises = (props) => {
    const sumExercises = props.props.course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)

    return(
        <p><b>Total of {sumExercises} exercises</b></p>
    )
}
export default TotalExercises
