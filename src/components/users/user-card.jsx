'use client';
import cn from './users.module.scss';
import Link from "next/link";
import {DribbbleCircleFilled, MailFilled, PhoneFilled} from "@ant-design/icons";

export default function UserCard({userData}) {

  return (
    <>
      <div className={cn.userCard}>
        <div className={cn.userCard__body}>
          <div className={cn.userCard__contacts}>
            <h1>{userData.name} <span>({userData.username})</span></h1>
            <div className={cn.userCard__contacts_container}>
              <Link href={`tel:+${userData.phone}`} className={cn.userCard__contacts_phone}><PhoneFilled/></Link>
              <Link href={`mailto:${userData.email}`} className={cn.userCard__contacts_email}><MailFilled/></Link>
              <Link href={userData.website} target={"_blank"} className={cn.userCard__contacts_site}>
                <DribbbleCircleFilled/>
              </Link>
            </div>
          </div>
          <div className={cn.userCard__body_flex}>
            <div className={cn.userCard__company}>
              <h2>Company</h2>
              <ul>
                {Object.keys(userData.company).length > 0 && Object.entries(userData.company).map(item => {
                  return (
                    <li key={item[0]}>
                      <span>{item[0]}:</span>
                      <span>{item[1]}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={cn.userCard__address}>
              <h2>Address</h2>
              <Link
                href={`https://yandex.ru/maps/?whatshere[point]=${userData.address.geo.lng},${userData.address.geo.lat}&whatshere[zoom]=17`}
                target={"_blank"}
                className={cn.userCard__address_link}
              >
                {
                  `${userData.address.city}, 
                ${userData.address.street}, 
                ${userData.address.suite}, 
                ${userData.address.zipcode}`
                }
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={cn.userCard__back_button}>
        <Link className="style-btn" href={"/"}>Назад</Link>
      </div>
    </>
  )
}
