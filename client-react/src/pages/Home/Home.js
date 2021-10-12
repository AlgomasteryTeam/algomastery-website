import React from 'react'
import PostList from '../../containers/PostList/PostList'
import Chat from '../../components/Chat/Chat'
import BottomNavbar from '../../shared/BottomNavbar/BottomNavbar'
import CourseList from '../../containers/CourseList/CourseList'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <CourseList />
      <Chat />
      <BottomNavbar />
    </div>
  )
}

export default Home
