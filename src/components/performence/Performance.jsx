import React from 'react';
// chart
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    pv: 14000,
  },
  {
    name: 'Feb',
    pv: 11300,
  },
  {
    name: 'Mar',
    pv: 17800,
  },
  {
    name: 'Apr',
    pv: 11900,
  },
  {
    name: 'May',
    pv: 13000,
  },
  {
    name: 'Jun',
    pv: 8000,
  },
  {
    name: 'Jul',
    pv: 8000,
  },  
  {
    name: 'Aug',
    pv: 13500,
  },  
  {
    name: 'Sep',
    pv: 9000,
  },  
  {
    name: 'Oct',
    pv: 18000,
  },  
  {
    name: 'Nov',
    pv: 12500,
  },  
  {
    name: 'Dec',
    pv: 15300,
  }
];




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

  // For chart
  const [opacity, setOpacity] = useState({ pv: 1 });
  const [activeTick, setActiveTick] = useState('');

  const handleMouseEnter = (dataKey) => setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  const handleMouseLeave = (dataKey) => setOpacity((op) => ({ ...op, [dataKey]: 1 }));

  
  return (
    <div className='preformance'>
        <div className="preformance_header">
            <p className="title">Performance</p>
            <p className="body">Year</p>
        </div>
        <div className="preformance_chart">
          <div className="preformance_chart_text">
            <div className='preformance_chart_dot'/>
            <p>Current Period</p>
          </div>
          <div style={{ width: '100%' }}>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 15,
                  right: 10,
                  left: 10,
                }}
              >
                <XAxis 
                  dataKey="name" 
                  tick={(props) => (
                    <CustomXAxisTick 
                      {...props} 
                      active={props.payload.value === activeTick} 
                    />
                  )} 
                />
                <Tooltip 
                  content={(props) => (
                    <CustomTooltip 
                      {...props} 
                      onSetActiveTick={setActiveTick} 
                    />
                  )} 
                />
                <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                <Line type="natural" dataKey="pv" strokeWidth={5} strokeOpacity={opacity.pv} dot={false}  stroke="#563BFF" activeDot={{ r: 8 }}  />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="preformance_descriptions" 
          onScroll={handleScroll} 
          ref={ref}
          >
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

const CustomTooltip = ({ active, payload, label, onSetActiveTick }) => {
  if (active && payload && payload.length) {
    onSetActiveTick(label); // Etkin etiketi güncelle
    return (
      <div className="custom-tooltip">
        <p className="desc">Users</p>
        <p className="label">{payload[0].value / 1000}k</p>
      </div>
    );
  }

  onSetActiveTick(''); // Tooltip aktif değilken aktif etiketi temizle
  return null;
};


const CustomXAxisTick = ({ x, y, payload, active }) => {
  return (
    <text
      x={x}
      y={y}
      fill={active ? '#4E4E4E' : '#A3ABBD'}
      textAnchor="middle"
      className="recharts-text recharts-cartesian-axis-tick-value"
    >
      <tspan x={x} dy="0.71em">{payload.value}</tspan>
    </text>
  );
};