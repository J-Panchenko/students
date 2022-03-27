import { useEffect, useState } from 'react';

function useData(getStudentsList) {
  const [students, setStudents] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [disabledBtn, setDisabledBtn] = useState(true);

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
    if (expectedPage !== 0 && expectedPage <= totalPages) {
      setDisabledBtn(false);
      setPage(expectedPage);
    }
    return setDisabledBtn(true);
  };

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
    disabledBtn,
  };
}

export default useData;
