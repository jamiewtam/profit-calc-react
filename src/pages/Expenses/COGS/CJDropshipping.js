import React from "react";

import { FaPaperPlane } from "react-icons/fa";

import PageContainer from "../../../Layouts/Pages/PageContainer";
import CardContainer from "../../../Layouts/Pages/CardContainer";

const CJDropshipping = (props) => {
  return (
    <PageContainer pageTitle="CJ Dropshipping">
      <CardContainer title="Include CJ Dropshipping COGS in Dashboard?">
        <div class="custom-control custom-switch">
          <input
            class="custom-control-input"
            id="CJShippingSettingSwitch"
            type="checkbox"
            checked="checked"
          />
          <label class="custom-control-label" for="CJShippingSettingSwitch">
            Toggle To Include CJ Dropshipping
          </label>
        </div>
      </CardContainer>
      <CardContainer title="CJ Dropshipping API Key">
        <div id="CJ-shipping-access-token-card"></div>
        <input
          class="form-control"
          type="text"
          placeholder="Enter In a New Value to Replace Your Existing API Key"
          id="CJ-shipping-selector"
        />
        <br />
        <button
          class="btn-outline-light btn-lg"
          id="submit-CJ-shipping-access-token"
        >
          <FaPaperPlane />
          Update CJ Dropshipping Token
        </button>
        <br />
        <br />
        <strong>To Obtain your API Key Follow The Below Steps:</strong>
        <br />
        1. Login and Navigate to Your CJ Dropshipping Dashboard <br />
        2. Click "Authorization" In The Top Meu
        <br />
        3. Click "API" from the left-side menu
        <br />
        4. Click "API Key"
        <br />
        5. Generate Your API Key and Input It Above
      </CardContainer>
    </PageContainer>
  );
};

export default CJDropshipping;
