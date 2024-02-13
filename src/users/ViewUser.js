import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    id: "",
    accountName: "",
    balance: "",
    email: "",
    password: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/bank/getAccount/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Account Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Account id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>ID: </b>
                  {user.id}
                </li>
                <li className="list-group-item">
                  <b>Account Name: </b>
                  {user.accountName}
                </li>
                <li className="list-group-item">
                  <b>Balance: </b>
                  {user.balance}
                </li>
                <li className="list-group-item">
                  <b>Email: </b>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <b>Password: </b>
                  {user.password}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
