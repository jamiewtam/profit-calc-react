import React from 'react';
import moment from 'moment';
import momentTimeZone from 'moment-timezone';

import { userContext } from '../Context/userContext';


export const getMonthAndYear = (date) => (moment(date).add(2, 'day').format('MMM YYYY'))

export const getFullFormattedDate = (date, timeZone) => {
    return moment(date)
        .tz(timeZone)
        .format('DD MMM YYYY')
}
