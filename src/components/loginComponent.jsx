import {useState } from "react";



const LoginComponent = () => {
    
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 
 const handleEmailChange = (event) =>{
    // console.log(event);
    setEmail(event.target.value);
 };

 const handlePasswordChange = (event) =>{
    // console.log(event);
    setPassword(event.target.value);
 };


    return (
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange = {handleEmailChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.{email}
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange = {handlePasswordChange}

          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  };
  
  export default LoginComponent;