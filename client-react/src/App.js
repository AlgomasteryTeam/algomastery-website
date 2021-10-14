import MyNavbar from './shared/Navbar/Navbar'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Course from './pages/Course/Course'
import Dashboard from './pages/Dashboard/Dashboard'
import BottomNavbar from './shared/BottomNavbar/BottomNavbar'
import Pro from './pages/Pro/Pro'
import Payment from './pages/Payment/Payment'
import EnrolledCourse from './pages/EnrolledCourse/EnrolledCourse'
import EnrolledCourses from './pages/EnrolledCourses/EnrolledCourses'
import Certificate from './pages/Certificate/Certificate'
import Contact from './pages/Contact/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import Profile from './pages/Profile/Profile'
import Feedback from './pages/Feedback/Feedback'
import Editor from './pages/Code/Editor'
import Exam from './pages/Exam/Exam'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/course" component={Course} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/pro" component={Pro} />
        <Route path="/enrolled" component={EnrolledCourse} />
        <Route path="/certificate" component={Certificate} />
        <Route path="/profile" component={Profile} />
        <Route path="/yourcourses" component={EnrolledCourses} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/editor" component={Editor} />
        <Route path="/payment" component={Payment} />
        <Route path="/exam" component={Exam} />
      </Router>
    </>
  )
}

export default App
