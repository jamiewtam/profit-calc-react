import React from "react";
//COMPONENTS
import PageContainer from "../../../Layouts/Pages/PageContainer";
import CardContainer from "../../../Layouts/Pages/CardContainer";
import { ButtonSuccess } from "../../../components/General/Buttons";
//FUNCTIONS
import {
  ToggleElement,
  InputElement,
} from "../../../components/Settings/Forms";
import { userContext } from "../../../util/Context/userContext";
import {
  toggleCJDropshipping,
  submitCJShippingAccessToken,
} from "../../../api/expenses";

const CJDropshipping = () => {
  const user = React.useContext(userContext);
  console.log("user:", user);
  const { CJShippingSetting } = React.useContext(userContext);
  const [CJSetting, setCJSetting] = React.useState(CJShippingSetting);

  const [CJAccessToken, setCJAccessToken] = React.useState(
    "Replace Current Key"
  );

  const handleChange = async () => {
    await toggleCJDropshipping();
    setCJSetting((prevSetting) => {
      return !prevSetting;
    });
  };

  const handleAccessTokenChange = (name, value) => {
    setCJAccessToken(value);
  };

  const hanldeSubmit = () => {
    submitCJShippingAccessToken(CJAccessToken);
  };

  return (
    <PageContainer pageTitle="CJ Dropshipping">
      <CardContainer title="Include CJ Dropshipping COGS in Dashboard?">
        <ToggleElement checked={CJSetting} onChange={handleChange} />
      </CardContainer>
      <CardContainer title="CJ Dropshipping API Key">
        <InputElement
          inputName="CJ"
          handleChange={handleAccessTokenChange}
          value={CJAccessToken}
          title="Enter In a New Value to Replace Your Existing API Key (Any previously entered tokens are encrypted and not displayed below)"
        />
        <br />
        <ButtonSuccess
          title="Update CJ Dropshipping Access Token"
          onClick={hanldeSubmit}
        />
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
