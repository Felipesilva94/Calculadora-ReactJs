import React, { Component } from "react";

// parte de styled Component
import styled from "styled-components";
export const Calculadora = styled.div`

  background-color: blueviolet;
  width: 40%;
  height: 370px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;

  input{
    padding: 0.8rem;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  h2{
    background-color: white;
    color: blueviolet;
    width: 30%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }

  div{
    width: 100%;
   
    display: flex;
    justify-content: space-evenly;
  }

   button{
    padding: 15px;
    border-radius: 50px;
    border: none;
    background-color: white;
    font-size: 1.5rem;
    
  }

  button:last-child{
    background-color: red;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`

export const Titulo = styled.h1`
color: white;


`
// parte de logica
export default class App extends Component{

state = {
  n1:'',
  n2: '',
  result: ''
}

divisao = () => {
  this.setState({
    result: this.state.n1 / this.state.n2
  })
}
multiplicar = () => {
  this.setState({
    result: this.state.n1 * this.state.n2
  })
}
adicao = () => {
  this.setState({
    result: this.state.n1  + this.state.n2
  })
}
subtracao = () => {
  this.setState({
    result: this.state.n1 - this.state.n2
  })
}
clear = () => {
  this.setState({
    n1:'',
    n2: '',
    result: ''
  })
}

handleChange1 = (event) => {
  this.setState({
    n1: Number(event.target.value) 
  })
 
}
handleChange2 = (event) => {
this.setState({
  n2: Number(event.target.value)
})
}

  render(){
    return(
      <Calculadora>
        <Titulo>calculadora</Titulo>
        <input onChange={this.handleChange1} type="number" value={this.state.n1}/>
        <input onChange={this.handleChange2} type="number" value={this.state.n2}/>
        <div>
          <button onClick={this.adicao} value={'+'}>+</button>
          <button onClick={this.subtracao} value={'-'}>-</button>
          <button onClick={this.multiplicar} value={'*'}>*</button>
          <button onClick={this.divisao} value={''}>/</button>
          <button onClick={this.clear} >c</button>
        </div>
        <h2>{this.state.result}</h2>
      </Calculadora>
    )
  }
}


