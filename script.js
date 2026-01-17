
const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  let alphanumeric = (str.match(/[a-z0-9]/gi) || []).map(c => c.toLowerCase());
  let reversed = alphanumeric.slice().reverse();

  return alphanumeric.join("") === reversed.join("");

}

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please input a value");
    return;
  }

  const isPal = isPalindrome(input.value);

  result.textContent = isPal ? `${input.value} is a palindrome`
    : `${input.value} is not a palindrome`;

  result.classList.remove("success", "error");

  result.classList.add(isPal ? "success" : "error");

  input.value = "";
});
