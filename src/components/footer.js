import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-partners">
        <div className="partner">
          <img src="https://brandlogos.net/wp-content/uploads/2022/09/economic-times-logo-brand.png" alt="Economic Times" />
          <p>
            "Lorem ipsum dolor sit amet consectetur. Proin quis et eget aliquam amet."
          </p>
        </div>
        <div className="partner">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Indiantelevision_logo.png" alt="IndianTelevision" />
          <p>
            "Lorem ipsum dolor sit amet consectetur. Proin quis et eget aliquam amet."
          </p>
        </div>
        <div className="partner">
          <img src="https://www.wan-ifra.org/sites/default/files/styles/logo/public/WAN-IFRA_Logo.jpg?itok=udVnoVag" alt="WAN Publishers" />
          <p>
            "Lorem ipsum dolor sit amet consectetur. Proin quis et eget aliquam amet."
          </p>
        </div>
        <div className="partner">
          <img src="https://yt3.googleusercontent.com/XuJ7AeG2MlK0KPVCTpi0V4OTwVN7k209vC85hDWOzRnSFJhynTLayAGAtlxv1YpfdmLy7ORw=s900-c-k-c0x00ffffff-no-rj" alt="Telangana Today" />
          <p>
            "Lorem ipsum dolor sit amet consectetur. Proin quis et eget aliquam amet."
          </p>
        </div>
        <div className="partner">
          <img src="https://static.brandirectory.com/logos/brand-equity-logo.png" alt="Brand Equity" />
          <p>
            "Lorem ipsum dolor sit amet consectetur. Proin quis et eget aliquam amet."
          </p>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer-logo">
          <span className="arre-logo">
            Arr<span className="footer-accent">é</span>
          </span>
        </div>
        <div className="footer-social">
          <a href="#"><i className="fa-brands fa-facebook-f" /></a>
          <a href="#"><i className="fa-brands fa-instagram" /></a>
          <a href="#"><i className="fa-brands fa-x-twitter" /></a>
          <a href="#"><i className="fa-brands fa-youtube" /></a>
          <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
        </div>
        <div className="footer-links">
          <a href="#">HOME</a>
          <a href="#">STUDIO</a>
          <a href="#">VOICE</a>
          <a href="#">AWARDS</a>
          <a href="#">ABOUT</a>
        </div>
        <div className="footer-policies">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-copyright">
        U Digital Content &copy; 2024 - All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
