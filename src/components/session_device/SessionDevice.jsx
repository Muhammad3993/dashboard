// css
import "./sessionDevice.css";
// rechart
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "DeskTop",
    uv: 8.085,
    percent: 13,
    fill: "#20C997",
  },
  {
    name: "Mobile",
    uv: 5.085,
    percent: 30,
    fill: "#FF7049",
  },
  {
    name: "Tablets",
    uv: 3.085,
    percent: 25,
    fill: "#563BFF",
  },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "54px"
};

const SessionDevice = () => {
  return (
    <div className='sessionDevice'>
      <div className="preformance_header">
        <p className="title">Sessions By Device</p>
        <p className="body">Year</p>
      </div>
      <div className="sessionDevice_chart">
        <div className="sessionDevice_chart_barchart">
          <RadialBarChart
            width={300}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={data}
          >
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#fff" }}
              background
              clockWise
              dataKey="uv"
            />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
          </RadialBarChart>
        </div>
        <div className="sessionDevice_chart_data">
          {
            data.map((item, index) => (      
              <div className="sessionDevice_chart_data_box" key={index}>
                <p className="sessionDevice_chart_data_box_name">{item.name}</p>
                <div className="sessionDevice_chart_data_box_flex">
                  <p className="sessionDevice_chart_data_box_num">{item.uv}</p>
                  <p className="sessionDevice_chart_data_box_percent">{item.percent}%</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="sessionDevice_desc">
        <div className="preformance_header">
          <p className="title">Sessions By Device</p>
        </div>
        <div className="sessionDevice_desc_channel">
          <p className="channel_title">Channel</p>
          <p className="channel_body">Traffic (%)</p>
          <p className="channel_value">Value</p>
        </div>
        <div className="sessionDevice_desc_direct">
          <p className="sessionDevice_desc_direct_title">Direct</p>
          <div className="sessionDevice_desc_direct_body">
            <div className="sessionDevice_desc_direct_body_fill" />
          </div>
          <p className="sessionDevice_desc_direct_title">23.28%</p>
        </div>
        <div className="sessionDevice_desc_direct">
          <p className="sessionDevice_desc_direct_title">Direct</p>
          <div className="sessionDevice_desc_direct_body">
            <div className="sessionDevice_desc_direct_body_fill fill_orange" />
          </div>
          <p className="sessionDevice_desc_direct_title">23.28%</p>
        </div>
        <div className="sessionDevice_desc_direct">
          <p className="sessionDevice_desc_direct_title">Direct</p>
          <div className="sessionDevice_desc_direct_body">
            <div className="sessionDevice_desc_direct_body_fill fill_green" />
          </div>
          <p className="sessionDevice_desc_direct_title">23.28%</p>
        </div>
      </div>
      <div className="sessionDevice_bottom">
        <div className="preformance_header">
          <p className="title">Sessions By Device</p>
          <p className="body">Top Region & session</p>
        </div>
        <button className="sessionDevice_btn">View</button>
      </div>
    </div>
  )
}

export default SessionDevice;