import "./sessionDevice.css";

const SessionDevice = () => {
  return (
    <div className='sessionDevice'>
      <div className="preformance_header">
        <p className="title">Sessions By Device</p>
        <p className="body">Year</p>
      </div>
      <div className="sessionDevice_chart"></div>
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