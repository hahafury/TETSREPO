import React from "react";

function ErrorMessage({ children }) {
  return <div className="alert alert-danger">{children}</div>;
}

export default ErrorMessage;
