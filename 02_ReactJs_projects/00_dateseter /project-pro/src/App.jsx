import React, { useState } from 'react';
import { format, addDays, addWeeks, addMonths, addYears } from 'date-fns';

const DatePicker = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [recurrence, setRecurrence] = useState('none');
  const [customRecurrence, setCustomRecurrence] = useState(1);

  // Handle date selection
  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setSelectedDate(date);
    onDateSelect(date);
  };

  // Generate recurring dates based on selected date and recurrence
  const getRecurringDates = () => {
    if (!selectedDate) return [];

    const recurringDates = [selectedDate];
    if (recurrence === 'daily') {
      for (let i = 1; i < customRecurrence; i++) {
        recurringDates.push(addDays(selectedDate, i));
      }
    } else if (recurrence === 'weekly') {
      for (let i = 1; i < customRecurrence; i++) {
        recurringDates.push(addWeeks(selectedDate, i));
      }
    } else if (recurrence === 'monthly') {
      for (let i = 1; i < customRecurrence; i++) {
        recurringDates.push(addMonths(selectedDate, i));
      }
    } else if (recurrence === 'yearly') {
      for (let i = 1; i < customRecurrence; i++) {
        recurringDates.push(addYears(selectedDate, i));
      }
    }
    return recurringDates;
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg space-y-4">
      {/* Date Picker */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Select a Date</label>
        <input
          type="date"
          onChange={handleDateChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      {/* Recurrence Options */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Recurrence</label>
        <select
          value={recurrence}
          onChange={(e) => setRecurrence(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        >
          <option value="none">None</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      {/* Custom Recurrence Input */}
      {recurrence === 'custom' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Custom Recurrence Interval (e.g., every X days/weeks/months/years)</label>
          <input
            type="number"
            value={customRecurrence}
            onChange={(e) => setCustomRecurrence(Number(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      )}

      {/* Display Recurring Dates */}
      {selectedDate && (
        <div>
          <h3 className="text-md font-semibold">Recurring Dates:</h3>
          <ul className="list-disc pl-5">
            {getRecurringDates().map((date, index) => (
              <li key={index}>{format(date, 'MM/dd/yyyy')}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
