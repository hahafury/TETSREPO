import React from 'react';

function GiftCardModal() {
    return (
        <div className="modal" id="giftcard-terms-popup">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">
                Terms and Conditions for Gift Card offer
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default GiftCardModal;