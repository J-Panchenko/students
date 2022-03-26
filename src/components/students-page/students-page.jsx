import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import Filter from '../filter';
import withService from '../hoc';
import Pagination from '../pagination';
import SearchPanel from '../search-panel';
import StudentsList from '../students-list';
import './students-page.css';

function StudentsPage({ service }) {
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortDir, setSortDir] = useState('');
  const [students, setStudents] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const { getResource } = service;

  useEffect(() => {
    const getData = async () => {
      const result = await getResource(page, size, search, sortBy, sortDir);
      setStudents(result.data);
      setTotalPage(result.totalPages);
    };
    getData();
  }, [page, size, search, sortBy, sortDir]);

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

  const fileCSV = students.map((student) => ({
    name: student.name,
    id: student.id,
    class: student.class,
    score: student.score,
    speed: student.speed,
    parents: student.parents,
    tests: student.tests
      .map((test) => `Finding ${test.label}: score-${test.score}/speed-${test.speed}`),
  }));

  return (
    <section className="students-page">
      <Filter />
      <div className="container">
        <div className="students-page__headline">
          <h1 className="title">Students</h1>
          <SearchPanel
            search={search}
            setSearch={setSearch}
          />
          <CSVLink
            className="export-button"
            data={fileCSV}
            filename="students-data.csv"
          >
            <span className="export-button__text">Export CSV</span>
          </CSVLink>
        </div>
        <StudentsList
          students={students}
          setSortBy={setSortBy}
          sortDir={sortDir}
          setSortDir={setSortDir}
        />
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
