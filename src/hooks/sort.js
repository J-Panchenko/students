import { useEffect, useState } from 'react';

function useSort(size, page, setStudents, setTotalPages, search, getSortList) {
  const [sortBy, setSortBy] = useState('');
  const [sortDir, setSortDir] = useState('');
  const onSort = (sortValue) => [setSortBy(sortValue), setSortDir((sortDir === -1) ? 1 : -1)];

  useEffect(() => {
    const getData = async () => {
      const result = await getSortList(page, size, search, sortBy, sortDir);
      setStudents(result.data);
      setTotalPages(result.totalPages);
    };
    getData();
  }, [page, size, search, sortBy, sortDir]);

  return {
    onSort,
  };
}

export default useSort;
