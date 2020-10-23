import React from "react";
import { useRouteMatch, Route } from "react-router-dom";
// COMPONENTS
import PageContainer from "../../../Layouts/Pages/PageContainer";
import SubNavMenu from "../../../components/Navigation/SubNavMenu";
import { FacebookAds, GoogleAds, BingAds } from "./AdAccountLoginComponents";
// FUNCTIONS
import { userContext } from "../../../util/Context/userContext";
import {
  selectFbAdAccounts,
  updateAdwordsAccountID,
  refreshAccessToken,
  removeFacebook,
  removeGoogle,
  removeBing,
} from "../../../api/expenses/adAccounts/index";

const routes = [
  { to: "", title: "Facebook Ads" },
  { to: "/Google", title: "Google Ads" },
  { to: "/Bing", title: "Bing Ads" },
];

const AdLogins = () => {
  const { url } = useRouteMatch();

  const {
    adwordsAccountId,
    selectedAdAccounts,
    adAccounts,
    bingAdsAccountId,
  } = React.useContext(userContext);
  return (
    <PageContainer pageTitle="Ad Accounts">
      <SubNavMenu routes={routes} url={url} />
      <Route exact path={`${url}`}>
        <FacebookAds
          allFacebookAdAccounts={adAccounts}
          selectedFacebookAdAccounts={selectedAdAccounts}
        />
      </Route>
      <Route path={`${url}/Google`}>
        <GoogleAds adwordsAccountId={adwordsAccountId} />
      </Route>
      <Route path={`${url}/Bing`}>
        <BingAds bingID={bingAdsAccountId} />
      </Route>
    </PageContainer>
  );
};

export default AdLogins;
