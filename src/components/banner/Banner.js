import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner__themessell">
        <header className="header-section header__sectiontheme">
          <div className="container">
            <div className="header-wrapper header__wrappertheme">
              <div className="logo-menu">
                <a href="index.html" className="logo">
                  <img src="assets/img/logo/artigrant-logo.png" alt="logo" />
                </a>
              </div>
              <div className="menu__components menutop__content__one d-flex align-content-center">
                <ul className="main-menu">
                  <li>
                    <a
                      href="index.html"
                      className="fz-24 blacks fw-600 bodyfont"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="about.html"
                      className="fz-24 blacks fw-600 bodyfont"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="services.html"
                      className="fz-24 blacks fw-600 bodyfont"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="how-it-works.html"
                      className="fz-24 blacks fw-600 bodyfont"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="contact.html"
                      className="fz-24 blacks fw-600 bodyfont"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="d-flex shop__area align-items-center">
                  <a
                    href="login.html"
                    className="d-flex fw-500 cmn--btn outline__btntwo align-items-center gap-2"
                  >
                    <span>log in / Register</span>
                    <span>
                      <i className="material-symbols-outlined fz-18 mt-1">
                        logout
                      </i>
                    </span>
                  </a>
                  <div className="header-bar d-lg-none">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="banner__themesection overhid ralt">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="banner__themecontent">
                  <span className="theme__subtitle">For Creative Success</span>
                  <span
                    className="display__theme d-block mb-30 wow fadeInDown"
                    data-wow-duration="1.2s"
                  >
                    Connecting Artists with Grant Writers
                  </span>
                  <div className="bn__btn d-flex align-items-center gap-4 flex-wrap">
                    <a href="author-page.html" className="cmn--btn">
                      <span>Im an Artist</span>
                    </a>
                    <a href="login.html" className="cmn--btn outline__btn">
                      <span>Im a Grant Writer</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="bn__themesell__thumb ralt">
                  <img
                    src="assets/img/banner/banner-thumb.png"
                    className="min__thumb"
                    alt="img"
                  />
                  <img
                    src="assets/img/banner/setting-vector.png"
                    className="bn__setting"
                    alt="img"
                  />
                  <img
                    src="assets/img/banner/roundsmall.png"
                    className="bn__roundsmall"
                    alt="img"
                  />
                  <img
                    src="assets/img/banner/round-vector.png"
                    className="bn__round"
                    alt="img"
                  />
                  <img
                    src="assets/img/banner/sky-vector.png"
                    className="bn__sky"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
