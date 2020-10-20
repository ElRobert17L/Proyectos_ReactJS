import React from "react";

export default function ListUsersV2(props) {
  const { users } = props;

  return (
    <div>
      <h4>Lista de Usuarios V2</h4>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.years} años
          </li>
        ))}
      </ul>
    </div>
  );
}
