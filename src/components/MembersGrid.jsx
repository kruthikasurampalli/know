// import React from 'react';
import './MembersGrid.css';

function MembersGrid({ members, membersData, onMemberSelect }) {
  return (
    <div id="membersGrid">
      <div className="members-header">
        <h2>👥 Members</h2>
        {/* <p>Click on a member to view their portfolio</p> */}
      </div>
      
      <div className="members-container">
        {members.map((member) => {
          const data = membersData[member];
          const firstName = data?.FirstName || '';
          const lastName = data?.LastName || '';
          const name = firstName && lastName ? `${firstName} ${lastName}` : data?.FullName || data?.Profile?.[0]?.Name || member;
        //   const title = data?.Profile?.[0]?.Title || 'Team Member';
          const profileImg = data?.ProfilePicture || data?.Profile?.[0]?.ProfileImage;
          
          return (
            <div 
              key={member} 
              className="member-card"
              onClick={() => onMemberSelect(member)}
              role="button"
              tabIndex={0}
            //   title={`View ${name}'s portfolio`}
            >
              <div className="member-image">
                {profileImg ? (
                  <img src={profileImg} alt={name} />
                ) : (
                  <img 
                    src={`https://avatars.githubusercontent.com/${member}?size=160`} 
                    alt={name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="avatar-placeholder">${name.charAt(0).toUpperCase()}</div>`;
                    }}
                  />
                )}
              </div>
              <div className="member-info">
                <h3>{name}</h3>
                {/* <p className="member-title">{title}</p> */}
                <p className="member-username">@{member}</p>
              </div>
              <div className="member-action">
                <span>View Profile →</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MembersGrid;
