document.addEventListener("astro:after-swap", () => {
  const toggleMenu = document.querySelector("[data-toggle-nav]")
  const navbar = document.querySelector("[data-navbar]");
  const overlayNav = document.querySelector("[data-nav-overlay]");

  if (toggleMenu) {
    toggleMenu.addEventListener("click", (e) => {
      e.preventDefault();

      if (toggleMenu.getAttribute("data-open-nav") === "false") {
        toggleMenu.setAttribute("data-open-nav", "true");
        overlayNav.setAttribute("data-is-visible", "true");
        document.body.classList.add("!overflow-y-hidden");
        navbar.style.height = `${navbar.scrollHeight}px`;
      } else {
        toggleMenu.setAttribute("data-open-nav", "false");
        overlayNav.setAttribute("data-is-visible", "false");
        document.body.classList.remove("!overflow-y-hidden");
        navbar.style.height = "0px";
      }
    });

    navbar.addEventListener("click", () => {
      toggleMenu.setAttribute("data-open-nav", "false");
      overlayNav.setAttribute("data-is-visible", "false");
      document.body.classList.remove("!overflow-y-hidden");
      navbar.style.height = "0px";
    });

    overlayNav.addEventListener("click", () => {
      toggleMenu.setAttribute("data-open-nav", "false");
      overlayNav.setAttribute("data-is-visible", "false");
      document.body.classList.remove("!overflow-y-hidden");
      navbar.style.height = "0px";
    });
  }
})