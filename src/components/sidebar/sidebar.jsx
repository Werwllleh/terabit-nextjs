'use client';
import cn from './sidebar.module.scss';
import Link from "next/link";
import {usePathname} from "next/navigation";
import useUsersStore from "@/store/users.store";

export default function Sidebar() {

  const pathname = usePathname();

  const {users} = useUsersStore();

  return (
    <div className={cn.sidebar}>
      <nav className={cn.sidebar__body}>
        <ul className={cn.sidebar__list}>
          {users.length > 0 && users.map(user => (
            <li key={user.id}
                className={`${cn.sidebar__item} ${pathname === `/${String(user.id)}` ? cn.sidebar__item_active : ''}`}>
              <Link
                className={cn.sidebar__link}
                href={String(user.id)}
              >
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
