import './App.css'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div className="content">
      <p className="row">
        <span>{props.part1}</span> <span className="units">{props.units1}</span>
      </p>
      <p className="row">
        <span>{props.part2}</span> <span className="units">{props.units2}</span>
      </p>
      <p className="row">
        <span>{props.part3}</span> <span className="units">{props.units3}</span>
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p className="row total">
      <span>Total units</span> <span className="units">{props.total}</span>
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      {props.studentName} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = 'Industry Elective 1'
  const part1 = 'Data Analytics 1'
  const units1 = 3
  const part2 = 'Networking 2'
  const units2 = 3
  const part3 = 'Information Management 2'
  const units3 = 3
  const studentName = 'Kharl Patrick R. Cedeño'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div className="card">
      <Header course={course} />
      <Content
        part1={part1}
        units1={units1}
        part2={part2}
        units2={units2}
        part3={part3}
        units3={units3}
      />
      <Total total={units1 + units2 + units3} />
      <Footer studentName={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App
