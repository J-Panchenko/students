import { useEffect, useState } from 'react';

function useSearch({
  size, page, setStudents, setTotalPages, getSortList,
}) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getData = async () => {
      const result = await getSortList(page, size, search);
      setStudents(result.data);
      setTotalPages(result.totalPages);
    };
    getData();
  }, [page, size, search]);

  return {
    search,
    setSearch,
  };
}

export default useSearch;
