export const formatDecimals = (amount) => {
    return amount.toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};

export const formatPercentage = (amount) => {
    return `${(amount * 100).toFixed(2)}%`
}