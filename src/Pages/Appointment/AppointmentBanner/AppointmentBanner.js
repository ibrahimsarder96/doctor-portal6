import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBanner = () => {
  // const [selectedData, setSelectedData] = (new Date());
  return (
    <header>
      <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <DayPicker
      // mode="single"
      // selected={selectedData}
      // onSelect={setSelectedData}
      
    />
    </div>
  </div>
</div>
    </header>
  );
};

export default AppointmentBanner;