const getScoreClassName = (score) => {
  const value = parseFloat(score);
  const blueValue = value >= 90;
  const greenValue = value >= 80 && value < 90;
  const yellowValue = value >= 50 && value < 80;

  switch (true) {
    case blueValue:
      return 'value--blue';
    case greenValue:
      return 'value--green';
    case yellowValue:
      return 'value--yellow';
    case !score:
      return '';
    default:
      return 'value--red';
  }
};

export default getScoreClassName;
