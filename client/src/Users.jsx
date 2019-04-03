import React from 'react';

export default function Users({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li>
          <div>Id: {user.id}</div>
          <div>Username: {user.username}</div>
          <div>Password: {user.password}</div>
        </li>
      ))}
    </ul>
  );
}
