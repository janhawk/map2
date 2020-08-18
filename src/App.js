import React from 'react';
// import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component{

  render() {
 
    const students = [{
      id: 'abc',
      name: 'Evelyn',
      surname: 'Arnett'
      }, {
      id: 'def',
      name: 'Glenn',
      surname: 'Bradford'
      }, {
      id: 'ghi',
      name: 'Kourtney',
      surname: 'Calloway'
      }, {
      id: 'jkl',
      name: 'Dawson',
      surname: 'Eagerton'
      }, {
      id: 'mno',
      name: 'Maggie',
      surname: 'Townsend'
      }, {
      id: 'pqr',
      name: 'Kyle',
      surname: 'Millhouse'
      } 
  ];
 
  const listStudents = students.map((students) =>
<li className="list-group-item">{students.name} {students.surname}</li>
  )
    return(
      <ul className="list-group col-4">
        <li className="list-group-item">{listStudents}</li>
      </ul>
      
    );
  }
}
export default App;
