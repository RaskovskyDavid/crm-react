import { Outlet } from "react-router-dom"

const IniciarSesion = () => {
  return (
    <div>
      <h1>Desde inicio de sesion</h1>
      <Outlet/>
    </div>
  )
}

export default IniciarSesion
