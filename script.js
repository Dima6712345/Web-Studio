// Знаходимо елементи в DOM
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector(".Navigation-List");

const updateMenuState = () => {
    const isOpen = nav.classList.contains("is-open");
    burgerBtn.classList.toggle("is-open", isOpen);
    burgerBtn.setAttribute("aria-expanded", String(isOpen));
    burgerBtn.setAttribute(
        "aria-label",
        isOpen ? "Закрити меню" : "Відкрити меню",
    );
};

// Слухаємо клік на кнопці
burgerBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    nav.classList.toggle("is-open");
    updateMenuState();
});

nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        updateMenuState();
    }
});

// Закриваємо меню при кліку поза ним
document.addEventListener("click", (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnBurger = burgerBtn.contains(event.target);

    if (!isClickInsideNav && !isClickOnBurger) {
        nav.classList.remove("is-open");
        updateMenuState();
    }
});