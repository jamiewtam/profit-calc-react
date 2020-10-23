import React from "react";
import FacebookLogin from "react-facebook-login";
//COMPONENTS
import CardContainer from "../../../Layouts/Pages/CardContainer";
import {
  ButtonAddAdAccount,
  ButtonRemoveAdAccount,
} from "../../../components/General/Buttons";
import googleLogo from "./../../../assets/images/google.png";
import bingLogo from "./../../../assets/images/bing-ads-logo.png";

import {
  selectFbAdAccounts,
  updateAdwordsAccountID,
  refreshAccessToken,
  removeFacebook,
  removeGoogle,
  removeBing,
} from "../../../api/expenses/adAccounts/index";

const SelectedAdAccounts = ({
  allFacebookAdAccounts,
  selectedFacebookAdAccounts,
  onChange,
}) => {
  return allFacebookAdAccounts.map((account) => {
    const checked = selectedFacebookAdAccounts.find((accountID) => {
      return account === accountID;
    });
    return (
      <div key={account}>
        <input
          name={account}
          type="checkbox"
          checked={checked}
          onChange={() => onChange(account)}
        />
        <label style={{ marginLeft: "10px" }} htmlFor={account}>
          {account.split("_")[1]}
        </label>
      </div>
    );
  });
};

export const FacebookAds = ({
  allFacebookAdAccounts,
  selectedFacebookAdAccounts,
}) => {
  const [selectedAccounts, setSelectedAccounts] = React.useState(
    selectedFacebookAdAccounts
  );

  const handleSubmit = async () => {
    await selectFbAdAccounts(selectedAccounts);
  };

  const handleChange = (account) => {
    setSelectedAccounts((prevAccounts) => {
      const alreadySelected = prevAccounts.find((acc) => acc === account);

      if (alreadySelected) {
        return prevAccounts.filter((acc) => acc !== account);
      } else {
        prevAccounts.push(account);
        return prevAccounts;
      }
    });
  };

  const handleRemoveAccountAccount = async () => {
    await removeFacebook();
  };

  // START --------------------------
  /* eslint-disable */

  // 1. Send FETCH request to server with access token to store in database.
  const renderExpenses = async (userAccessToken, userAdAccounts) => {
    try {
      await postData("https://www.profitcalc.io/api/v1/facebook", {
        userAccessToken: userAccessToken,
        adAccounts: userAdAccounts,
      });
    } catch (error) {
      //console.error(error);
    }

    async function postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // SEND POST data
      });
      await response; // parses JSON response into native JavaScript objects
      document.getElementById("fb-logged-in").textContent =
        "Successfully Logged Into Facebook!";
      Swal.fire({
        position: "top",
        icon: "success",
        title: "You Have Successfully Logged Into Facebook",
        showConfirmButton: false,
        timer: 1500,
      });
      window.setTimeout(() => {
        location.reload(true);
      }, 1600);
    }
  };

  // FACEBOOK AUTHENTICATION -------------------------

  let userAccessTokentoSend;

  function statusChangeCallback(response) {
    if (response.status === "connected") {
      // Logged into your webpage and Facebook.
      userAccessTokentoSend = response.authResponse.accessToken;
      testAPI();
    }
  }

  function checkLoginState() {
    // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function (response) {
      // See the onlogin handler
      statusChangeCallback(response);
    });
  }

  const loadFbLogin = () => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: "2503252289920322",
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: "v7.0", // Use this Graph API version for this call.
      });
      // FB.getLoginStatus(function(response) {
      //   // Called after the JS SDK has been initialized.
      //   statusChangeCallback(response); // Returns the login status.
      // });
    };

    // LOADS SDK
    (function (d, s, id) {
      // Load the SDK asynchronously
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  React.useEffect(() => {
    loadFbLogin();
  }, []);

  // FUNCTION CALLED WHEN CHECK LOGIN STATE IS CALLED
  const testAPI = async () => {
    try {
      const adAccountArr = [];

      FB.api("/me/adaccounts", function (userAdAccounts) {
        userAdAccounts.data.forEach((el) => adAccountArr.push(el.id));
      });
      window.setTimeout(() => {
        try {
          FB.api("/me/businesses", function (businessManagers) {
            if (businessManagers.data) {
              businessManagers.data.forEach((el) => {
                FB.api(`${el.id}/owned_ad_accounts`, function (
                  ownedAdAccounts
                ) {
                  ownedAdAccounts.data.forEach((el) => {
                    adAccountArr.push(el.id);
                  });

                  renderExpenses(userAccessTokentoSend, adAccountArr);
                });
              });
            } else {
              renderExpenses(userAccessTokentoSend, adAccountArr);
            }
          });
        } catch (err) {
          renderExpenses(userAccessTokentoSend, adAccountArr);
        }
      }, 2000);
    } catch (err) {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Error",
        html: `${err}`,
        showConfirmButton: false,
        timer: 4000,
      });
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <CardContainer title="Facebook Ads">
        You must agree to all the permissions to sync your Facebook account with
        Profit Calc. <br />
        Profit Calc only uses these permissions to access your Ad Account IDs to
        poll your ad spend within specified date ranges.
        <br />
        <br />
        {/* <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          scope="ads_read"
          // onClick={componentClicked}
          callback={checkLoginState}
        /> */}
        <div
          className="login-button"
          scope="ads_read"
          onlogin="checkLoginState()"
          data-size="large"
          data-button-type="continue_with"
        ></div>
        <h5 className="mb-2">
          Select Which Facebook Ad Accounts to Include in Your Dashboard
        </h5>
        <SelectedAdAccounts
          allFacebookAdAccounts={allFacebookAdAccounts}
          selectedFacebookAdAccounts={selectedAccounts}
          onChange={handleChange}
        />
        <ButtonAddAdAccount
          title="Update Selected Ad Accounts"
          onClick={handleSubmit}
        />
      </CardContainer>
      <CardContainer title="Remove Facebook Ads Account">
        <ButtonRemoveAdAccount
          title="Remove Facebook Ads Account"
          onClick={handleRemoveAccountAccount}
        />
      </CardContainer>
    </React.Fragment>
  );
};

export const GoogleAds = ({ adwordsAccountId }) => {
  const [googleID, setGoogleID] = React.useState(adwordsAccountId);

  const handleChange = (event) => {
    setGoogleID(event.target.value);
  };

  const handleSubmit = async () => {
    await updateAdwordsAccountID(googleID);
  };

  const handleRemoveAccount = async () => {
    await removeGoogle();
    setGoogleID("111-111-1111");
  };

  return (
    <React.Fragment>
      <CardContainer title="Google Ads">
        <button className="btn-outline-light btn-lg">
          <a href="api/v1/google/go" target="_blank">
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
        {adwordsAccountId !== "111-111-1111" ? (
          <p>Successfully Logged In </p>
        ) : (
          <p>Please Login into Google</p>
        )}
      </CardContainer>
      <CardContainer title="Google Ads Account Id">
        <input
          className="form-control"
          type="text"
          value={googleID}
          onChange={handleChange}
        />
        <br />
        <ButtonAddAdAccount title="Update Adwords ID" onClick={handleSubmit} />
        <div className="card-body">
          1. Sign in to your Google Ads account. <br />
          2. Click the help icon in the top right corner.
          <br />
          3. Find “Customer ID” at the bottom of the menu.
        </div>
      </CardContainer>
      <CardContainer title="Remove Google Ads Account">
        <ButtonRemoveAdAccount
          title="Remove Google Ads Account"
          onClick={handleRemoveAccount}
        />
      </CardContainer>
    </React.Fragment>
  );
};

export const BingAds = ({ bingID }) => {
  const handleRemoveAccount = async () => {
    await removeBing();
  };

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
        {bingID ? (
          <p>Please Log Into Bing</p>
        ) : (
          <p>Please Login into Bing Ads</p>
        )}
      </CardContainer>
      <CardContainer title="Remove Bing Ads">
        <ButtonRemoveAdAccount
          title="Remove Bing Ads Account"
          onClick={handleRemoveAccount}
        />
      </CardContainer>
    </React.Fragment>
  );
};
