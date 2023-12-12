import ContactList from "../component/contact/ContactList";

import React from "react";

const ContactView = React.memo(() => {
  console.log("contact");
  return (
    <div className="view">
      <div className="border">
        <div className="title">CONTACT</div>
        <ContactList />
      </div>
    </div>
  );
});

export default ContactView;
