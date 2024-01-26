import React from 'react'

const Login = () => {
  return (
    <div>
        <form>
            <h1>Admin Login</h1>
            <div>
                <label>Username</label>
                <input type="text" placeholder='Enter your username'/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder='Enter your password'/>
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login;
