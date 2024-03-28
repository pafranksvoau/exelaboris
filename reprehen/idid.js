function isReverse(direction) {
  const reverseDirections = new Set(['right', 'down']);
  return reverseDirections.has(direction);
}
