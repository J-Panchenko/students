function getFileCSV(students) {
  return students.map((student) => ({
    name: student.name,
    id: student.id,
    class: student.class,
    score: student.score,
    speed: student.speed,
    parents: student.parents,
    tests: student.tests
      .map((test) => `Finding ${test.label}: score-${test.score}/speed-${test.speed}`),
  }));
}

export default getFileCSV;
