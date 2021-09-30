import React from 'react'
import PostList from '../../containers/PostList/PostList'
import Chat from '../../components/Chat/Chat'
import BottomNavbar from '../../shared/BottomNavbar/BottomNavbar'


const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Chat />
      <BottomNavbar />
    </div>
  )
}

export default Home
