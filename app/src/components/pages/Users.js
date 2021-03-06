import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Header from '../organisms/Header'
import Sidebar from '../organisms/Sidebar'
import UserList from '../organisms/Users/UserList'
import useGetAccount from '../hooks/useGetAccount'
import { getUsers } from '../../queries/user';




export default () => {
  const { loading, users } = getUsers();

  const connectedAddress = useGetAccount()

  const main = loading ? 'loading' : <UserList users={users} connectedAddress={connectedAddress} />
  return (
    <MainLayout
      header={<Header />}
      sidebar={<Sidebar selectedAddress={connectedAddress} />}
      main={main}
    />
  )
}