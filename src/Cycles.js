export function rangeSum(start, end) {
  let sum = 0;
  const from = Math.min(start, end);
  const to = Math.max(start, end);

  for (let i = from; i <= to; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

export function iterationCount(a) {
  let count = 0;
  let cur = a;
  do {
    cur /= 2;
    count++;
  } while (cur > 0.1);
  return count;
}

export function symbolsReplace(message) {
  if (!message) return '';

  let resArray = message.split('');
  let i = 0;

  do {
    if ((i + 1) % 3 === 0) {
      resArray[i] = '_';
    }
    i++;
  } while (i < resArray.length);

  return resArray.join('');
}
