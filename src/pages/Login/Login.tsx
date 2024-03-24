import React, { useEffect, useState } from 'react';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../../redux/slices/auth/authSlice'
import { UserLoginDetailsReq } from '../../models/request/userLoginDetailsReq';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Login = () => {
  const [uerLoginForm, setUerLoginForm] = useState<UserLoginDetailsReq>({
    userName: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      console.log('error', message)
    }
    if (isSuccess || user) {
      navigate(`/${user.userType}`)
    }

  }, [user, isError, isSuccess, message, isLoading, navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUerLoginForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(uerLoginForm));
  };

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-4 col-md-2"></div>
          <div className="col-lg-4 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key"></i>
            </div>
            <div className="col-lg-12 login-title">
              RESORT LOGIN
            </div>
            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <div className="form-group">
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="Username"
                    className="form-control"
                    value={uerLoginForm.userName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={uerLoginForm.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-12 login-btm login-button">
                  <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                </div>
                <div className="sign-up"> Don't have an account? <NavLink to="/register">Create one</NavLink></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login