import React from 'react';

class Card extends React.Component{
    render() {
     return(
        <ul className="list-group col-4">
            <li className="list-group-item">{this.props.students.map((elem) => elem.name)}</li>
            <li className="list-group-item">{this.props.students.map((elem) => elem.surname)}</li>
           
           
        </ul>   
        );
    }
}
export default Card;