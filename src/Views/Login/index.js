import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const initialState = {
    email: "",
    password: ""
  };
  const [data, setData] = useState(initialState);
  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleInputSubmit = event => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <WrapLogin>
      <div className="form-wrapper d-flex align-items-center justify-content-center">
        <div className="login-form">
          <form>
            <img
              className="logo"
              src={require("../../images/logo-pharos.cd4fd343.png")}
              alt="pharos"
            />
            <div className="form-group">
              <label className="label-input">
                Email <span>*</span>
              </label>
              <input
                type="email"
                className="form-control"
                value={data.email}
                onChange={handleInputChange}
                name="email"
              />
            </div>
            <div className="form-group">
              <label className="label-input">
                Mậu khẩu <span>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                value={data.password}
                onChange={handleInputChange}
                name="password"
              />
            </div>
            <div className="btn-button">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleInputSubmit}
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </WrapLogin>
  );
};

export default Login;

const WrapLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  .login-form {
    width: 365px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 4px 8px -2px rgba(9, 30, 66, 0.31),
      0 0 1px rgba(9, 30, 66, 0.31);
    border: none;
    padding: 10px;
    background: #fff;
    form {
      width: 100%;
      padding: 10px;
      .logo {
        display: block;
        margin: 20px auto;
      }
      .label-input {
        font-size: 12px;
        font-weight: 600;
        color: #5d6b83;
        span {
          color: #d32f2f;
        }
      }
      .form-control {
        align-items: center;
        display: block;
        width: 100%;
        border-style: solid;
        border-width: 2px;
        transition: background-color 0.2s ease-in-out,
          border-color 0.2s ease-in-out;
        padding: 7px;
        font-size: 14px;
        line-height: 1.45em;
        border-radius: 3px;
        min-height: 34px;
        max-height: 34px;
      }
      .form-control:focus {
        border-color: #2483ff !important;
        box-shadow: none;
      }
      .btn-button {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
`;
