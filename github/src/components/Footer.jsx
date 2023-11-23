import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mainBox">
      <div className="innerMainBox">
        <div className="main1">
          <h1>GitHub</h1>
          <p className="p1">Subscribe to our developer newsletter</p>
          <p className="p2">
            Get tips, technical guides, and best practices. Once a month. Right
            in your inbox.
          </p>

          <div className="btnBox">
            <button>Subscribe</button>
          </div>
        </div>
        <div className="main2">
          <div className="main2inner1">
            <div className="pBox">
              <p>Product</p>
              <p>Platform</p>
            </div>
            <div className="pBox">
              <p className="p">Features</p>
              <p>Developer API</p>
            </div>
            <div className="pBox">
              <p>Enterprise</p>
              <p>Partners</p>
            </div>
            <div className="pBox">
              <p>Copilot</p>
              <p>Electron</p>
            </div>
            <div className="pBox">
              <p>Security</p>
              <p>GitHub Desktop</p>
            </div>
            <p>Pricing</p>
            <p>Team</p>
            <p>Resources</p>
            <p>Roadmap</p>
            <p>Compare GitHub</p>
          </div>
          <div className="main2inner1">
            <div className="pBox">
              <p>Product</p>
              <p>Platform</p>
            </div>
            <div className="pBox">
              <p className="p">Features</p>
              <p>Developer API</p>
            </div>
            <div className="pBox">
              <p>Enterprise</p>
              <p>Partners</p>
            </div>
            <div className="pBox">
              <p>Copilot</p>
              <p>Electron</p>
            </div>
            <div className="pBox">
              <p>Security</p>
              <p>GitHub Desktop</p>
            </div>
            <p>Pricing</p>
            <p>Team</p>
            <p>Resources</p>
            <p>Roadmap</p>
            <p>Compare GitHub</p>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="para">
          <p>
            © 2023 GitHub, Inc. Terms Privacy (Updated 08/2022) Sitemap What is
            Git?
          </p>
        </div>
        <div className="socialLinks">
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-twitch"></i>
        <i class="fa-brands fa-tiktok"></i>
        <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
