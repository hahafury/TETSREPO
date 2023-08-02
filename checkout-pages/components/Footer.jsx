import React from "react";

function Footer() {
  return (
    <div className="py-3" id="cp-footer">
      <div className="container px-0">
        Need help? Call us at <a href="tel: 8336991888">(833) 699-1888</a> or
        visit our{" "}
        <a href="http://help.theepochtimes.com/" target="_blank">
          Help Center
        </a>
        <br />
        Copyright © {new Date().getFullYear()} The Epoch Times
      </div>
    </div>
  );
}

export default Footer;
