import React from 'react';

export default function Login({ user, changeHandler, loginUser }) {
  return (
    <div>
      <form>
        <h1>Log In</h1>
        <input
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={changeHandler}
        />
        <input
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={changeHandler}
          type="password"
        />
        <button onClick={event => loginUser(event, user)}>Login</button>
      </form>
    </div>
  );
}
