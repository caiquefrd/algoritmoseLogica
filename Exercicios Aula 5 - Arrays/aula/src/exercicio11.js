matriz = [
  [9, 2, 4],
  [6, 5, 7],
  [2, 1, 3],
];
i = 0;
s = 0;
while (i < matriz.length) {
  j = 0;
  while (j < matriz[i].length) {
    s += matriz[i][j];
    j++;
  }
  i++;
}
console.log("Somatório:", s);
