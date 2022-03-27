function getSpeedClassName(speed) {
  const actualValue = speed.toLowerCase();
  const aboveExp = 'above expected';
  const asExp = 'as expected';
  const belowExp = 'below expected';

  switch (actualValue) {
    case aboveExp:
      return 'value--blue';
    case asExp:
      return 'value--green';
    case belowExp:
      return 'value--red';
    default:
      return '';
  }
}

export default getSpeedClassName;
