import './App.css'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p className="row">
      <span>{props.part.name}</span> <span className="units">{props.part.units}</span>
    </p>
  )
}

const Content = (props) => {
  return (
    <div className="content">
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
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
  const part1 = {
    name: 'Data Analytics 1',
    units: 3
  }
  const part2 = {
    name: 'Networking 2',
    units: 3
  }
  const part3 = {
    name: 'Information Management 2',
    units: 3
  }
  const studentName = 'Kharl Patrick R. Cedeño'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div className="card">
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.units + part2.units + part3.units} />
      <Footer studentName={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App
