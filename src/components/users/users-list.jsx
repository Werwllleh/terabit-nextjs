'use client';

import {useEffect, useState} from "react";
import UsersService from "@/services/users.service";
import cn from './users.module.scss';
import Link from "next/link";

export default function UsersList() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    UsersService.getUsers().then(res => {
      if (res.status === 200 && res.data.length) {
        setUsers(res.data);
        setLoading(false);
      } else {
        setUsers([]);
        setLoading(true);
        setError(true);
      }
    });

  }, [])

  return (
    <>
      {error && <div>Error(</div>}
      {loading && users.length === 0 && <div>Loading...</div>}
      {!loading && users.length > 0 && (
        <ul className={cn.userList}>
          {users.map((user) => (
            <li key={user.id} className={cn.userList__item}>
              <h4>{user.name}</h4>
              <Link className={cn.userList__link} href={`/${user.id}`} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
