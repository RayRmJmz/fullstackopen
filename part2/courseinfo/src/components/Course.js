import Header from './Header'
import CoursePart from './CoursePart'

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
