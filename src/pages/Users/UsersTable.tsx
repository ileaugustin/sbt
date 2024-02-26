import React, { useState } from "react";
import Table from "../../components/Table";
import { User } from "./types";


type Props = {
  users: User[];
  filter: string;
}

function contains(str1: string, str2: string): boolean {
  return str1.toLocaleLowerCase().includes(str2.toLocaleLowerCase());
}

const UsersTable = ({ users, filter }: Props) => {
  const [sort, setSort] = useState("")
  const filteredData = users.filter((user: User) => {
    return (
      contains(user.name, filter) ||
      contains(user.email, filter) ||
      contains(user.username, filter) ||
      contains(user.website, filter) ||
      contains(user.company.name, filter) ||
      contains(user.company.catchPhrase, filter) ||
      contains(user.company.bs, filter) ||
      contains(user.address.city, filter) ||
      contains(user.address.street, filter) ||
      contains(user.address.suite, filter) ||
      contains(user.address.zipcode, filter)
    )
  })

  const sortedData = sort ? filteredData.sort((a, b) => {
    // @ts-ignore
    const nameA = a[sort];
    // @ts-ignore
    const nameB = b[sort];
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  }): filteredData;

  return (
    <div>
      <Table data={sortedData} handleSort={(sort) => setSort(sort)} />
    </div>
  )
}

export default UsersTable;
