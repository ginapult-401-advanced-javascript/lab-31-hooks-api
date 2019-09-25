import superagent from 'superagent';
import React, { useState } from 'react';
import { LoginContext } from './context.js';
require('dotenv').config();

const API = process.env.REACT_APP_API;

const If = props => {
  return !!props.condition ? props.children : null;
};

export default function hookedLogIn(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function changeUsername(e) {
    setUsername(e.target.value)
  }

  function changePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit (e, loginMethodFromContext) {
    e.preventDefault();
    superagent
    .post(`${API}/signin`)
    .auth(username, password)
    .then(response => {
      let token = response.text;
      loginMethodFromContext(token);
    })
    .catch(console.error);
  };
    return (
      <LoginContext.Consumer>
        {context => {
          return (
            <>
              <If condition={context.loggedIn}>
                <button onClick={context.logout}>
                  Log Out
                </button>
              </If>
              <If condition={!context.loggedIn}>
                <div>
                  <form onSubmit={e => handleSubmit(e, context.login)}>
                    <input
                      placeholder="username"
                      name="username"
                      onChange={changeUsername}
                    />
                    <input
                      placeholder="password"
                      name="password"
                      type="password"
                      onChange={changePassword}
                    />
                    <input type="submit" value="login" />
                  </form>
                </div>
              </If>
            </>
          );
        }}
      </LoginContext.Consumer>
    );
}