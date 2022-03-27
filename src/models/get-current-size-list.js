function getCurrentSizeList(currentPage, totalPage, sizeOnPage) {
  const numberOfstudents = totalPage * sizeOnPage;
  const currentSizeOfPageEnd = currentPage * sizeOnPage;
  const currentSizeOfPageStart = currentSizeOfPageEnd - (sizeOnPage - 1);

  return {
    numberOfstudents,
    currentSizeOfPageStart,
    currentSizeOfPageEnd,
  };
}

export default getCurrentSizeList;
