import Swal from "sweetalert2";
import axios from "axios";

export const updateCOGSRoute = async (
  productVariantID,
  newProductCost,
  newProductShippingCost
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/updateManualCOGS",
      data: {
        productVariantID,
        newProductCost,
        newProductShippingCost,
      },
    });
    if (res.data.status === "success") {
      // Fire the alert
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Product Cost is Now: $ ${res.data.data.newProductCost}. Product Shipping Cost is Now: $${res.data.data.newProductShippingCost}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

// GET ALL COGS

export const getAllManualCOGS = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:9000/api/v1/getAllManualCOGS",
    });
    if (res.data.status === "success") {
      return res.data.allManualCOGS;
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

// SEND AXIOS REQUEST TO SYNC ALL PRODUCTS --------------------

export const syncAllProductsRedis = async (storeName) => {
  let res;
  try {
    res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/createSyncShopifyCOGSData",
      data: {
        type: "syncAllProducts",
        storeName,
      },
    });

    const jobId = res.data.id;

    let finalResult;

    const checkDataRedis = async (id) => {
      let redisResult;
      try {
        redisResult = await axios({
          method: "POST",
          url: `http://localhost:9000/api/v1/job/${id}`,
          data: {
            type: "syncAllProducts",
          },
        });
      } catch (err) {
        console.log("error", err.response.data.message);
      }

      if (
        redisResult.data.state === "completed" &&
        redisResult.data.data !== null
      ) {
        finalResult = redisResult.data;
      } else if (redisResult.data.state === "failed") {
        throw new Error();
      } else {
        await checkDataRedis(id);
      }
    };

    await checkDataRedis(jobId);

    if (finalResult.state === "completed") {
      // Fire the alert
      Swal.fire({
        position: "top",
        icon: "success",
        title: `All Products Synced.`,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "There was an error.",
      text: " Please Try Re-syncing Your Products",
    });
  }
};

// SEND AXIOS REQUEST TO SYNC ALL PRODUCT COSTS --------------------

export const syncAllShopifyCostPerItemRedis = async (storeName) => {
  let res;
  try {
    res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/createSyncShopifyCOGSData",
      data: {
        type: "syncShopifyCostPerItems",
        storeName,
      },
    });

    const jobId = res.data.id;

    let finalResult;

    const checkDataRedis = async (id) => {
      let redisResult;
      try {
        redisResult = await axios({
          method: "POST",
          url: `http://localhost:9000/api/v1/job/${id}`,
          data: {
            type: "syncShopifyCostPerItems",
          },
        });
      } catch (err) {
        console.log("error", err.response.data.message);
      }

      if (
        redisResult.data.state === "completed" &&
        redisResult.data.data !== null
      ) {
        finalResult = redisResult.data;
      } else if (redisResult.data.state === "failed") {
        throw new Error();
      } else {
        await checkDataRedis(id);
      }
    };

    await checkDataRedis(jobId);

    if (finalResult.state === "completed") {
      // Fire the alert
      Swal.fire({
        position: "top",
        icon: "success",
        title: `All Shopify Cost Per Items Synced.`,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "There was an error.",
      text: " Please Try Re-syncing Your Products",
    });
  }
};

// UPDATE COGS BY DATE TOGGLE

export const toggleCOGSByDate = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:9000/api/v1/updateCOGSByDateToggle",
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Your Settings Have Been Changed`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

export const toggleManualCOGS = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:9000/api/v1/updateManualCOGS",
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Your Settings Have Been Changed`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};
