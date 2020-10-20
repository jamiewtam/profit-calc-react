export const formatDecimals = (amount) => {
    return amount.toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};