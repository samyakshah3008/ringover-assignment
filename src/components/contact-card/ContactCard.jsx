import React from "react";
import "./contact-card.css";

export default function ContactCard() {
  return (
    <>
      <main className="contact-us-container">
        <div className="contact-card">
          <div className="container-title">REACH US AT</div>
          <div className="contact-us-info">
            <div>
              <div className="contact-mail">support@kicksup.com</div>
              <div>for any technical support</div>
            </div>
            <div>
              <div className="contact-mail">info@kicksup.com</div>
              <div>for more information</div>
            </div>
            <div>
              <div className="contact-mail">feedback@kicksup.com</div>
              <div>to send your feedback</div>
            </div>
            <div>
              <div className="contact-mail">jobs@kicksup.com</div>
              <div>to work with us</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
