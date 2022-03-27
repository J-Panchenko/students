import { useState } from 'react';

function useSelect(boolean) {
  const [selectAll, setSelectAll] = useState(boolean);
  const [select, setSelect] = useState(selectAll);
  const selectedClassName = (select) ? 'table-row--checked' : 'table-row';
  return {
    select,
    setSelect,
    selectedClassName,
    selectAll,
    setSelectAll,
  };
}

export default useSelect;
