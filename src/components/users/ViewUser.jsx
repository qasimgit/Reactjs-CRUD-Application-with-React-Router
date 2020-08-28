import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ViewUser = () => {
  const [userData, setUserData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    loadData();
  });

  const loadData = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUserData(result.data);
  };
  console.log(userData);

  return (
    <div className="viewCont">
      <ul className="list-group">
        <li className="list-group-item">Name : {userData.name}</li>
        <li className="list-group-item">Email: {userData.email}</li>
        {userData.username ? (
          <li className="list-group-item">Username :{userData.username} </li>
        ) : (
          console.log("username not found")
        )}
        <li className="list-group-item">Phone: {userData.phone}</li>
        <li className="list-group-item">Website: {userData.website}</li>
      </ul>
    </div>
  );
};
