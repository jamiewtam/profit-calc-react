import React from "react";

import { FaPaperPlane, FaSignOutAlt } from "react-icons/fa";

import CardContainer from "../../../Layouts/Pages/CardContainer";

import googleLogo from "./../../../assets/images/google.png";
import bingLogo from "./../../../assets/images/bing-ads-logo.png";

export const FacebookAds = () => {
  return (
    <React.Fragment>
      <CardContainer title="Facebook Ads">
        You must agree to all the permissions to sync your Facebook account with
        Profit Calc. <br />
        Profit Calc only uses these permissions to access your Ad Account IDs to
        poll your ad spend within specified date ranges.
        <br />
        <br />
        <h5 className="mb-2">
          Select Which Facebook Ad Accounts to Include in Your Dashboard
        </h5>
        <br />
        <button
          className="btn-outline-light btn-lg"
          id="submit-facebook-accounts"
        >
          <FaPaperPlane /> Update Facebook Ad Accounts
        </button>
      </CardContainer>
      <CardContainer title="Remove Facebook Ads Account">
        <button className="btn-outline-light btn-lg" id="remove-facebook">
          <FaSignOutAlt /> Remove Facebook Account
        </button>
      </CardContainer>
    </React.Fragment>
  );
};

export const GoogleAds = () => {
  return (
    <React.Fragment>
      <CardContainer title="Google Ads">
        <button className="btn-outline-light btn-lg">
          <a href="api/v1/google/go">
            <img
              src={googleLogo}
              height="30px"
              width="30px"
              border="1px"
              alt="Google Logo"
            />
            Sign in with Google
          </a>
        </button>
        <br />
        <br />
        Please Login into Google
      </CardContainer>
      <CardContainer title="Google Ads Account Id">
        <input
          className="form-control"
          type="text"
          value=""
          id="adwords-selector"
        />
        <br />
        <button className="btn-outline-light btn-lg" id="submit-adwords-id">
          <FaPaperPlane /> Update Adwords Id
        </button>

        <div className="card-body">
          1. Sign in to your Google Ads account. <br />
          2. Click the help icon in the top right corner.
          <br />
          3. Find “Customer ID” at the bottom of the menu.
        </div>
      </CardContainer>
      <CardContainer title="Remove Google Ads Account">
        <button className="btn-outline-light btn-lg" id="remove-adwords">
          <FaSignOutAlt /> Remove Google Account
        </button>
      </CardContainer>
    </React.Fragment>
  );
};

export const BingAds = () => {
  return (
    <React.Fragment>
      <CardContainer title="Bing Ads">
        <button className="btn-outline-light btn-lg">
          <a href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=a8b7d4ba-5a65-4bb6-ae40-3b0f6ad2ec23&amp;response_type=code&amp;redirect_uri=https://www.profitcalc.io/api/v1/microsoft/auth/tokens&amp;response_mode=query&amp;scope=openid%20offline_access%20https%3A%2F%2Fads.microsoft.com%2Fads.manage&amp;state=STORENAME">
            <img
              src={bingLogo}
              height="30px"
              width="30px"
              border="1px"
              alt="bing-ads-logo"
            />
            Sign in with Bing Ads (Microsoft)
          </a>
        </button>
        <br />
        <br />
        <p>Please Login into Bing Ads</p>
      </CardContainer>
      <CardContainer title="Remove Bing Ads">
        <button className="btn-outline-light btn-lg" id="remove-bing">
          <FaSignOutAlt /> Remove Bing Account
        </button>
      </CardContainer>
    </React.Fragment>
  );
};
