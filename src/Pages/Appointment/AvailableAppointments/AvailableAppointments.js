
import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({selectedDate}) => {
  return (
    <div>
      <p className='text-center text-primary font-bold'>You have selected date: {format(selectedDate, 'PP')}</p>
    </div>
  );
};

export default AvailableAppointments;