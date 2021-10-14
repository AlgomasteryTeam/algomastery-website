import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'
import './Home.css'

const Home = () => {

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768, maxWidth: 1440 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 430, maxWidth: 768 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 300, maxWidth: 430 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }

  return (

    <div>
      <h2>Home</h2>
      <Desktop>
        <img className="home-education-image-desktop" src="assets/images/education.jpg" alt="Education" />
      </Desktop>
      <Tablet>
        <img className="home-education-image-tablet" src="assets/images/education.jpg" alt="Education" />
      </Tablet>
      <Mobile>
        <img className="home-education-image-mobile" src="assets/images/education.jpg" alt="Education" />
      </Mobile>

      {/* <Chat />
      <BottomNavbar />
       */}
    </div>
  )
}

export default Home
