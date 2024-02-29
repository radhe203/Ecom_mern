import React from 'react'
import "./CSS/LoginSignup.css"
function LoginSignup() {
  return (

    <div className="sign">

      <div className="sign-container">
        <h1>Sign up</h1>
        <div className="data-feild">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='have-acc'>Already have an account ? <span>Login here</span></p>
        <div className="term">
          <input type="checkbox" />
          <p>By Continuing, i agreeto the term of use & privacy policy</p>
        </div>
      </div>

    </div>
    )
}

export default LoginSignup;