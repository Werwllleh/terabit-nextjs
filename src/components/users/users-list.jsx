'use client';

import cn from './users.module.scss';
import Link from "next/link";
import useUsersStore from "@/store/users.store";

export default function UsersList() {

  const {users} = useUsersStore();

  return (
    <>
      {users.length > 0 && (
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
