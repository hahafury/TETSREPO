import React from "react";

interface ErrorMessageProps {
  errorMsg: string;
}

function ErrorMessage({ errorMsg }: ErrorMessageProps) {
  return (
    <div className="bg-red-200 text-red-800 text-xl text-center py-3">
      <p>{errorMsg}</p>
    </div>
  );
}

export default ErrorMessage;
