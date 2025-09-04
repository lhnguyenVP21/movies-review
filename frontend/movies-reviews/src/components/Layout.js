import {Outlet} from 'react-router-dom';
import React from 'react'

const Layout = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Outlet/>
    </main>
  )
}

export default Layout