import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            Navstivte na nasej stranke
            <ul>
              <li>
                <Link to="/prispevky" className="link">
                  <i class="fas fa-arrow-right"></i>
                  Prispevky
                </Link>
              </li>

              <li>
                <Link to="/blog" className="link">
                  <i class="fas fa-arrow-right"></i>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/uzitocne" className="link">
                  <i class="fas fa-arrow-right"></i>
                  Uzitocne
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12">
            Copyright &copy; Michal Zaduban
            <p>
              Inspiration <i className="fas fa-arrow-right"></i> Ľuboslava
              Nováková
            </p>
          </div>
          <div className="col-lg-4 col-xs-12">
            Check out my social media
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/michal.zaduban/"
                  className="link"
                >
                  <i class="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zadubanmichal/"
                  className="link"
                >
                  <i class="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/michal-zaduban-681846187/"
                  className="link"
                >
                  <i class="fab fa-linkedin"></i> Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
