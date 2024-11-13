// Tab Switching
document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"));
        document.querySelectorAll(".form-content").forEach((form) => form.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(button.dataset.target).classList.add("active");
    });
});

// Password Toggle
document.querySelectorAll(".toggle-password").forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const passwordInput = eyeIcon.previousElementSibling;
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    });
});
