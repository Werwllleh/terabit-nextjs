import "../styles/index.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Sidebar from "@/components/sidebar/sidebar";
import UsersService from "@/services/users.service";

export const metadata = {
  title: "Тестовое TERABIT | Главная",
  description: "Главная",
};


export default async function RootLayout({children}) {

  const users = await UsersService.getUsers();

  return (
    <html lang="ru">
    <body className="body">
    <main className="main">
      <Header/>
      <div className="page">
        <div className="container">
          <div className="page__flex">
            {users.data.length > 0 && (
              <div className="page__flex_sidebar">
                <Sidebar links={users.data}/>
              </div>
            )}
            <div className="page__flex_content">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
    </body>
    </html>
  );
}
