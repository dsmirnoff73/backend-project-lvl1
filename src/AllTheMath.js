export const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const isPrime = (num) => {
  for (let divider = 2, controlValue = Math.sqrt(num); divider <= controlValue; divider += 1) {
    if (num % divider === 0) return 'no';
  }
  return num > 1 ? 'yes' : 'no';
};

export const gcd = (x, y) => ((x === y) ? x : gcd(Math.max(x, y) - Math.min(x, y), Math.min(x, y)));
