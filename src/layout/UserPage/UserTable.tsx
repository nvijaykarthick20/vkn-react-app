import { useEffect, useState } from "react";
import UserModel from "../../models/UserModel";
import { error } from "console";
import { SpinnerLoading } from "../common/SpinnerLoading";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

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
    <div className="User">
      <DataTable value={users} tableStyle={{ minWidth: '50rem' }}>
        <Column field="userName" header="User Name"></Column>
        <Column field="firstName" header="First Name"></Column>
        <Column field="lastName" header="Last Name"></Column>
        <Column field="role" header="Role"></Column>
        <Column field="gender" header="Gender"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="dob" header="DOB"></Column>
        <Column field="address" header="Address"></Column>
      </DataTable>
    </div>
  );
}