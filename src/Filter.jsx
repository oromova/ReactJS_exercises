// State CRUD

import React, { Component } from 'react'
import { student } from './mock';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      data: student,
      name: "Yulduz",
      surname: "Oromova"
    }
  }

  render() {
    const onFilter = (e) => {
    let res = student.filter((val) => val.name.includes(e.target.value))
    this.setState({
      data: res,
    });
    }

    const onDelete = (id) => {
      console.log(id);
    }

    return (
      <div>
        {/* <h1>Name: {this.state.name}</h1>
        <h1>Surname:{this.state.surname}</h1>
        <h1>State {this.state.count}</h1>
        <input name='name' onChange={onChange} type="text" placeholder='name' />
        <input onChange={onFilter} type="text" placeholder='filter'/> */}
        <table border={'1px'} width={"100%"}>
          <thead>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
        <tbody>
          {this.state.data.map(({id, name, status}) =>{
          return (
            <tr key={id}>
             <td>{id}</td> 
             <td>{name}</td> 
             <td>{status}</td> 
             <td>
              <button onClick={() => onDelete(id)}>delete</button>
              </td>
             <td>
              <button>edit</button>
              </td>
            </tr>
          );
        })}
        </tbody>
        </table>
      </div>
    );
  }
}
