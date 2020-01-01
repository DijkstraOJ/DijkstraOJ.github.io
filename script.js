(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  function closeMenu(restoreFocus = false) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "打开导航");
    navigation.classList.remove("is-open");
    if (restoreFocus) menuButton.focus();
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "打开导航" : "关闭导航");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu(true);
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });

  const desktopQuery = window.matchMedia("(min-width: 701px)");
  desktopQuery.addEventListener("change", () => closeMenu());

  document.querySelector("#copyright-year").textContent =
    new Date().getFullYear();

  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );

    document
      .querySelectorAll(".reveal")
      .forEach((element) => revealObserver.observe(element));
    document.documentElement.classList.add("js-ready");
  }
})();
