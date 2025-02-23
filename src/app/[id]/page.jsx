import UserCard from "@/components/users/user-card";
import UsersService from "@/services/users.service";
import Link from "next/link";

export const metadata = {
  title: "Тестовое TERABIT | Пользователь",
  description: "Пользователь",
};

export default async function UserPage({params}) {

  const id = (await params).id
  const userInfo = await UsersService.getUserInfo(id);

  return (
    <div className="user-page">
      <div className="user-page__info">
        {Object.keys(userInfo.data).length === 0 && (
          <div>Пользователь не найден</div>
        )}
        {Object.keys(userInfo.data).length !== 0 && <UserCard userData={userInfo.data}/>}
      </div>
    </div>
  )
}
