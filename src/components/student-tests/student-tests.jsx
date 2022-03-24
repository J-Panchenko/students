import React from 'react';
import uuid from 'react-uuid';
import StudentTastsData from '../student-tests-data';
import './student-tests.css';

function StudentTests({
  name, id, tests,
}) {
  return (
    <td className="table-data__info" colSpan={8}>
      <div>
        <p>{name}</p>
        <p>{id}</p>
      </div>
      <ol>
        {tests.map((test) => (
          <StudentTastsData key={uuid()} {...test} />
        ))}
      </ol>
    </td>
  );
}
export default StudentTests;
