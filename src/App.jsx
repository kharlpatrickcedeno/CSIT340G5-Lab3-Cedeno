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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const total = props.parts[0].units + props.parts[1].units + props.parts[2].units

  return (
    <p className="row total">
      <span>Total units</span> <span className="units">{total}</span>
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
  const parts = [
    {
      name: 'Data Analytics 1',
      units: 3
    },
    {
      name: 'Networking 2',
      units: 3
    },
    {
      name: 'Information Management 2',
      units: 3
    }
  ]
  const studentName = 'Kharl Patrick R. Cedeño'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div className="card">
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer studentName={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App
