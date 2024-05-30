import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="follow-us-instagram">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Follow Us Instragram</h5>
            </div>
          </div>
        </div>
        {/* Instagram Feeds */}
        <div className="insta-feeds d-flex flex-wrap">
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="/img/bg-img/insta1.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="/img/bg-img/insta2.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="/img/bg-img/insta3.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="/img/bg-img/insta4.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="/img/bg-img/insta5.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="/img/bg-img/insta6.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="/img/bg-img/insta7.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ##### Follow Us Instagram Area End ##### */}
      {/* ##### Footer Area Start ##### */}
      <footer className="footer-area">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
              {/* Footer Social Info */}
              <div className="footer-social-info text-right">
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                <a
                  href={`https://www.facebook.com/share.php?u=${window.location.origin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href={`http://twitter.com/share?text=${'recipe app' + window.location.origin}`} target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href={`https://wa.me/?text=${'recipe app'}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-whatsapp" aria-hidden="true" />
                </a>
              </div>
              {/* Footer Logo */}
              <div className="footer-logo">
                <a href="/">
                  <img src="/img/logoooo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
