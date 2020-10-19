import React from 'react';

import CardContainer from '../../Layouts/Pages/CardContainer';

const IndividualMonthlyExpense = ({ monthlyExpenses }) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    console.log('monthlyExpenses:', monthlyExpenses)
    return monthlyExpenses.map((monthlyExpense) => {
        const { expenseDate, name, amount, _id } = monthlyExpense
        const expenseMonth = monthNames[new Date(expenseDate).getMonth()]
        const expenseYear = new Date(expenseDate).getFullYear()

        return (
            <tr key={_id} className="table-row">
                <td style={{ width: '20%' }}>{`${expenseMonth} ${expenseYear}`}</td>
                <td style={{ width: '30%' }}>{name}</td>
                <td style={{ width: '30%' }}><input value={amount} /></td>
                <td style={{ width: '20%' }}>
                    <button className="btn btn-outline-dark .btn-lg">
                        Edit
                    </button>
                    <button className="btn btn-outline-danger .btn-lg">
                        Delete
                    </button>
                </td>
            </tr>
        )
    })

}

const MonthlyExpenseTable = ({ monthlyExpenses }) => {
    return (
        <CardContainer title="Monthly Expenses">
            <div className="table-responsive" id="exp-table-body">
                <table className="table table-bordered first">
                    <thead className="thead-dark">
                        <tr>
                            <th>Date</th>
                            <th>Expense Name</th>
                            <th>Amount</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody id="expense-table-body">
                        <IndividualMonthlyExpense monthlyExpenses={monthlyExpenses} />
                    </tbody>
                </table>
            </div>

        </CardContainer >
    )
}

export default MonthlyExpenseTable