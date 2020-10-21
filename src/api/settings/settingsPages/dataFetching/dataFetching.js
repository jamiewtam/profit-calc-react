import axios from 'axios'
import Swal from "sweetalert2";

export const updateGatewaySettings = async (
    updatedShopifyFeePercentage,
    updatedPaypalFeePercentage,
    updatedStripeFeePercentage,
    updatedShopifyFeeFixed,
    updatedPaypalFeeFixed,
    updatedStripeFeeFixed,
    updatedExternalGatewayFee,
    updatedCashOnDeliveryFeeFixed,
    updatedNLGateway
) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:9000/api/v1/gatewaySettings',
            data: {
                updatedShopifyFeePercentage,
                updatedPaypalFeePercentage,
                updatedStripeFeePercentage,
                updatedShopifyFeeFixed,
                updatedPaypalFeeFixed,
                updatedStripeFeeFixed,
                updatedExternalGatewayFee,
                updatedCashOnDeliveryFeeFixed,
                updatedNLGateway
            }
        });
        if (res.data.status === 'success') {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Your Settings Have Been Updated',
                showConfirmButton: false,
                timer: 2000
            });
        }
    } catch (err) {
        console.log('error', err.response.data.message);
    }
};

export const updateSettings = async (
    updatedCashBack,
    updateAdAccountConversion,
    updateCustomOrderExp,
    updatedCurrencySymbol,
    updatedShopifyLoan,
    updatedTimeZone,
    updateExtraShopifyCostPerItem,
    updatedAdAccountBaseCurrency,
    updatedAdAccountCurrency,
    updatedAliexpressBaseCurrency,
    updatedAliexpressCurrency,
    updatedAliexpressCommaSelector,
    updatedCJBaseCurrency,
    updatedCJCurrency,
    updatedFilterByPaidSelector,
    updatedEditOrdersFrequentlySelector
) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:9000/api/v1/otherSettings',
            data: {
                updatedCashBack,
                updateAdAccountConversion,
                updateCustomOrderExp,
                updatedCurrencySymbol,
                updatedShopifyLoan,
                updatedTimeZone,
                updateExtraShopifyCostPerItem,
                updatedAdAccountBaseCurrency,
                updatedAdAccountCurrency,
                updatedAliexpressBaseCurrency,
                updatedAliexpressCurrency,
                updatedAliexpressCommaSelector,
                updatedCJBaseCurrency,
                updatedCJCurrency,
                updatedFilterByPaidSelector,
                updatedEditOrdersFrequentlySelector
            }
        });
        if (res.data.status === 'success') {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Your Settings Have Been Updated',
                showConfirmButton: false,
                timer: 2000
            });

        }
    } catch (err) {
        console.log('error', err.response.data.message);
    }
};

export const updateVATSettings = async (
    updatedVATSelector,
    updatedVATAutoShippingSelector,
    updatedManualVATPercentage,
    updatedCOGSVATSelector,
    updatedCOGSVATManualPercentage,
    updatedFacebookVATSelector,
    updatedFacebookVATManualPercentage
) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:9000/api/v1/vatSettings',
            data: {
                updatedVATSelector,
                updatedVATAutoShippingSelector,
                updatedManualVATPercentage,
                updatedCOGSVATSelector,
                updatedCOGSVATManualPercentage,
                updatedFacebookVATSelector,
                updatedFacebookVATManualPercentage
            }
        });
        if (res.data.status === 'success') {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Your VAT Settings Have Been Updated',
                showConfirmButton: false,
                timer: 2000
            });

        }
    } catch (err) {
        console.log('error', err.response.data.message);
    }
};

export const updateDashboardSettings = async (
    numberOfOrdersSelector,
    taxesCollectedSelector,
    shippingChargedSelector,
    profitMarginSelector,
    cashbackDashboardSelector,
    shopifyLoanDashboardSelector
) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:9000/api/v1/updateDashboardSettings',
            data: {
                numberOfOrdersSelector,
                taxesCollectedSelector,
                shippingChargedSelector,
                profitMarginSelector,
                cashbackDashboardSelector,
                shopifyLoanDashboardSelector
            }
        });
        if (res.data.status === 'success') {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: `Your Dashboard Settings Have Been Updated`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    } catch (err) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: `There Was An Error. Please Try Again. Please Contact Support If This Error Continues.`,
            showConfirmButton: false,
            timer: 1500
        });
    }
};