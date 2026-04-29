// 🔹 GET DATA FROM URL
const params = new URLSearchParams(window.location.search);
const plan = params.get("plan");
const price = params.get("price");

// 🔹 DEFAULT PRICE (for contact.html direct payment)
let amount = 99900; // ₹999 default
let planName = "Custom Payment";

// 🔹 IF COMING FROM SERVICES PAGE
if (price && plan) {
  amount = parseInt(price) * 100;
  planName = plan.toUpperCase() + " Plan";
}

// 🔹 SHOW PLAN ON CONTACT PAGE (if exists)
const planText = document.getElementById("selected-plan");
if (planText) {
  planText.innerText = `${planName} - ₹${amount / 100}`;
}

// 🔹 SELECT BUTTON
const payBtn = document.getElementById("pay-btn");

// 🔹 FUNCTION TO OPEN RAZORPAY
function openRazorpay() {

  var options = {
    key: "rzp_live_p2lxTx1ReYx6gC",
    amount: amount,
    currency: "INR",
    name: "SellSite",
    description: planName,

    handler: function (response) {
      alert(`Payment Successful for ${planName}`);
      console.log(response);
    },

    theme: {
      color: "#ff6f91"
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}

// 🔹 CASE 1: CONTACT PAGE BUTTON
if (payBtn) {
  payBtn.addEventListener("click", function (e) {
    e.preventDefault();
    openRazorpay();
  });
}

// 🔹 CASE 2: DIRECT FROM SERVICES PAGE
if (plan && price && !payBtn) {
  // Auto open Razorpay
  openRazorpay();
}