import Part from './Part'
import Total from './Total'

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

export default CoursePart