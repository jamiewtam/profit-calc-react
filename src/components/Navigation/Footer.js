import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            Copyright &copy; 2020 Profit Calc. All rights reserved.{" "}
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="text-md-right footer-links d-none d-sm-block">
              <Link to="/about">About</Link>
              <Link to="/privacypolicy">Privacy Policy</Link>
              <Link to="/termsAndConditions">Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
