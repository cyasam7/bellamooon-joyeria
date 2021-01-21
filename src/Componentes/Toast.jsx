import React from "react";

function Toast() {
  return (
    <div
      class="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="mr-auto">{titulo}</strong>
        <button
          type="button"
          class="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          {/* <span aria-hidden="true">&times;</span> */}
        </button>
      </div>
      <div class="toast-body">{texto}</div>
    </div>
  );
}

export default Toast;
