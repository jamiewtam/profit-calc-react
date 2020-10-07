import React from "react";

import Footer from "../../components/Navigation/Footer";

const PageContainer = (props) => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-finance">
        <div className="container-fluid dashboard-content">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"></div>
            <div className="page-header">
              <h1 className="mb-2 page-title">{props.pageTitle}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
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
