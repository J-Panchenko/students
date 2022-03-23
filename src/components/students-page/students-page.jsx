import React, { useEffect, useState } from 'react';
import Filter from '../filter';
import withService from '../hoc';
import Pagination from '../pagination';
import SearchPanel from '../search-panel';
import Table from '../table';
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
        <Table students={students} />
        <Pagination totalPage={totalPage} size={size} />
      </div>
    </section>
  );
}

export default withService(StudentsPage);
