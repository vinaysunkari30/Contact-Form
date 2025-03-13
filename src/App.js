import {Component} from 'react'

import { FaPhoneVolume } from "react-icons/fa6";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

class App extends Component {
  state={
    name: '',
    email: '',
    isNameEmpty: false,
    isEmailEmpty: false,
    isClicked: false,
    isValid: true,
  }

  getName = (event) => {
    this.setState({
      name: event.target.value,
      isNameEmpty: false,
    })
  }

  validateName = () => {
    const {name} = this.state
    if(name===""){
      this.setState({
        isNameEmpty: true,
      })
    }else{
      this.setState({
        isNameEmpty: false,
      })
    }
  }

  getEmail = (event) => {
    this.setState({
      email: event.target.value,
      isEmailEmpty: false,
      isValid: true,
    })
  }

  validateEmail = () => {
    const {email} = this.state
    if(email===""){
      this.setState({
        isEmailEmpty: true,
        isValid: true,
      })
    }else{
      this.setState({
        isEmailEmpty: false,
        isValid: false,
      })
    }
  }

  onSubmitForm = (event) => {
    event.preventDefault()
    const {email, name} = this.state
    if(email==='' && name===''){
      this.setState({
        isEmailEmpty: true,
        isNameEmpty: true,
      })
    } else if (email===''&&name!==""){
      this.setState({
        isEmailEmpty: true,
        isNameEmpty: false,
      })
    }else if (email!==''&&name===""){
      this.setState({
        isEmailEmpty: false,
        isNameEmpty: true,
      })
    }

    if(email===''){
      this.setState({
        isValid: true,
        isEmailEmpty: true, 
      })
    } else{
        if(email.endsWith('@gmail.com')){
          this.setState({
            isClicked: true,
            isValid: true,
          })
      } else{
          this.setState({
            isClicked: false,
            isValid: false,
          })
      }
    }
  }


  render(){
    const {isNameEmpty, isEmailEmpty, isValid} = this.state
    return(
      <form className='app-container d-flex justify-content-end align-items-start' onSubmit={this.onSubmitForm}>
        <div className='contact-card col-6 d-flex flex-column justify-content-start pt-3 mt-2'>
          <h className='heading text-center'>Contact Me</h>
          <FaPhoneVolume className='phone-icon' />  
          <label className='label'>Name</label>
          <input className='input-bar' type='text' onBlur={this.validateName} onChange={this.getName} placeholder='Enter Your Name' />
          {isNameEmpty ? <p className='require-text'>Required*</p>: ''}
          <label className='label'>Email</label>
          <input className='input-bar' type='text' onBlur={this.validateEmail} onChange={this.getEmail} placeholder='Enter Your Email'/>
          {isEmailEmpty ? <p className='require-text'>Required*</p>: ''}
          {isValid ? '': <p className='require-text'>Invalid Email*</p>}
          <label className='label'>Message<span className='optional'>(optional)</span></label>
          <textarea rows={6}></textarea>
          <button className='submit-btn' type='Submit'>Submit</button>
        </div>
      </form>
    )
  }
}

export default App