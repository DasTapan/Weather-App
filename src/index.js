const input = document.querySelector("input[type='search']");
console.log(input);

const btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", () => {
  console.log(input.value);
});
