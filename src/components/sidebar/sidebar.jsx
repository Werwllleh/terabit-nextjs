'use client';
import cn from './sidebar.module.scss';
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Sidebar({links}) {

  const pathname = usePathname()

  return (
    <div className={cn.sidebar}>
      <nav className={cn.sidebar__body}>
        <ul className={cn.sidebar__list}>
          {links.length > 0 && links.map(link => (
            <li key={link.id}
                className={`${cn.sidebar__item} ${pathname === `/${String(link.id)}` ? cn.sidebar__item_active : ''}`}>
              <Link
                className={cn.sidebar__link}
                href={String(link.id)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
