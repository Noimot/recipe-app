import React from "react";

const Carousel = () => {
  return (
    <>
      {/* <section className="hero-area">
        <div className="hero-slides owl-carousel owl-loaded owl-drag">
        
          <div
            className="single-hero-slide bg-img"
            style={{
              backgroundImage: "url(/img/bg-img/bg1.jpg)",
            }}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div
                    className="hero-slides-content"
                    data-animation="fadeInUp"
                    data-delay="100ms"
                  >
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      Delicios Homemade Burger
                    </h2>
                    <p data-animation="fadeInUp" data-delay="700ms">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras tristique nisl vitae luctus sollicitudin. Fusce
                      consectetur sem eget dui tristique, ac posuere arcu
                      varius.
                    </p>
                    <a
                      href="#"
                      className="btn delicious-btn"
                      data-animation="fadeInUp"
                      data-delay="1000ms"
                    >
                      See Receipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div
            className="single-hero-slide bg-img"
            style={{ backgroundImage: "url(/img/bg-img/bg6.jpg)" }}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div
                    className="hero-slides-content"
                    data-animation="fadeInUp"
                    data-delay="100ms"
                  >
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      Delicios Homemade Burger
                    </h2>
                    <p data-animation="fadeInUp" data-delay="700ms">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras tristique nisl vitae luctus sollicitudin. Fusce
                      consectetur sem eget dui tristique, ac posuere arcu
                      varius.
                    </p>
                    <a
                      href="#"
                      className="btn delicious-btn"
                      data-animation="fadeInUp"
                      data-delay="1000ms"
                    >
                      See Receipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div
            className="single-hero-slide bg-img"
            style={{ backgroundImage: "url(/img/bg-img/bg7.jpg)" }}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div
                    className="hero-slides-content"
                    data-animation="fadeInUp"
                    data-delay="100ms"
                  >
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      Delicios Homemade Burger
                    </h2>
                    <p data-animation="fadeInUp" data-delay="700ms">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras tristique nisl vitae luctus sollicitudin. Fusce
                      consectetur sem eget dui tristique, ac posuere arcu
                      varius.
                    </p>
                    <a
                      href="#"
                      className="btn delicious-btn"
                      data-animation="fadeInUp"
                      data-delay="1000ms"
                    >
                      See Receipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section class="hero-area">
        <div class="hero-slides owl-carousel owl-loaded owl-drag">
          <div class="owl-stage-outer">
            <div
              class="owl-stage"
              style={{
                transform: "translate3d(-1754px, 0px, 0px)",
                transition: "all 1s ease 0s",
                width: "6139px",
              }}
            >
              <div class="owl-item cloned" style={{ width: "877px" }}>
                <div
                  class="single-hero-slide bg-img"
                  style={{ backgroundImage: "url(/img/bg-img/bg6.jpg)" }}
                >
                  <div class="container h-100">
                    <div class="row h-100 align-items-center">
                      <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div
                          class="hero-slides-content"
                          data-animation="fadeInUp"
                          data-delay="100ms"
                          style={{ animationDelay: "100ms", opacity: 0 }}
                        >
                          <h2
                            data-animation="fadeInUp"
                            data-delay="300ms"
                            style={{ animationDelay: "300ms", opacity: 0 }}
                          >
                            Delicios Homemade Burger
                          </h2>
                          <p
                            data-animation="fadeInUp"
                            data-delay="700ms"
                            style={{ animationDelay: "700ms", opacity: 0 }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras tristique nisl vitae luctus sollicitudin.
                            Fusce consectetur sem eget dui tristique, ac posuere
                            arcu varius.
                          </p>
                          <a
                            href="#"
                            class="btn delicious-btn"
                            data-animation="fadeInUp"
                            data-delay="1000ms"
                            style={{ animationDelay: "1000ms", opacity: 0 }}
                          >
                            See Receipe
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-item cloned" style={{ width: "877px" }}>
                <div
                  class="single-hero-slide bg-img"
                  style={{ backgroundImage: "url(/img/bg-img/bg7.jpg)" }}
                >
                  <div class="container h-100">
                    <div class="row h-100 align-items-center">
                      <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div
                          class="hero-slides-content"
                          data-animation="fadeInUp"
                          data-delay="100ms"
                          style={{ animationDelay: "100ms", opacity: 0 }}
                        >
                          <h2
                            data-animation="fadeInUp"
                            data-delay="300ms"
                            style={{ animationDelay: "300ms", opacity: 0 }}
                          >
                            Delicios Homemade Burger
                          </h2>
                          <p
                            data-animation="fadeInUp"
                            data-delay="700ms"
                            style={{ animationDelay: "700ms", opacity: 0 }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras tristique nisl vitae luctus sollicitudin.
                            Fusce consectetur sem eget dui tristique, ac posuere
                            arcu varius.
                          </p>
                          <a
                            href="#"
                            class="btn delicious-btn"
                            data-animation="fadeInUp"
                            data-delay="1000ms"
                            style={{ animationDelay: "1000ms", opacity: "0" }}
                          >
                            See Receipe
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`owl-dot ${activeIndex === 1 ? "active" : ""}`} style={{ width: "877px" }}>
                <div
                  class="single-hero-slide bg-img"
                  style={{ backgroundImage: "url(/img/bg-img/bg1.jpg)" }}
                >
                  <div class="container h-100">
                    <div class="row h-100 align-items-center">
                      <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div
                          class="hero-slides-content animated fadeInUp"
                          data-animation="fadeInUp"
                          data-delay="100ms"
                          style={{ animationDelay: "100ms", opacity: activeIndex === 1 ? 1 : 0}}
                        >
                          <h2
                            data-animation="fadeInUp"
                            data-delay="300ms"
                            style={{ animationDelay: "300ms", opacity: activeIndex === 1 ? 1 : 0}}
                            class="animated fadeInUp"
                          >
                            Delicios Homemade Burger
                          </h2>
                          <p
                            data-animation="fadeInUp"
                            data-delay="700ms"
                            style={{ animationDelay: "700ms", opacity: activeIndex === 1 ? 1 : 0 }}
                            class="animated fadeInUp"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras tristique nisl vitae luctus sollicitudin.
                            Fusce consectetur sem eget dui tristique, ac posuere
                            arcu varius.
                          </p>
                          <a
                            href="#"
                            class="btn delicious-btn animated fadeInUp"
                            data-animation="fadeInUp"
                            data-delay="1000ms"
                            style={{ animationDelay: "1000ms", opacity: activeIndex === 1 ? 1 : 0 }}
                          >
                            See Receipe
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`owl-dot ${activeIndex === 1 ? "active" : ""}`} style={{ width: "877px" }}>
                <div
                  class="single-hero-slide bg-img"
                  style={{ backgroundImage: "url(img/bg-img/bg6.jpg)" }}
                >
                  <div class="container h-100">
                    <div class="row h-100 align-items-center">
                      <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div
                          class="hero-slides-content"
                          data-animation="fadeInUp"
                          data-delay="100ms"
                          style={{ animationDelay: "100ms", opacity: activeIndex === 2 ? 1 : 0 }}
                        >
                          <h2
                            data-animation="fadeInUp"
                            data-delay="300ms"
                            style={{ animationDelay: "300ms", opacity: activeIndex === 2 ? 1 : 0 }}
                            class=""
                          >
                            Delicios Homemade Burger
                          </h2>
                          <p
                            data-animation="fadeInUp"
                            data-delay="700ms"
                            style={{ animationDelay: "700ms", opacity: activeIndex === 2 ? 1 : 0}}
                            class=""
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras tristique nisl vitae luctus sollicitudin.
                            Fusce consectetur sem eget dui tristique, ac posuere
                            arcu varius.
                          </p>
                          <a
                            href="#"
                            class="btn delicious-btn"
                            data-animation="fadeInUp"
                            data-delay="1000ms"
                            style={{ animationDelay: "1000ms", opacity: activeIndex === 2 ? 1 : 0 }}
                          >
                            See Receipe
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`owl-dot ${activeIndex === 1 ? "active" : ""}`} style={{ width: "877px" }}>
                <div
                  class="single-hero-slide bg-img"
                  style={{ backgroundImage: "url(img/bg-img/bg7.jpg)" }}
                >
                  <div class="container h-100">
                    <div class="row h-100 align-items-center">
                      <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div
                          class="hero-slides-content"
                          data-animation="fadeInUp"
                          data-delay="100ms"
                          style={{ animationDelay: "100ms", opacity: activeIndex === 3 ? 1 : 0 }}
                        >
                          <h2
                            data-animation="fadeInUp"
                            data-delay="300ms"
                            style={{ animationDelay: "300ms", opacity: activeIndex === 3 ? 1 : 0 }}
                          >
                            Delicios Homemade Burger
                          </h2>
                          <p
                            data-animation="fadeInUp"
                            data-delay="700ms"
                            style={{ animationDelay: "700ms", opacity: activeIndex === 3 ? 1 : 0 }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras tristique nisl vitae luctus sollicitudin.
                            Fusce consectetur sem eget dui tristique, ac posuere
                            arcu varius.
                          </p>
                          <a
                            href="#"
                            class="btn delicious-btn"
                            data-animation="fadeInUp"
                            data-delay="1000ms"
                            style={{ animationDelay: "1000ms", opacity: activeIndex === 3 ? 1 : 0 }}
                          >
                            See Receipe
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-item cloned" style={{ width: "877px" }}>
                <div
                  class="single-hero-slide bg-img"
                  style={{ backgroundImage: "url(img/bg-img/bg1.jpg)" }}
                >
                  <div class="container h-100">
                    <div class="row h-100 align-items-center">
                      <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div
                          class="hero-slides-content"
                          data-animation="fadeInUp"
                          data-delay="100ms"
                          style={{ animationDelay: "100ms", opacity: 0 }}
                        >
                          <h2
                            data-animation="fadeInUp"
                            data-delay="300ms"
                            style={{ animationDelay: "300ms", opacity: 0 }}
                          >
                            Delicios Homemade Burger
                          </h2>
                          <p
                            data-animation="fadeInUp"
                            data-delay="700ms"
                            style={{ animationDelay: "700ms", opacity: 0 }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras tristique nisl vitae luctus sollicitudin.
                            Fusce consectetur sem eget dui tristique, ac posuere
                            arcu varius.
                          </p>
                          <a
                            href="#"
                            class="btn delicious-btn"
                            data-animation="fadeInUp"
                            data-delay="1000ms"
                            style={{ animationDelay: "1000ms", opacity: 0 }}
                          >
                            See Receipe
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-item cloned" style={{ width: "877px" }}>
                <div
                  class="single-hero-slide bg-img"
                  style={{ backgroundImage: "url(img/bg-img/bg6.jpg)" }}
                >
                  <div class="container h-100">
                    <div class="row h-100 align-items-center">
                      <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div
                          class="hero-slides-content"
                          data-animation="fadeInUp"
                          data-delay="100ms"
                          style={{ animationDelay: "100ms", opacity: 0 }}
                        >
                          <h2
                            data-animation="fadeInUp"
                            data-delay="300ms"
                            style={{ animationDelay: "300ms", opacity: 0 }}
                          >
                            Delicios Homemade Burger
                          </h2>
                          <p
                            data-animation="fadeInUp"
                            data-delay="700ms"
                            style={{ animationDelay: "700ms", opacity: 0 }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras tristique nisl vitae luctus sollicitudin.
                            Fusce consectetur sem eget dui tristique, ac posuere
                            arcu varius.
                          </p>
                          <a
                            href="#"
                            class="btn delicious-btn"
                            data-animation="fadeInUp"
                            data-delay="1000ms"
                            style={{ animationDelay: "1000ms", opacity: 0 }}
                          >
                            See Receipe
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-nav">
            <div class="owl-prev" onClick={handlePrevSlide}>
              Prev
            </div>
            <div class="owl-next" onClick={handleNextSlide}>
              Next
            </div>
          </div>
          <div class="owl-dots">
            <div class={`owl-dot ${activeIndex === 1 ? "active" : ""}`}>01.</div>
            <div class={`owl-dot ${activeIndex === 2 ? "active" : ""}`}>02.</div>
            <div class={`owl-dot ${activeIndex === 3 ? "active" : ""}`}>03.</div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Carousel;
