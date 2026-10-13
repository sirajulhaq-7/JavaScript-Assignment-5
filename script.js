// Employee Login System
let isPassword = prompt("Enter your Password: ");
if (isPassword.toLowerCase() == "correct") {
  console.log("Login Successful");
} else {
  console.log("Incorrect Password");
}

// Online Order Approval
let isPayment = "Done";
if (isPayment == "Done") {
  console.log("Approve the order");
} else {
  console.log("Reject the order");
}

// Student Result System
let marks = prompt("Enter marks: ");
if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Office Attendence Check
let isOntime = prompt("They arrived on time: ");
if (isOntime == "yes") {
  console.log("Present");
} else {
  console.log("Absent");
}

// Discount Eligibility
let isPremiumUser = prompt("User is a premium member: ");
if (isPremiumUser == "yes") {
  console.log("Discount Applied");
} else {
  console.log("No Discount Available");
}

// Multiple Condition
let Score = prompt("Employee Performance rating system: ");
if (Score >= 90) {
  console.log("Excellent");
} else if (Score >= 70) {
  console.log("Good");
} else if (Score >= 50) {
  console.log("Average");
} else {
  console.log("Poor");
}
