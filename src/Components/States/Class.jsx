import React, { Component } from 'react'

export default class Class extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    addCount=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.addCount}>Click me</button>
      </div>
    )
  }
}
