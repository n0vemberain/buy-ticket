const allkbd = document.getElementsByClassName("kbd");
// console.log(allkbd);
let count = 0;
for (const onekbd of allkbd) {
  onekbd.addEventListener("click", function (event) {
    count = count + 1;
    onekbd.style.backgroundColor = "#1DD100";
    // console.log(count);
    document.getElementById("selectedSeat").innerText = count;
    document.getElementById("seatleft").innerText =
      document.getElementById("seatleft").innerText - 1;
    document.getElementById("Tprice").innerText = 550 * count;
    const details = document.getElementById("details");
    const li = document.createElement("li");

    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p.innerText = document.getElementById("selectedSeat").innerText;
    p2.innerText = "Economy";
    p3.innerText = "550";

    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    details.appendChild(li);
  });
}

document.getElementById("coupon").addEventListener("blur", function (event) {
  const couponCode = this.value.trim();
  let discount = 0;

  if (couponCode === "NEW15") {
    discount = 0.15 * parseInt(document.getElementById("Tprice").innerText);
  } else if (couponCode === "Couple20" && count >= 2) {
    discount = 0.2 * parseInt(document.getElementById("Tprice").innerText);
  } else {
    alert("Enter the correct coupon code");
  }

  document.getElementById("Gtotal").innerText =
    parseInt(document.getElementById("Tprice").innerText) - discount;
});


document.getElementById('next').addEventListener('click',function(event){
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const mail = document.getElementById('mail').value;
    if (!name || !email || !phone) {
        alert('Please fill out all fields.');
    } else {
      window.location.href = 'SUCCESS.html';
    }
});