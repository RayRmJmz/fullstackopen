const Header = ({ tittle }) => <h1>{tittle}</h1>

const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  )
}

const Total = ({ part }) => {
  const total = part.reduce((s, p) => s + p.exercises, 0)

  return (
    <>
      <b>total of {total} exercises</b>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header tittle={course.name} />
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total part={course.parts} />
    </div>
  )
}

export default Course
