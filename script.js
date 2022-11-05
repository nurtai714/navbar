let add = document.querySelector('#add');
let substract = document.querySelector('#substract');

console.log(add, substract);

add.addEventListener('click', function () {
  let output = document.querySelector('#output');
  let result = Number(output.innerText) + 1;

  if (result > 100) {
    result = 0;
  }

  output.innerText = result;
});

substract.addEventListener('click', function () {
  let output = document.querySelector('#output');
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
});
