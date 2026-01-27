import "./Navbar.css"
import logos from "../../../public/logo.png"

function Navbar() {
  return (
    <>
    <nav>
      <div className="nav__left">
        <img className="logo__brand" src={logos} alt="" />
         <h1>Target It school</h1>
      </div>
    </nav>

    </>
  )
}

export default Navbar