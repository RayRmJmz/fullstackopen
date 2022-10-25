const Header = ({ tittle }) => <div><h1>{tittle}</h1></div>

const Part = ({ course }) => {
  return (
    <div>
      <p>{course.name}</p>
    </div>
  
  )
}

const CoursePart = ({ course }) => {
  return (
    <div>
      <h3>{course.name}</h3>
      {course.parts.map(courses => 
          <Part key={courses.id} course={courses} />
      )}
      <Total part={course.parts} />
    </div>
  )
}

const Total = ({ part }) => {
  const total = part.reduce((s, p) => s + p.exercises, 0)

  return (
      <b>total of {total} exercises</b>
  )
}

const Course = ({ courses }) => {
  
  return (
    <div>
      <Header  tittle='Web development curriculum' />
      {
        courses.map(course => 
          <CoursePart key={course.id} course={course} />
        )
      }
    </div>
  )
}

export default Course
