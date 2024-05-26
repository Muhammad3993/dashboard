import { useEffect, useRef, useState } from "react"

const PerformanceBottom = () => {
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
    <div className='daily'>
        <div className="preformance_header">
            <p className="title">Daily Overview</p>
            <button className='preformance_header_btn'>Export</button>
        </div>
        <div className="daily_boxes"
            onScroll={handleScroll}
            ref={ref}
        >
            <div className="daily_box">
                <div className="daily_box_left">
                    <p className='daily_box_left_count'>5,461</p>
                    <p className='daily_box_left_txt'>Today</p>
                </div>
                <div className="daily_box_center">
                    <div className="daily_box_center_text">
                        USERS
                    </div>
                </div>
                <div className="daily_box_right">
                    <p className='daily_box_left_count'>8,085</p>
                    <p className='daily_box_left_txt'>Expected</p>
                </div>
            </div>

            <div className="daily_box">
                <div className="daily_box_left">
                    <p className='daily_box_left_count'>140</p>
                    <p className='daily_box_left_txt'>Today</p>
                </div>
                <div className="daily_box_center daily_box_center_orange">
                    <div className="daily_box_center_text">
                        GOALS
                    </div>
                </div>
                <div className="daily_box_right">
                    <p className='daily_box_left_count'>120</p>
                    <p className='daily_box_left_txt'>Expected</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PerformanceBottom;