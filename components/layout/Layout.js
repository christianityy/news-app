import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
  return (
    <div className="layout">
      <MainNavigation />
      <ToastContainer />
      <div className="container">{props.children}</div>
    </div>
  )
}

export default Layout
