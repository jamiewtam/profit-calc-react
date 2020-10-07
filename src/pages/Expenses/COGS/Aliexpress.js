import React from "react";

import PageContainer from "../../../Layouts/Pages/PageContainer";
import CardContainer from "../../../Layouts/Pages/CardContainer";

const AliexpressCOGS = (props) => {
  return (
    <PageContainer pageTitle="Aliexpress COGS">
      <CardContainer>
        <form>
          <div className="custom-control custom-switch">
            <input
              className="custom-control-input"
              id="aliexpressSettingsSwitch"
              type="checkbox"
              checked="checked"
            />

            <label
              className="custom-control-label"
              htmlFor="aliexpressSettingsSwitch"
            >
              Include Aliexpress COGS in Dashboard
            </label>
          </div>
        </form>
      </CardContainer>

      <CardContainer>
        <div className="video">
          <iframe
            title="aliexpress-video"
            width="60%"
            height="300px"
            src="https://www.youtube.com/embed/IahKgKZsZ5k"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen=""
          ></iframe>
        </div>
        <div className="div">
          <hr />
          <p></p>
          <strong>Please note the following: </strong>
          <br />
          1) When using "Sync All" please allow 5-15 minutes for all your orders
          to sync. <br />
          2) The extension syncs your Aliexpress COGS based on the date the item
          was ordered in Aliexpress. Not the date the order was placed for the
          item in Shopify.
          <br />
          4) To sync the "Order Status" correctly. Please set your Aliexpress
          language setting to English. <br />
          5) If your Shopify store currency is different than the currency of
          your Aliexpress account. e.g. your Shopify store is in AUD but you pay
          for Aliexpress items in USD. You can add currency conversion on the
          "General Settings" page.
          <hr />
        </div>
        <br />
        <a
          className="btn-success btn-lg mb-2"
          href="https://chrome.google.com/webstore/detail/profit-calc/jgdppdfjmgeelomofklppldcemjmmlkn?hl=en"
          target="_blank"
        >
          Download the Aliexpress Chrome Extension Here
        </a>
      </CardContainer>
    </PageContainer>
  );
};

export default AliexpressCOGS;
