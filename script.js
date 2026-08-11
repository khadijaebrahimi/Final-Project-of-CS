const form = document.getElementById("orderForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phonenumber").value;
  const address = document.getElementById("address").value;
  const payment = document.querySelector("input[name='pay']:checked");

  if (name === "" || phone === "" || address === "") {
    alert("Please fill in all fields");
    return;
  }

  if (!payment) {
    alert("Please select a payment method");
    return;
  }

  alert("Order placed successfully!");

  form.reset();
});
