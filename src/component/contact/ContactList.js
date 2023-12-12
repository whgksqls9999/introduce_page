import React from "react";

const ContactList = React.memo(() => {
  return (
    <div className="contact-list">
      <div className="contact-list-item">
        <div className="contact-list-item-img"></div>
        <div>010-7530-5755</div>
      </div>
      <div className="contact-list-item">
        <div className="contact-list-item-img"></div>
        <div>whgksqls9999@naver.com</div>
      </div>
      <div className="contact-list-item">
        <a href="https://jhb0412.tistory.com/" target="_blank">
          <div className="contact-list-item-img"></div>
          <div>jhb0412.tistory.com</div>
        </a>
      </div>
      <div className="contact-list-item">
        <a href="https://github.com/whgksqls9999" target="_blank">
          <div className="contact-list-item-img"></div>
          <div>github.com/whgksqls9999</div>
        </a>
      </div>
    </div>
  );
});

export default ContactList;