
import './Login.css';
import authContext from './auth-context';
import { useContext } from 'react';

const Login = () => {

   const {login} =useContext(authContext);
  

  return (
    <div className="login-wrapper">
      <form className="login-box" >
        <h2 className="login-title">Login</h2>

        <input
          type="email"
          placeholder="Email"
          
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          
          className="login-input"
        />

        <button type="submit" className="login-button" onClick={login}>Login</button>

        
      </form>
    </div>
  );
};

export default Login;
