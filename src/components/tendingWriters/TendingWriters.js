import React from "react";

const TendingWriters = () => {
  return (
    <section class="trendint__theme pt-80 pb-130">
      <div class="container">
        <div
          class="common__head mb-50 d-flex align-items-center justify-content-between flex-wrap gap-3 wow flipInX"
          data-wow-duration="1.2s"
        >
          <h2 class="title">
            Trending <span class="gratext">Writers</span>
          </h2>
          <a href="pricing.html" class="new__btn">
            <span>View all</span>
            <i class="material-symbols-outlined">arrow_right_alt</i>
          </a>
        </div>
        <div class="row g-4">
          <div
            class="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInDown"
            data-wow-duration="1.1"
          >
            <div class="treanding__themeitem">
              <a
                href="shop-details.html"
                class="thumb mb-24 ralt overhid d-block"
              >
                <img
                  src="assets/img/blog/tr-theme1.jpg"
                  class="w-100 transition overhid"
                  alt="img"
                />
                <span class="dollar">$29</span>
              </a>
              <div class="content">
                <div class="tr__starwrap d-flex align-items-center mb-20">
                  <span class="fz-16 wordpress ftext">Music</span>
                  <ul class="ratting d-flex align-items-center">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                {/* <h6 class="title mb-16">
                  <a href="shop-details.html" class="title">
                    health light - Medical WordPress theme
                  </a>
                </h6> */}
                <span class="ftext fz-16">
                  <span class="title">by</span> Laila Lampe
                </span>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
            data-wow-duration="1.6"
          >
            <div class="treanding__themeitem">
              <a
                href="shop-details.html"
                class="thumb mb-24 ralt overhid d-block"
              >
                <img
                  src="assets/img/blog/tr-theme2.jpg"
                  class="w-100 transition overhid"
                  alt="img"
                />
                <span class="dollar">$29</span>
              </a>
              <div class="content">
                <div class="tr__starwrap d-flex align-items-center mb-20">
                  <span class="fz-16 wordpress ftext">Painting</span>
                  <ul class="ratting d-flex align-items-center">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                {/* <h6 class="title mb-16">
                  <a href="shop-details.html" class="title">
                    Health light - Medical WordPress theme
                  </a>
                </h6> */}
                <span class="ftext fz-16">
                  <span class="title">by</span> Francesco Renda
                </span>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInDown"
            data-wow-duration="1.9"
          >
            <div class="treanding__themeitem">
              <a
                href="shop-details.html"
                class="thumb mb-24 ralt overhid d-block"
              >
                <img
                  src="assets/img/blog/tr-theme3.jpg"
                  class="w-100 transition overhid"
                  alt="img"
                />
                <span class="dollar">$29</span>
              </a>
              <div class="content">
                <div class="tr__starwrap d-flex align-items-center mb-20">
                  <span class="fz-16 wordpress ftext">Dance</span>
                  <ul class="ratting d-flex align-items-center">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                {/* <h6 class="title mb-16">
                  <a href="shop-details.html" class="title">
                    health light - Medical WordPress theme
                  </a>
                </h6> */}
                <span class="ftext fz-16">
                  <span class="title">by</span> Sabir
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TendingWriters;
