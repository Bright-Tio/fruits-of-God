
// Highlight current nav
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#1e3a8a";
        link.style.textDecoration = "underline";
    }
});

// Collapsible sections
const coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Save checkbox state in localStorage
const checkboxes = document.querySelectorAll(".checkbox-section input");
checkboxes.forEach(cb => {
    const id = cb.id;
    cb.checked = localStorage.getItem(id) === "true";
    cb.addEventListener("change", () => {
        localStorage.setItem(id, cb.checked);
    });
});
