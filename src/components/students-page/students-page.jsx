import React from 'react';
import { CSVLink } from 'react-csv';
import Filter from '../filter';
import withService from '../../hoc';
import Pagination from '../pagination';
import SearchPanel from '../search-panel';
import StudentsList from '../students-list';
import './students-page.css';
import { getFileCSV } from '../../models';
import { useData, useSearch, useSort } from '../../hooks';

function StudentsPage({ service }) {
  const { getStudentsList, getSortList } = service;
  const {
    students, setStudents, totalPages, setTotalPages, size, setSize, page, onPageChange,
  } = useData(getStudentsList);
  const {
    search, setSearch,
  } = useSearch({ ...useData(getStudentsList), getSortList });
  const { onSort } = useSort(size, page, setStudents, setTotalPages, search, getSortList);
  const fileCSV = getFileCSV(students);

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
            filename="students-list.csv"
          >
            <span className="export-button__text">Export CSV</span>
          </CSVLink>
        </div>
        <StudentsList
          students={students}
          onSort={onSort}
        />
        <Pagination
          page={page}
          size={size}
          totalPages={totalPages}
          onSizeChange={setSize}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
}

export default withService(StudentsPage);
