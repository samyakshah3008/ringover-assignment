import React from "react";
import "./teammember-cards-section.css";
import christiano from "../../assets/images/christiano.jpg";
import james from "../../assets/images/james.jpg";
import tonikroos from "../../assets/images/tonikroos.jpg";
import ikercasillas from "../../assets/images/ikercasillas.jpg";
import zidane from "../../assets/images/zidane.jpg";
import facebookLogo from "../../assets/images/facebook.png";
import mediumLogo from "../../assets/images/medium.png";
import linkedInLogo from "../../assets/images/linkedin.png";
import nbaLogo from "../../assets/images/nba.png";

export default function TeammemberCardsSection() {
  return (
    <>
      <div className="team-section">
        <p className="card-section-title">
          Without bonding and coordination, every project is a faliure. Look at
          who makes KICKSUP great. ;)
        </p>
        <div className="card-container">
          <div className="card">
            <img className="card-img" src={christiano} />
            <div className="card-info">
              <div className="card-title">Crisiano</div>
              <div>Financial operations</div>
              <div className="social-icons">
                <img className="icon" alt="website logo" src={linkedInLogo} />
                <img className="icon" alt="website logo" src={mediumLogo} />
                <img className="icon" alt="website logo" src={facebookLogo} />
              </div>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={james} />
            <div className="card-info">
              <div className="card-title">James</div>
              <div>Product designer</div>
              <div className="social-icons">
                <img className="icon" alt="website logo" src={nbaLogo} />
                <img className="icon" alt="website logo" src={mediumLogo} />
                <img className="icon" alt="website logo" src={facebookLogo} />
              </div>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={tonikroos} />
            <div className="card-info">
              <div className="card-title">Tonikroos</div>
              <div>Product developer</div>
              <div className="social-icons">
                <img className="icon" alt="website logo" src={linkedInLogo} />
                <img className="icon" alt="website logo" src={mediumLogo} />
              </div>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={ikercasillas} />
            <div className="card-info">
              <div className="card-title">Ikercasillas</div>
              <div>Marketing Statergy</div>
              <div className="social-icons">
                <img className="icon" alt="website logo" src={mediumLogo} />
              </div>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={zidane} />
            <div className="card-info">
              <div className="card-title">Zidane</div>
              <div>Leadership & management</div>
              <div className="social-icons">
                <img className="icon" alt="website logo" src={linkedInLogo} />
                <img className="icon" alt="website logo" src={facebookLogo} />
              </div>
            </div>
          </div>
        </div>
        <p className="card-section-message">and You! ;)</p>
      </div>
    </>
  );
}
