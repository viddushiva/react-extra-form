import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         age:"",
         class:"",
         data:[]

      }
    }
    onchanging=(e)=>{
        this.setState({
           [ e.target.name]:e.target.value,
           [e.target.age] :e.target.value,
            [e.target.class]:e.target.value


        })
    }
    summit=(e)=>{
        e.preventDefault();
        const tempobj={
            name:this.state.name,
            age:this.state.age,
            class:this.state.class
           

        }
        console.log(tempobj);
      const  setdata=this.state.data
      setdata.push(tempobj)
      this.setState({
          data:setdata
      })
      console.log(setdata);
       
    }
    
  render() {
    return (
        <>
      <div>Form</div>
    
    
      <input type="text" name='name' id='1' value={this.state.name} onChange={this.onchanging}/>
      <input type="number" name='age' id='2' value={this.state.age} onChange={this.onchanging}/>
      <input type="number" name='class' id='3' value={this.state.class} onChange={this.onchanging}/>
   
<button onClick={this.summit}>submit</button>
{this.state.data.map((value,index)=>{
    
    return(<>
    
        <div>{value.name}/{value.age}/{value.class}</div>
    
        </>
    )
    })}

      </>
    )
  }
}
