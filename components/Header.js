import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link {router.pathname == '/' ? 'active' : ''}" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link {router.pathname == '/signup' ? 'active' : ''}" href="/signup">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link {router.pathname == '/signin' ? 'active' : ''}" href="/signin">Sign In</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link {router.pathname == '/listing' ? 'active' : ''}" href="/listing">Listing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link {router.pathname == '/update' ? 'active' : ''}" href="/update">Update</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
