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

    return (
      <div>
        <h1>Filter Name</h1>
        <input onChange={onFilter} type="text" placeholder='name' />
        {this.state.data.map(({id, name, status}) =>{
          return (
            <h1 key={id}>
              {id} {name} {status}
            </h1>
          )
        })}
      </div>
    )
  }
}
