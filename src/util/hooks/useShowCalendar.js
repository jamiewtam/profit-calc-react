import React from 'react';

export const useShowCalendar = () => {
    const [showCalendar, setShowCalendar] = React.useState(false);

    const handleCalendar = () => {
        setShowCalendar((prevState) => {
            return !prevState;
        });
    };

    return [showCalendar, handleCalendar]
}