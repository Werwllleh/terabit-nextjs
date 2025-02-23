import "../styles/index.scss";
import UsersService from "@/services/users.service";
import ClientLayout from "@/components/client-layout";

export const metadata = {
  title: "Тестовое TERABIT | Главная",
  description: "Главная",
};

export default async function RootLayout({children}) {

  const users = await UsersService.getUsers();

  return <ClientLayout users={users.data}>{children}</ClientLayout>;
}
