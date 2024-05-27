// icons
import { BiCoinStack } from "react-icons/bi"
import { CiCalendar, CiMail } from "react-icons/ci"
import { FiShoppingCart } from "react-icons/fi"
import { IoMdHome } from "react-icons/io"
import { LuLayout, LuStopCircle } from "react-icons/lu"
import { MdOutlineShowChart } from "react-icons/md"
import { PiCopy, PiDotsThreeCircleBold } from "react-icons/pi"
import { RiBarChartHorizontalFill } from "react-icons/ri"
import { TiMessage } from "react-icons/ti"
import { VscCircle, VscCircleLarge } from "react-icons/vsc"
// style
import "./sidebar.css"
// react-router-dom
import { NavLink } from "react-router-dom"

const Sidebar = ({sidebar, setSidebar, sidebarForMedia, setSidebarForMedia}) => {
    const handleMenu = () => setSidebar(!sidebar);
  return (
    <div className={sidebarForMedia ? "side_bar sidebarForMedia" : "side_bar"}>
        <div className={!sidebar ? 'sidebar sidebar_length' : 'sidebar'}>
            <button className="sidebar_menu" onClick={handleMenu}>
                <RiBarChartHorizontalFill />
            </button>
            <div className="sidebar_links">
                <NavLink to={"/"} className="sidebar_link">
                    <span className="sidebar_icon"><IoMdHome /></span>
                    <span className="sidebar_txt">Home</span>
                </NavLink>           
                <NavLink to={"/q"} className="sidebar_link">
                    <span className="sidebar_icon"><LuLayout /></span>
                    <span className="sidebar_txt">Layouts</span>
                </NavLink>            
                <NavLink to={"/w"} className="sidebar_link">
                    <span className="sidebar_icon"><MdOutlineShowChart /></span>
                    <span className="sidebar_txt">Charts</span>
                </NavLink>            
                <NavLink to={"/e"} className="sidebar_link">
                    <span className="sidebar_icon"><BiCoinStack /></span>
                    <span className="sidebar_txt">Coins</span>
                </NavLink>            
                <NavLink to={"/r"} className="sidebar_link">
                    <span className="sidebar_icon"><PiCopy /></span>
                    <span className={sidebar ? "sidebar_txt sidebar_txt_none" : "sidebar_txt"}>Files</span>
                </NavLink>      
                <NavLink to={"/t"} className="sidebar_link">
                    <span className="sidebar_icon"><CiMail /></span>
                    <span className={sidebar ? "sidebar_txt sidebar_txt_none" : "sidebar_txt"}>Mail</span>
                </NavLink>  
                <NavLink to={"/y"} className="sidebar_link">
                    <span className="sidebar_icon"><TiMessage /></span>
                    <span className={sidebar ? "sidebar_txt sidebar_txt_none" : "sidebar_txt"}>Message</span>
                </NavLink>         
                <NavLink to={"/u"} className="sidebar_link">
                    <span className="sidebar_icon"><FiShoppingCart /></span>
                    <span className={sidebar ? "sidebar_txt sidebar_txt_none" : "sidebar_txt"}>Cart</span>
                </NavLink>
                <NavLink to={"/i"} className="sidebar_link">
                    <span className="sidebar_icon"><PiDotsThreeCircleBold /></span>
                    <span className={sidebar ? "sidebar_txt sidebar_txt_none" : "sidebar_txt"}>Name</span>
                </NavLink>           
                <NavLink to={"/i"} className="sidebar_link">
                    <div className="sidebar_icon">
                        <span className="createIcon"><VscCircleLarge /></span>
                        <span className="l-circle"><VscCircle /></span>
                    </div>
                    <span className={sidebar ? "sidebar_txt sidebar_txt_none" : "sidebar_txt"}>Name</span>
                </NavLink>      
                <NavLink to={"/o"} className="sidebar_link">
                    <span className="sidebar_icon"><CiCalendar /></span>
                    <span className={sidebar ? "sidebar_txt sidebar_txt_none" : "sidebar_txt"}>Calendar</span>
                </NavLink>
            </div>
        </div>
        <div className={!sidebar ? "sidebar_free sidebar_free_fill" : "sidebar_free"}></div>
        <div className={!sidebar ? `overlay ${sidebarForMedia ? "none" : ""}` : "overlay_side"} onClick={() => setSidebarForMedia(false)}></div>
    </div>
  )
}

export default Sidebar;