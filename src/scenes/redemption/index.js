import React, { useState } from 'react';
import { render } from 'react-dom';
import DialogComponent from './dialog';
import Redemption from './redemption';
import RedemptionWithGold from './redemptionGold';
import RedemptionWithCash from './redemptionCash';
import RedemptionHome from './redemptionHome';

const RedemptionWithDialog = () => {
  const [showRedemption, setShowRedemption] = useState(false);

  const handleDialogButtonClick = () => {
    setShowRedemption(true);
  };

  return (
    <div>
      {!showRedemption && <DialogComponent onDialogButtonClick={handleDialogButtonClick} />}
      {showRedemption && <RedemptionHome />}
    </div>
  );
};
export default RedemptionWithDialog;


