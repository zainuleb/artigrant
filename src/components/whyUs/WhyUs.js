import React from "react";

const WhyUs = () => {
  return (
    <section class="choose__theme bgsection pt-120 pb-130">
      <div class="container">
        <div
          class="common__head mb-50 d-flex align-items-center justify-content-center wow flipInX"
          data-wow-duration="1.5"
        >
          <h2 class="title text-center">
            Why <span class="gratext">Choose</span> Us
          </h2>
        </div>
        <div class="row g-4">
          <div
            class="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
            data-wow-duration="1.4"
          >
            <a
              href="categoris-images.html"
              class="choose__themeitem text-center"
            >
              <div class="ditheme">
                <img src="assets/img/blog/cho1.png" alt="img" />
              </div>
              <span class="fs-18 fw-400 bodyfont d-block title">
                <span class="d-block mb-2">Get</span>
                Quality Service
              </span>
            </a>
          </div>
          <div
            class="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
            data-wow-duration="1.6"
          >
            <a
              href="categoris-images.html"
              class="choose__themeitem text-center"
            >
              <div class="ditheme">
                <img src="assets/img/blog/cho2.png" alt="img" />
              </div>
              <span class="fs-18 fw-400 bodyfont d-block title">
                <span class="d-block mb-2">No Risk,</span>
                Double Guarantee
              </span>
            </a>
          </div>
          <div
            class="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
            data-wow-duration="1.9"
          >
            <a
              href="categoris-images.html"
              class="choose__themeitem text-center"
            >
              <div class="ditheme">
                <img src="assets/img/blog/cho4.png" alt="img" />
              </div>
              <span class="fs-18 fw-400 bodyfont d-block title">
                <span class="d-block mb-2">Flexible,</span>
                Prices no hassle
              </span>
            </a>
          </div>
          <div
            class="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
            data-wow-duration="1.9"
          >
            <a
              href="categoris-images.html"
              class="choose__themeitem text-center"
            >
              <div class="ditheme">
                <img src="assets/img/blog/cho3.png" alt="img" />
              </div>
              <span class="fs-18 fw-400 bodyfont d-block title">
                <span class="d-block mb-2">24/7/365,</span>
                Customer Support
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
