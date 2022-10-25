const Header = ({tittle}) =>  <h1>{tittle}</h1>

const Part = (props) => {
  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  let sum = 0;
  props.parts.forEach((part) => sum += part.exercises)

  return (
    <>
      <b>total of  {sum} exercises</b>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header tittle={course.name} />
      {course.parts.map(part => 
        <Part part={part} />
      )}
      <Total parts={course.parts} />
    </div>
  )
}

export default Course