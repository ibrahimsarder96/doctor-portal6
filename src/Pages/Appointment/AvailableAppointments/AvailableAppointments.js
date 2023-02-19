
import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({selectedDate}) => {
  return (
    <div className='my-28'>
    <h1 className='text-secondary  text-bold text-center text-xl my-24'>Available Services on  {format(date, 'PP')}</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        services?.map(service => <Service
        key={service._id}
        service={service}
        setTreatment={setTreatment}
        ></Service>)
      }
    </div>
  { treatment && <BookingModal 
  treatment={treatment}
  date={date}
  refetch={refetch}
  setTreatment={setTreatment}
  ></BookingModal>}
  </div>
  );
};

export default AvailableAppointments;