import React, { useState } from "react";
import {useQuery} from "react-query";
import Input from '../../components/Input';
import {User} from "./types";
import UsersTable from "./UsersTable";

const endpoint = "https://jsonplaceholder.typicode.com/users";

async function getUsers(): Promise<User[]> {
  const response = await fetch(endpoint);
  const users = await response.json();
  return users;
}

const Users = () => {
  const [filter, setFilter] = useState("")
  const { data, isLoading } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: async () => {
      return await getUsers();
    },
  });

  const onFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  return (
    <div className="app">
      <div className="input-container">
        <Input value={filter} onChange={onFilter} />
      </div>
      {isLoading || !data ? (
        <div>loading</div>
      ): (
        <UsersTable users={data} filter={filter} />
      )}
    </div>
  )
}

export default Users;
