document.addEventListener("click", function() {
  const firstDiv = document.querySelector('.first');
  const digits = document.querySelectorAll('.digit');

  digits.forEach(digit => {
    digit.addEventListener('click', function() {
      const number = this.dataset.number;
      firstDiv.innerText = number;
    });
  });

  firstDiv.addEventListener('click', function() {
    const currentNumber = parseInt(this.innerText);
    const nextNumber = currentNumber % 4 + 1; // Cycle from 1 to 4
    this.innerText = nextNumber;
  });
});
