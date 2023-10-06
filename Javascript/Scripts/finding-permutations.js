const list = [1, 2, 3];

function permutations(l) {
  const result = [];
  if (l.length === 1) return [l];

  for (let i = 0; i < l.length; i++) {
    const item = l[i];
    const others = permutations(l.filter((_, index) => index !== i));
    for (let i = 0; i < others.length; i++) {
      result.push([item, ...others[i]]);
    }
  }

  return result;
}

// Log to console
console.log(permutations(list));
