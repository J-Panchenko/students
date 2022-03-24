import React, { useEffect, useState } from 'react';
import Filter from '../filter';
import withService from '../hoc';
import Pagination from '../pagination';
import SearchPanel from '../search-panel';
import StudentsList from '../students-list';
import './students-page.css';

function StudentsPage({ service }) {
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [students, setStudents] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const { getResource } = service;

  useEffect(() => {
    const getData = async () => {
      const result = await getResource(page, size);
      setStudents(result.data);
      setTotalPage(result.totalPages);
    };
    getData();
  }, [page, size]);

  const numberOfstudents = totalPage * size;
  const currentSizeEnd = page * size;
  const currentSizeStart = currentSizeEnd - (size - 1);

  const onPageChange = (value) => {
    const expectedPage = page + value;
    if (expectedPage !== 0 && expectedPage <= totalPage) {
      setPage(expectedPage);
    }
    return null;
  };

  return (
    <section className="students-page">
      <Filter />
      <div className="container">
        <div className="students-page__headline">
          <h1 className="title">Students</h1>
          <SearchPanel />
          <button className="export-button" type="button">
            <span className="export-button__text">Export CSV</span>
          </button>
        </div>
        <StudentsList students={students} />
        <Pagination
          numberOfstudents={numberOfstudents}
          currentSizeStart={currentSizeStart}
          currentSizeEnd={currentSizeEnd}
          onPageChange={onPageChange}
          size={size}
          onSizeChange={setSize}
        />
      </div>
    </section>
  );
}

export default withService(StudentsPage);
