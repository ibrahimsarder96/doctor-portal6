import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png';
const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
 
  return (
    <header>
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: 'cover'
      }}  
     className="hero min-h-screen ">
    <div className="hero-content flex-col lg:flex-row-reverse xl:max-w-screen-2xl ">
    <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div className='text-accent pr-24'>
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
    />
    </div>
  </div>
</div>
    </header>
  );
};

export default AppointmentBanner;