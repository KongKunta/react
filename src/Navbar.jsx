import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Navbar () {
  return (
    <div>
      <nav class="navbar navbar-expand bg-danger" >
      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon={faBars} style={{ color: "#0d0d0d" }} />
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <div class="container">
          <a href="#" class="navbar-brand">KongKunta</a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">About</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="bg-danger">
        
      </div>
    </div>
  )
}

export default Navbar