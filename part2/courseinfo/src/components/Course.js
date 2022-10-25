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

const Course = ({ course }) => {
  return (
    <div>
      <Header tittle={course.name} />
        {course.parts.map(part => 
          <Part part={part} />
        )}
    </div>
  )
}



export default Course