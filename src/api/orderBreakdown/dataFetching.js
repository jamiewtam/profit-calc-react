import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import formatDateDiff from "../dashboard/calculations/monthlyExpDateDifference";


const renderOrderReportDataRedis = async (
    startDateUnformatted,
    endDateUnformatted,
    storeName
) => {

    const startDate = moment(startDateUnformatted).format('YYYY-MM-DDTHH:mm:ss');
    const endDate = moment(endDateUnformatted).format('YYYY-MM-DDTHH:mm:ss');

    let res;
    try {
        res = await axios({
            method: 'POST',
            url: 'http://localhost:9000/api/v1/createBasicRedisJob',
            data: {
                type: 'orderReport',
                startDate,
                endDate,
                storeName
            }
        });

        const jobId = res.data.id;

        let finalResult;

        const checkDataRedis = async id => {
            let redisResult;
            try {
                redisResult = await axios({
                    method: 'POST',
                    url: `http://localhost:9000/api/v1/job/${id}`,
                    data: {
                        type: 'orderReport'
                    }
                });
            } catch (err) {
                console.log('error', err.response.data.message);
            }

            if (
                redisResult.data.state === 'completed' &&
                redisResult.data.data !== null
            ) {
                finalResult = redisResult.data;
            } else if (redisResult.data.state === 'failed') {
                throw new Error();
            } else {
                await checkDataRedis(id);
            }
        };

        await checkDataRedis(jobId);

        if (finalResult.state === 'completed') {
            const finalOrderArr = finalResult.data.finalOrderObjArr;

            return finalOrderArr.map(el => {
                return {
                    orderNumber: el.orderNumber,
                    products: el.products,
                    revenue: el.revenue,
                    cogs: el.cogs,
                    date: el.date,
                    profit: el.profit,
                    profitMargin: el.profitMargin,
                    transactionFees: el.transactionFees,
                    shipping: el.shipping,
                    tax: el.tax,
                    refunds: el.refunds,
                }
            });
        }
    } catch (err) {
        // Swal.fire({
        //     icon: 'error',
        //     title: 'Error',
        //     text: 'There was an error fetching your order information'
        // });
    }
};

export default renderOrderReportDataRedis