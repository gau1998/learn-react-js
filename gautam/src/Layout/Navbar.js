import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light  bg-dark" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger text-white" href="/">
            GAUTAM
          </a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu &nbsp;
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger text-white" href="/blog/">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link js-scroll-trigger text-white"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger text-white" href="#signup">
                  Contact
                </a>
              </li>

              <li class="nav-item">
                <a
                  class=" js-scroll-trigger btn   font-weight-bolder "
                  style={{
                    background: "orange"
                  }}
                  href="/register/"
                >
                  Register
                </a>
              </li>

              <li class="nav-item">
                <a
                  class=" js-scroll-trigger btn text-white   font-weight-bolder "
                  style={{
                    border: "1px solid orange",

                    marginLeft: "10px"
                  }}
                  href="/login/"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
