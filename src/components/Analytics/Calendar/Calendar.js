import React from "react";
import { DateRangePicker, DateRange } from "react-date-range";

const updateDates = (newDates, dateCounter, setStartDate, setEndDate) => {
  const { startDate, endDate } = newDates;

  if (dateCounter === 1) {
    setStartDate({ startDate, dateCounter: 0 });
    setEndDate({ endDate });
  } else {
    setStartDate(({ dateCounter }) => {
      return {
        startDate,
        dateCounter: dateCounter + 1,
      };
    });
  }
};

export const ShowCalendarBackdrop = ({ showCalendar, handleCalendar }) => {
  if (showCalendar) {
    return (
      <div
        style={{
          position: "absolute",
          zIndex: 4999,
          width: "100%",
          height: "100%",
        }}
        onClick={handleCalendar}
      ></div>
    );
  }

  return null;
};

export const CalenderInput = ({ startDate, endDate, handleCalendar }) => {
  return (
    <div className="offset-xl-10 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
      <div className="form-group">
        <input
          placeholder={`${startDate.toLocaleDateString()}-${endDate.toLocaleDateString()}`}
          className="form-control"
          type="text"
          onClick={handleCalendar}
        />
      </div>
    </div>
  )
}


export const CalendarComponent = ({
  showCalendar,
  startDateItems,
  endDateItems,
}) => {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 992);
  // RESIZE CALENDAR
  const updateMedia = () => {
    setDesktop(window.innerWidth > 992);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const { startDate, setStartDate } = startDateItems;
  const { endDate, setEndDate } = endDateItems;
  if (showCalendar && isDesktop) {
    return (
      <div
        style={{
          position: "fixed",
          zIndex: "5000",
          right: 1,
          marginRight: "10px",
        }}
      >
        <DateRangePicker
          showDateDisplay={false}
          className="form-control"
          onChange={(item) =>
            updateDates(
              item.selection,
              startDate.dateCounter,
              setStartDate,
              setEndDate
            )
          }
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={1}
          ranges={[
            {
              startDate: startDate.startDate,
              endDate: endDate.endDate,
              key: "selection",
            },
          ]}
        />
      </div>
    );
  } else if (showCalendar && !isDesktop) {
    return (
      <div
        style={{
          position: "absolute",
          zIndex: "5000",
          top: "7%",
          left: "50%",
          transform: `translate(-50%, -50%)`,
        }}
      >
        <DateRange
          editableDateInputs={true}
          onChange={(item) =>
            updateDates(
              item.selection,
              startDate.dateCounter,
              setStartDate,
              setEndDate
            )
          }
          moveRangeOnFirstSelection={false}
          ranges={[
            {
              startDate: startDate.startDate,
              endDate: endDate.endDate,
              key: "selection",
            },
          ]}
        />
      </div>
    );
  } else {
    return null;
  }
};
