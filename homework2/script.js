const array = [100, 55, 15, 300, 20];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  console.log(`${sum} + ${array[i]} = ${sum + array[i]}`);
  sum += array[i];
}

console.log("Итоговая сумма:", sum);

