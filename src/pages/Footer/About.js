import React from "react";

import PageContainer from "../../Layouts/Pages/PageContainer";
import CardContainer from "../../Layouts/Pages/CardContainer";

const AboutUs = () => {
  return (
    <PageContainer pageTitle="About Us">
      <CardContainer>
        <div className="video">
          <iframe
            title="about-us-video"
            width="460"
            height="280"
            src="https://www.youtube.com/embed/hLP6BDtNKOU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
          <br />
          <br />
          <p>
            As a company built by accountants and dropshippers we know the pains
            of doing your finances everyday. Going to each site, grabbing the
            expenses and then plugging them into a messy spreadsheet. Adding
            some revenue here&mldr; Sprinkling a little expenses there&mldr; All
            while hoping that you didn&rsquo;t miss a decimal place.&nbsp;
          </p>
          <p>
            And don&rsquo;t get me started on the alternatives&mldr; Who has
            that kind of money? That&rsquo;s why we decided to create Profit
            Calc. An all in one accounting software that calculates your profit
            in just one-click. Built by and for Shopify merchants. Finally make
            informed financial decisions and get access to real time profit
            data.
          </p>
          <p> Choose Profit Calc.</p>
        </div>
      </CardContainer>
    </PageContainer>
  );
};

export default AboutUs;
