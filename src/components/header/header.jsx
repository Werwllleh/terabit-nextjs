import cn from './header.module.scss';
import Link from "next/link";


export default function Header() {


  return (
    <header className={cn.header}>
      <div className="container">
        <div className={cn.header__body}>
          <Link className={cn.header__logo} href="/">TEST TASK</Link>
          <nav className={cn.header__nav}>
            <ul className={cn.header__list}>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
