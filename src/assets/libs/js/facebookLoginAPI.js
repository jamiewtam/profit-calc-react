/* eslint-disable */

// 1. Send FETCH request to server with access token to store in database.
const renderExpenses = async (userAccessToken, userAdAccounts) => {
  try {
    await postData('https://www.profitcalc.io/api/v1/facebook', {
      userAccessToken: userAccessToken,
      adAccounts: userAdAccounts
    });
  } catch (error) {
    //console.error(error);
  }

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // SEND POST data
    });
    await response; // parses JSON response into native JavaScript objects
    document.getElementById('fb-logged-in').textContent =
      'Successfully Logged Into Facebook!';
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'You Have Successfully Logged Into Facebook',
      showConfirmButton: false,
      timer: 1500
    });
    window.setTimeout(() => {
      location.reload(true);
    }, 1600);
  }
};

// FACEBOOK AUTHENTICATION -------------------------

let userAccessTokentoSend;

function statusChangeCallback(response) {
  if (response.status === 'connected') {
    // Logged into your webpage and Facebook.
    userAccessTokentoSend = response.authResponse.accessToken;
    testAPI();
  }
}

function checkLoginState() {
  // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function(response) {
    // See the onlogin handler
    statusChangeCallback(response);
  });
}
window.fbAsyncInit = function() {
  FB.init({
    appId: '2503252289920322',
    cookie: true, // Enable cookies to allow the server to access the session.
    xfbml: true, // Parse social plugins on this webpage.
    version: 'v5.0' // Use this Graph API version for this call.
  });
  // FB.getLoginStatus(function(response) {
  //   // Called after the JS SDK has been initialized.
  //   statusChangeCallback(response); // Returns the login status.
  // });
};

// LOADS SDK
(function(d, s, id) {
  // Load the SDK asynchronously
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

// FUNCTION CALLED WHEN CHECK LOGIN STATE IS CALLED
const testAPI = async () => {
  // FB.api('/me/adaccounts', function(userAdAccounts) {
  //   const accArr = [];
  //   userAdAccounts.data.forEach(el => accArr.push(el.id));

  //   renderExpenses(userAccessTokentoSend, accArr);
  // });

  try {
    const adAccountArr = [];

    FB.api('/me/adaccounts', function(userAdAccounts) {
      userAdAccounts.data.forEach(el => adAccountArr.push(el.id));
    });
    window.setTimeout(() => {
      try {
        FB.api('/me/businesses', function(businessManagers) {
          if (businessManagers.data) {
            businessManagers.data.forEach(el => {
              FB.api(`${el.id}/owned_ad_accounts`, function(ownedAdAccounts) {
                ownedAdAccounts.data.forEach(el => {
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
      position: 'top',
      icon: 'error',
      title: 'Error',
      html: `${err}`,
      showConfirmButton: false,
      timer: 4000
    });
    console.log(err);
  }
};
