export default class TestService {
  apiBase = 'https://test-task-j.herokuapp.com/data';

  getStudentsList = async (page, size) => {
    const result = await fetch(`${this.apiBase}?page=${page}&size=${size}`);

    if (!result.ok) {
      throw new Error(`Could not fetch ${this.apiBase}, received ${result.status}`);
    }

    return await result.json();
  };

  getSortList = async (page, size, search = '', sortBy = '', sortDir = '') => {
    const result = await fetch(`${this.apiBase}?page=${page}&size=${size}&search=${search}&sortBy=${sortBy}&sortDir=${sortDir}`);

    if (!result.ok) {
      throw new Error(`Could not fetch ${this.apiBase}, received ${result.status}`);
    }

    return await result.json();
  };
}
