$(".product-info button").click(() => {
  const emailInput = $("form input").val();

  if (emailValidation(emailInput) === false) {
    $("form .error-validation").text("Please Enter a Valid Email");
    $("form input").addClass("error-msg");
  } else {
    $(".sign-up-form").addClass("hidden");
    $(".success-msg").removeClass("hidden");

    $("main.success-msg span").html(`<b>${emailInput}</b>`);
  }
});

function emailValidation(email) {
  // Regular expression for a basic email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the pattern
  return emailPattern.test(email);
}
