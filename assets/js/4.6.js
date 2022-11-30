/*
This function take a number and factorize it .
*/
function factorize(num) {
  if (num < 0)
    return -1;
  else if (num == 0)
    return 1;
  else {
    return (num * factorize(num - 1));
  }
}

function exercise46() {
  alert(factorize(3));
}