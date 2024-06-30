import { useState } from 'react';
import { DarkModeToggle } from './DarkModeToggle';
import { ChannelChooser } from './Trailers/ChannelChooser';

function BootStrap() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="container">
      <DarkModeToggle />
      <div className="container">
        <ChannelChooser />
      </div>
    </div>
  );
}

export default BootStrap;
