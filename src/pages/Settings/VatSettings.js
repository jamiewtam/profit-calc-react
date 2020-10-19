import React from "react";

import { FaPaperPlane } from "react-icons/fa";

import { DateRangePicker, DateRange } from "react-date-range";
import { addDays } from "date-fns";

import PageContainer from "../../Layouts/Pages/PageContainer";
import CardContainer from "../../Layouts/Pages/CardContainer";

const VATSettings = (props) => {
  return (
    <PageContainer pageTitle="VAT (Value Added Tax) Settings">
      ;<div id="update-vat-settings"></div>
      <CardContainer title="Revenue VAT">
        <div className="div">
          <span>VAT Setting:</span> If You Have VAT Included in Your Shopify
          Item Prices, Select True. This Will Deduct Your VAT From Your Revenue
          and Place It In the Taxes Collection/VAT Card.
        </div>
        <select className="custom-select" id="vat-selector">
          <option value="true" selected="selected">
            True
          </option>
          <option value="false">False</option>
        </select>
        <br />
        <br />
        <span>
          VAT Automatically Caculated for Shipping Charged Setting: If VAT is
          Automatically Calculated on Shipping Charged By Shopify. Select True
        </span>
        <select className="custom-select" id="vat-auto-shipping">
          <option value="true" selected="selected">
            True
          </option>
          <option value="false">False</option>
        </select>
        <br />
        <br />
        <span>Manually Set VAT Percentage:</span> If Your Shopify Store Does Not
        Automatically Calculate VAT And Your Shopify Item Prices Include VAT.
        Enter In Your VAT Percentage Here. (The Above VAT Setting Must Be Set to
        True for the Manual VAT Percentage to Work)
        <input
          className="form-control"
          type="text"
          value=""
          id="VAT-manual-percentage"
        />
        <br />
        <button className="btn-outline-success btn-lg" id="submit-vat-settings">
          <FaPaperPlane /> Update Revenue VAT Settings
        </button>
      </CardContainer>
      <CardContainer title="Cost of Goods Sold VAT [Aliexpress Only]">
        <span>Cost of Goods Sold VAT Setting:</span> If VAT is paid on the
        Aliexpress Cost of Goods Sold. (VAT is Included in the Order Price)
        Select True. This Setting Will Decrease COGS and Decrease VAT.
        <select className="custom-select" id="cogs-vat-selector">
          <option value="true" selected="selected">
            True
          </option>
          <option value="false">False</option>
        </select>
        <br />
        <br />
        <span>Cost of Goods Sold VAT Percentage:</span> Enter in the VAT
        Percentage Paid on Cost of Goods Sold.
        <input
          className="form-control"
          type="text"
          value=""
          id="cogs-vat-manual-percentage"
        />
        <br />
        <br />
        <button className="btn-outline-success btn-lg" id="submit-vat-settings">
          <FaPaperPlane /> Update Cost of Goods Sold VAT Settings
        </button>
      </CardContainer>
      <CardContainer title="Ad Spend VAT">
        <span>Ad Spend VAT Setting:</span> Select True if VAT is Paid on Ad
        Spend (Facebook, Google, and Bing ads). This Will Increase Your Ad
        Costs.
        <select className="custom-select" id="facebook-vat-selector">
          <option value="true" selected="selected">
            True
          </option>
          <option value="false">False</option>
        </select>
        <br />
        <br />
        <span>Ad spend VAT Percentage:</span> Enter in the VAT Percentage Paid
        on Ad spend.
        <input
          className="form-control"
          type="text"
          value=""
          id="facebook-vat-manual-percentage"
        />
        <br />
        <button className="btn-outline-success btn-lg" id="submit-vat-settings">
          <FaPaperPlane /> Update Ad Spend VAT Settings
        </button>
      </CardContainer>
    </PageContainer>
  );
};

export default VATSettings;
