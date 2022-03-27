import { useState } from 'react';

function useShowInfo() {
  const [showInfo, setShowInfo] = useState(false);
  const arrowShowClassName = (showInfo) ? 'drop-down-btn__arrow--reverse' : 'drop-down-btn__arrow';
  return {
    showInfo,
    setShowInfo,
    arrowShowClassName,
  };
}

export default useShowInfo;
