import React from 'react';
import moment from 'moment';

import { userContext } from '../../../util/Context/userContext';
import { getFullFormattedDate } from '../../../util/formatting/formatDates';
import { formatDecimals } from '../../../util/formatting/formatDecimals';


const Orders = ({ state }) => {
    const { timeZone } = React.useContext(userContext)

    return state.map((order) => {
        const { orderNumber, date, products, revenue, cogs, refunds, shipping, tax, transactionFees, profitMargin, profit } = order

        const formattedDate = getFullFormattedDate(date, timeZone)

        return (
            <tr className="table-row" key={orderNumber}>
                <td >{orderNumber}</td>
                <td >{formattedDate}</td>
                <td >{products}</td>
                <td >{formatDecimals(revenue)}</td>
                <td >{formatDecimals(cogs)}</td>
                <td >{formatDecimals(refunds)}</td>
                <td >{formatDecimals(shipping)}</td>
                <td >{formatDecimals(tax)}</td>
                <td >{formatDecimals(transactionFees)}</td>
                <td >{profitMargin}%</td>
                <td ><strong>{formatDecimals(profit)}</strong></td>

            </tr >
        )
    })


}

export default Orders