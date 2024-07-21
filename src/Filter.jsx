// State CRUD

import React, { Component } from 'react'
import { student } from './mock';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      data: student,
      name: " ",
      status: "",
      search: 'id'
    }
  }

  render() {
    const onChange = (event) =>{
      console.log(event.target.name);
      this.setState({ [event.target.name]: event.target.value });
    }

    const onFilter = (e) => {
      const {value} = e.target
      let res = student.filter((val) => 
        `${val[this.state.search]}`.toLowerCase().includes(value.toLowerCase()))
      this.setState({
      data: res,
      });
    }

    const onDelete = (id) => {
      console.log(id);
      let res = this.state.data.filter(value => value.id !== id)
      this.setState({ data: res });
    }
    const onAdd = () => {
      let user = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({ 
        data: [...this.state.data, user ], 
        name: '', 
        status: ''
      });
      console.log(user);
    }

    const onSelect = () =>{
      this.seStatus({search: e.target.value})
    };
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h1>Status:{this.state.status}</h1>
        <input value={this.state.name} name='name' onChange={onChange} type="text" placeholder='name' />
        <input value={this.state.status} name='status' onChange={onChange} placeholder='surname'/>
        <button onClick={onAdd}>add</button>
        <hr />
        <select onChange={onSelect} name="" id="">
          <option value="id">ID</option>
          <option value="id">Name</option>
          <option value="id">Status</option>
        </select>
        <input onChange={onFilter} type="text" placeholder='search'/>
        <hr />
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
          {this.state.data.length ?
          this.state.data.map(({id, name, status}) =>{
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
        }) : (
          <tr>
          <th colSpan={5}>
             <h1>no data</h1>
          </th>
        </tr>
        )}
        </tbody>
        </table>
      </div>
    );
  }
}
