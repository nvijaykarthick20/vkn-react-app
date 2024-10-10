import { useEffect, useState } from "react";
import UserModel from "../../models/UserModel";
import { error } from "console";

export const UserTable = () => {

  const [users, setUsers] = useState<UserModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpErrors, setHttpErrors] = useState();

  const userModels: UserModel[] = [];

  useEffect(() => {

      const fetchUsers = async () => {
        const getUserUrl: string = "vknevent/v1/user/";
  
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
        setIsLoading(false);
      }

      fetchUsers().catch((error: any) => {
        setIsLoading(false);
        setHttpErrors(error.message);
      })

  }, [])

  return (
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
  );
}