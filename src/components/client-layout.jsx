'use client'
import {useEffect} from "react";
import useUsersStore from "@/store/users.store";
import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
import Footer from "@/components/footer/footer";
import {usePathname} from "next/navigation";


export default function ClientLayout({users, children}) {
  const pathname = usePathname();
  const {setUsers} = useUsersStore();

  useEffect(() => {
    setUsers(users);
  }, [users, setUsers]);

  return (
    <html lang="ru">
    <body className="body">
    <main className="main">
      <Header/>
      <div className="page">
        <div className="container">
          <div className="page__flex">
            {pathname !== '/' && users.length > 0 && (
              <div className="page__flex_sidebar">
                <Sidebar/>
              </div>
            )}
            <div className="page__flex_content">{children}</div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
    </body>
    </html>
  );
}
