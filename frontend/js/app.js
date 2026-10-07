// ========================================
// BUSARO - Main JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("BUSARO website loaded successfully.");

    // ==============================
    // BOOKING FORM
    // ==============================

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Booking request received successfully!");

        });
    }


    // ==============================
    // LOGIN FORM
    // ==============================

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Login system will be connected with backend.");

        });
    }


    // ==============================
    // SIGNUP FORM
    // ==============================

    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const password =
                document.getElementById("password").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {

                alert("Passwords do not match.");

                return;
            }

            alert("Account created successfully!");

        });
    }

});