import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiData();
  });

  const apiData = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setData(result.data.reverse());
    apiData();
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Homepage</h1>
        <table className="table border shadow ">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((users, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{users.name}</td>
                  <td>{users.username}</td>
                  <td>{users.email}</td>
                  <td>
                    <Link
                      className="btn btn-primary mr-2"
                      to={`/users/viewuser/${users.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mr-2"
                      to={`/users/edituser/${users.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(users.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
