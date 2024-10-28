import React from "react";
import "./Home.css";
import Vegmeals from "../images/Vegmeals.avif";
import Nonvegmeals from "../images/Nonvegmeals.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div class="container second">
        <div className="row sam1">
          <div class="col-lg-6 cardone ">
            <div class="card">
              <Link to="/veg" className="vi">
                <img src={Vegmeals} className="card-img-top meals" alt="..." />
              </Link>
              <Link to="/veg" className="vi">
                <div class="card-body">
                  <p className="card-text">
                    {" "}
                    <b>Veg</b>
                    <br />
                    Stay home and order your homestep{" "}
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div class="col-lg-6 cardone">
            <div class="card">
              <Link to="/nonveg" className="vi">
                <img
                  src={Nonvegmeals}
                  className="card-img-top meals"
                  alt="..."
                />
              </Link>
              <Link to="/nonveg" className="vi">
                <div className="card-body ">
                  <p class="card-text">
                    <b>Non-veg</b>
                    <br />
                    View the cities favorite dining venues
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section class="third">
        <div class="container">
          <h1>Collections</h1>
          <p>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Coimbatore, based on trends
          </p>
        </div>
      </section>

      <div class="sam">
        <div class="col-lg-3 bg1 ">
          <p>
            14 Great Cafes <br />
            11 Places
            <MdOutlineArrowRight className="jo" />
          </p>
        </div>
        <div class="col-lg-3 bg2">
          <p>
            11 Best Pubs and Bars
            <br />
            10 Places
            <MdOutlineArrowRight />
          </p>
        </div>
        <div class="col-lg-3 bg3">
          <p>
            11 Blissful Breakfast Places
            <br />8 Places
            <MdOutlineArrowRight />
          </p>
        </div>
        <div class="col-lg-3 bg4">
          <p>
            6 Premium cofee shops
            <br />5 Places
            <MdOutlineArrowRight />
          </p>
        </div>
      </div>

      <section class="container fourth">
        <div class="para1">
          <h1>Popular localities in and around Coimbatore</h1>
        </div>
        <div class="container and">
          <div class="row para">
            <div class="col-lg-4">
              <div class="card boxx">
                <div class="card-body">
                  <p class="card-text">
                    <b>RS Puram</b>
                    <br />
                    347 Places <i class="bx bx-chevron-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card boxx">
                <div class="card-body">
                  <p class="card-text">
                    <b>Peelamedu</b>
                    <br />
                    509 Places <i class="bx bx-chevron-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card boxx">
                <div class="card-body">
                  <p class="card-text">
                    <b>Race Course</b>
                    <br />
                    94 Places <i class="bx bx-chevron-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4"></div>
          </div>
          <div class="row para">
            <div class="col-lg-4">
              <div class="card boxx">
                <div class="card-body ">
                  <p class="card-text">
                    <b>Saibaba Colony</b>
                    <br />
                    269 Places <i class="bx bx-chevron-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card boxx">
                <div class="card-body">
                  <p class="card-text">
                    <b>Ganthipuram</b>
                    <br />
                    284 Places <i class="bx bx-chevron-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card boxx">
                <div class="card-body">
                  <p class="card-text">
                    <b>Town Hall</b>
                    <br />
                    154 Places <i class="bx bx-chevron-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row para">
            <div class="col-lg-4">
              <div class="card boxx">
                <div class="card-body">
                  <p class="card-text">
                    <b>Ramanathapuram</b>
                    <br />
                    164places <i class="bx bx-chevron-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card boxx">
                <div class="card-body">
                  <p class="card-text">
                    <b>Kallapati</b>
                    <br />
                    89 Places <i class="bx bx-chevron-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card boxx">
                <div class="card-body">
                  <p class="card-text">
                    See more
                    <br />
                    .....................<i class="bx bx-chevron-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
