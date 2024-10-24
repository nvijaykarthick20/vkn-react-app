import { useEffect, useState } from "react";
import UserModel from "../../models/UserModel";
import { error } from "console";
import { SpinnerLoading } from "../common/SpinnerLoading";

export const UserTable = () => {

  const [users, setUsers] = useState<UserModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('');

  const userModels: UserModel[] = [];

  useEffect(() => {

    if (isLoading) {
      <SpinnerLoading />
    }

    const fetchUsers = async () => {
      setIsLoading(false);
      let getUserUrl: string = "";

      if (keyword !== '') {
        getUserUrl = `vknevent/v1/user?keyword=${keyword}`;
      } else {
        getUserUrl = `vknevent/v1/user`;
      }

      const response = await fetch(getUserUrl);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseJson = await response.json();

      for (const i in responseJson) {
        const user: UserModel = new UserModel();
        const responseKey = responseJson[i];
        user.userName = responseKey.userName;
        user.firstName = responseKey.firstName;
        user.lastName = responseKey.lastName;
        user.role = responseKey.role;
        user.gender = responseKey.gender;
        user.email = responseKey.email;
        user.dob = responseKey.dob;
        user.address = responseKey.address;
        userModels.push(user);
      }
      setUsers(userModels);
    }

    fetchUsers().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    })

  }, [search])

  const searchHandleChange = () => {
    setSearch(keyword);
  }

  if (httpError) {
    return (
      <div className='container m-5'>
        <p>{httpError}</p>
      </div>
    )
  }

  return (
    <div>
      <div className='d-flex'>
        <input id="user-search-id" className='form-control me-2' type='search'
          placeholder='Search' aria-labelledby='Search'
          onChange={e => setKeyword(e.target.value)}
        />
        <button className='btn btn-outline-success'
          onClick={() => searchHandleChange()}
        >
          Search
        </button>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope='col'>User Name</th>
            <th scope='col'>Role</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Gender</th>
            <th scope='col'>Email</th>
            <th scope='col'>Date of birth</th>
            <th scope='col'>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.userName}</td>
              <td>{user.role}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.address}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  );
}