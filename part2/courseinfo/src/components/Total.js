const Total = ({ part }) => {
  const total = part.reduce((s, p) => s + p.exercises, 0)

  return (
      <b>total of {total} exercises</b>
  )
}


export default Total