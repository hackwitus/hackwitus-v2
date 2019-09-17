import React, { useState } from 'react';
import WidgetBot from '@widgetbot/react-embed';

import './style.scss';

const DiscordWidget = () => {
  const [show, setShow] = useState(true);
  const toggleWidget = () => {
    setShow(!show);
  }
  return (
    <div className="discord-widget" style={{height: show ? '42rem' : '5rem'}}>
      <button className="discord-widget__toggle" onClick={toggleWidget}>{show ? "Close Widget" : "Open Widget"}</button>
      <WidgetBot
        style={{height: '42rem', display: show ? 'block' : 'none'}}
        server={process.env.REACT_APP_SERVER_ID}
        channel={process.env.REACT_APP_CHANNEL_ID}
        shard={process.env.REACT_APP_SHARD_URL}
      />
    </div>
  );
}

export default DiscordWidget
