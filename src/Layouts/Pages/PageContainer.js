import React from "react";

import Footer from "../../components/Navigation/Footer";

const PageContainer = (props) => {
  return (
    <div class="dashboard-wrapper">
      <div class="dashboard-finance">
        <div class="container-fluid dashboard-content">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"></div>
            <div class="page-header">
              <h1 class="mb-2 page-title">{props.pageTitle}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              {props.children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageContainer;
