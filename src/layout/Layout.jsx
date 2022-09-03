import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <h1>desde layout </h1>
      <Outlet/>
      <p>Despues de outlet</p>
    </div>
  )
}

export default Layout
