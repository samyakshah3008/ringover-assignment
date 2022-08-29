import React from "react";
import "./teammember-cards-section.css";
import { teamMembers } from "../../database/teammembers-info";

export default function TeammemberCardsSection() {
  return (
    <>
      <div className="team-section">
        <p className="card-section-title">
          Without bonding and coordination, every project is a faliure. Look at
          who makes KICKSUP great. ;)
        </p>
        <div className="card-container">
          {teamMembers.map((member) => {
            return (
              <>
                <div className="card">
                  <img className="card-img" src={member.profile} />
                  <div className="card-info">
                    <div className="card-title">{member.name}</div>
                    <div>{member.domain}</div>
                    <div className="social-icons">
                      {member.social.map((socialIcons) => {
                        return (
                          <>
                            <img
                              className="icon"
                              alt="website logo"
                              src={socialIcons}
                            />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <p className="card-section-message">and You! ;)</p>
      </div>
    </>
  );
}
