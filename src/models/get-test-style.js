function getTestStyle(score, speed) {
  const valueClassName = (!score || !speed) ? 'test-row test-row--red' : 'test-row';
  const levelScore = (!score) ? 'NIL' : score;
  const levelSpeed = (!speed) ? 'NIL' : speed;
  return {
    valueClassName,
    levelScore,
    levelSpeed,
  };
}

export default getTestStyle;
