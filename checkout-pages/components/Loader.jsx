import React from "react";

function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
