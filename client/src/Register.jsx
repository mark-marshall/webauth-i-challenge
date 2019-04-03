import React from 'react';

export default function Register({ user, changeHandler, registerUser }) {
  return (
    <div>
      <form>
        <h1>Register</h1>
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
        <button onClick={event => registerUser(event,user)}>Register</button>
      </form>
    </div>
  );
}
