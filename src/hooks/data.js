import { useEffect, useState } from 'react';

function useData(getStudentsList) {
  const [students, setStudents] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [disabledBack, setDisabledBack] = useState(true);
  const [disabledForth, setDisabledForth] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const result = await getStudentsList(page, size);
      setStudents(result.data);
      setTotalPages(result.totalPages);
    };
    getData();
  }, [page, size]);

  const onPageChange = (value) => {
    const expectedPage = page + value;
    if (expectedPage >= 1 && expectedPage <= totalPages) {
      setPage(expectedPage);
      setDisabledBack(false);
      setDisabledForth(false);
    }
    if (expectedPage <= 1) {
      setDisabledBack(true);
    }
    if (expectedPage >= totalPages) {
      setDisabledForth(true);
    }
  };

  const disableBackBtn = (disabledBack) ? 'disabled' : '';
  const disableForthBtn = (disabledForth) ? 'disabled' : '';

  return {
    students,
    setStudents,
    totalPages,
    setTotalPages,
    size,
    setSize,
    page,
    setPage,
    onPageChange,
    disableBackBtn,
    disableForthBtn,
  };
}

export default useData;
