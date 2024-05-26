// icons
import { TbSquareMinus, TbUsers } from "react-icons/tb";
// style
import "./performance.css";
import { MdOutlineShowChart } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { ImClock } from "react-icons/im";
import PerformanceBottom from "./PerformanceBottom";
import { useEffect, useRef, useState } from "react";

const Performence = () => {
      // For scroll
  const ref = useRef(null)
  const [startX, setStartX] = useState(0)
  const [startScrollLeft, setStartScrollLeft] = useState(0)
  const [myMouseDown, setMyMouseDown] = useState(false)
  
  const handleDown = (e) => {
    if(!ref.current.contains(e.target)) return;
    setMyMouseDown(true);
    setStartX(e.pageX - ref.current.offsetLeft)
    setStartScrollLeft(ref.current.scrollLeft)
  }

  const handleMove = (e) => {
    e.preventDefault();
    if (!ref.current.contains(e.target)) return;
    const mouseX = e.pageX - ref.current.offsetLeft;
    const moveX = mouseX - startX;
    if(myMouseDown){
      ref.current.scrollLeft = startScrollLeft - moveX
    }
  }
  
  const handleUp = () => {
    setMyMouseDown(false);
  }
  
  useEffect(() => {
    document.addEventListener('mouseup', handleUp);
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mousemove', handleMove);
    return () => {
      document.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mousemove', handleMove);
    }
  },[handleDown,handleMove]);
  
  const handleScroll = (e) => {
    const { scrollWidth, scrollLeft, clientWidth } = e.target;
    if (scrollLeft + clientWidth === scrollWidth){}
    if (scrollLeft === 0){}
  }
  // For scroll
  return (
    <div className='preformance'>
        <div className="preformance_header">
            <p className="title">Performance</p>
            <p className="body">Year</p>
        </div>
        <div className="preformance_chart"></div>
        <div className="preformance_descriptions"  onScroll={handleScroll} 
                    ref={ref}>
            <div className="preformance_box">
                <div className="preformance_box_icon">
                    <span><TbUsers /></span>
                </div>
                <p className="preformance_box_title">Users</p>
                <p className="preformance_box_count">72.6k</p>
                <p className="preformance_box_percent">+25%</p>
            </div>            
            <div className="preformance_box">
                <div className="preformance_box_icon orange">
                    <span><TbSquareMinus /></span>
                    <span className="l-icon"><ImClock /></span>
                </div>
                <p className="preformance_box_title">Sessions</p>
                <p className="preformance_box_count">87.2k</p>
                <p className="preformance_box_percent">+47%</p>
            </div>            
            <div className="preformance_box">
                <div className="preformance_box_icon blue">
                    <span><MdOutlineShowChart /></span>
                </div>
                <p className="preformance_box_title">Bounce Rate</p>
                <p className="preformance_box_count">26.3%</p>
                <p className="preformance_box_percent">-28%</p>
            </div>            
            <div className="preformance_box">
                <div className="preformance_box_icon green">
                    <span><FaClockRotateLeft /></span>
                </div>
                <p className="preformance_box_title">Session Duration</p>
                <p className="preformance_box_count">2m 18s</p>
                <p className="preformance_box_percent">+13%</p>
            </div>
        </div>
        <PerformanceBottom/>
    </div>
  )
}

export default Performence;