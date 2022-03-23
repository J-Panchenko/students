import React from 'react';
import './table-data.css';

function TableData({
  uuid, name, id, group, score, speed, parents,
}) {
  return (
    <tr className="table-row" key={uuid}>
      <td className="table-data table-data__checkbox">
        <label className="label" htmlFor={id}>
          <input className="checkbox" type="checkbox" id={id} />
          <span className="thead-col__text visually-hidden">select</span>
        </label>
      </td>
      <td className="table-data table-data__name">
        <span className="table-data__value">
          {name}
        </span>
      </td>
      <td className="table-data table-data__id">
        <span className="table-data__value">
          {id}
        </span>
      </td>
      <td className="table-data table-data__class">
        <span className="table-data__value">
          {group}
        </span>
      </td>
      <td className="table-data table-data__score">
        <span className="table-data__value">
          {score}
        </span>
      </td>
      <td className="table-data table-data__speed">
        <span className="table-data__value">
          {speed}
        </span>
      </td>
      <td className="table-data table-data__parents">
        <span className="table-data__value table-data__value-perents">
          {parents}
        </span>
      </td>
    </tr>
  );
}

export default TableData;
