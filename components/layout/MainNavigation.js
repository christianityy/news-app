import Link from 'next/link'
const MainNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg px-4 navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link mx-4 text-uppercase">Public</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin">
              <a className="nav-link mx-4 text-uppercase">Admim</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default MainNavigation
