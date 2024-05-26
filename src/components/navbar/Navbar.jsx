// style
import { Link } from "react-router-dom"
import "./navbar.css"
// icons
import { IoNotifications, IoSearch } from "react-icons/io5"
import { CiMail } from "react-icons/ci"
import { RiBarChartHorizontalFill } from "react-icons/ri";
// img
import avatar from "../../assets/images/avatar.png"

const Navbar = ({setSidebarForMedia}) => {
  return (
    <div className='navbar'>
        <button className="navbar_menu" onClick={() => setSidebarForMedia(true)}>
          <RiBarChartHorizontalFill />
        </button>
        <div className="navbar_input">
            <span><IoSearch /></span>
            <input type="text" placeholder="Search anything" />
        </div>
        <div className="navbar_right">
          <Link to={"/"} className="navbar_right_icon">
            <span><CiMail /></span>
          </Link>
          <div className="notification">
            <Link to={"/"} className="navbar_right_icon">
              <span><IoNotifications /></span>
            </Link>
            <span className="notification_count">5</span>
          </div>
          <div className="navbar_avatar">
            <img src={avatar} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Navbar