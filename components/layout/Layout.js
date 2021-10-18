import MainNavigation from './MainNavigation'

const Layout = (props) => {
  return (
    <div className="layout">
      <MainNavigation />
      <div className="container">{props.children}</div>
    </div>
  )
}

export default Layout
