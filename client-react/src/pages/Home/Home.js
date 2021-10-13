import React from 'react'
import PostList from '../../containers/PostList/PostList'
import Chat from '../../components/Chat/Chat'
import BottomNavbar from '../../shared/BottomNavbar/BottomNavbar'
import CourseList from '../../containers/CourseList/CourseList'
import { toast } from 'react-toastify'

const Home = () => {

  const handleChatIconClick = () => {
    toast.success('hi')
    console.log('chat icon clicked')
  }

  return (
    <div>
      <h2>Home</h2>
      <CourseList />
      <Chat onClick={handleChatIconClick} />
      <BottomNavbar />
    </div>
  )
}

export default Home
