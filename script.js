(() => {
  const root = document.documentElement;
  const data = window.portfolioData;
  const savedLanguage = localStorage.getItem("portfolio-language");
  const savedTheme = localStorage.getItem("portfolio-theme");
  let language = savedLanguage === "fa" ? "fa" : "en";

  const get = (source, path) =>
    path.split(".").reduce((value, key) => value?.[key], source);

  const safeLink = (url) => url || "#";

  const linkButtons = (links) =>
    links
      .map(
        ({ label, url, icon }) =>
          `<a class="link-button${icon ? " has-custom-icon" : ""}" href="${safeLink(url)}" ${
            url?.startsWith("mailto:") ? "" : 'target="_blank" rel="noreferrer"'
          }>${label}${
            icon
              ? `<img class="button-icon" src="${icon}" alt="" aria-hidden="true" />`
              : ""
          }</a>`,
      )
      .join("");

  function renderMedia(imageKey, imageId, placeholderId) {
    const source = data.images[imageKey];
    const image = document.getElementById(imageId);
    const placeholder = document.getElementById(placeholderId);
    if (source) {
      image.src = source;
      image.hidden = false;
      placeholder.hidden = true;
    }
  }

  function render() {
    const copy = data[language];
    const isPersian = language === "fa";
    root.lang = language;
    root.dir = isPersian ? "rtl" : "ltr";
    document.title = `${copy.name} · ${copy.hero.eyebrow}`;

    document.querySelectorAll("[data-copy]").forEach((element) => {
      const value = get(copy, element.dataset.copy);
      if (value) element.textContent = value;
    });

    document.querySelectorAll("[data-links='primary']").forEach((element) => {
      element.innerHTML = linkButtons(copy.links);
    });

    document.getElementById("updates-list").innerHTML = copy.updates
      .map(
        (item) => `
          <article class="timeline-item reveal">
            <span class="timeline-date">${item.date}</span>
            <div>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
            <span class="timeline-tag">${item.tag}</span>
          </article>`,
      )
      .join("");

    document.getElementById("education-list").innerHTML = copy.education
      .map(
        (item) => `
          <article class="education-card reveal">
            <div class="logo-box">${
              item.logo
                ? `<img src="${item.logo}" alt="" loading="lazy" />`
                : copy.labels.logo
            }</div>
            <div class="education-copy">
              <h3>${item.degree}</h3>
              <p>${item.university}</p>
              <div class="detail-list">
                <span><strong>${copy.labels.supervisor}:</strong> ${item.supervisor}</span>
                <span><strong>${copy.labels.thesis}:</strong> ${item.thesis}</span>
              </div>
            </div>
            <span class="item-meta">${item.date}</span>
          </article>`,
      )
      .join("");

    document.getElementById("awards-list").innerHTML = copy.awards
      .map(
        (item) => `
          <article class="award-card reveal">
            <div class="logo-box">${
              item.logo
                ? `<img src="${item.logo}" alt="" loading="lazy" />`
                : copy.labels.logo
            }</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span class="item-meta">${item.institution} · ${item.date}</span>
          </article>`,
      )
      .join("");

    document.getElementById("publications-list").innerHTML = copy.publications
      .map(
        (item, index) => `
          <article class="publication-card reveal">
            ${
              item.image
                ? `<div class="publication-media">
                    <img src="${item.image}" alt="" loading="lazy" />
                  </div>`
                : `<div class="publication-media media-placeholder">
                    <span class="placeholder-symbol" aria-hidden="true">0${index + 1}</span>
                    <span>${copy.labels.paper}</span>
                  </div>`
            }
            <div class="publication-copy">
              <span class="publication-number">0${index + 1} / 0${copy.publications.length}</span>
              <h3>${item.title}</h3>
              <p class="publication-authors">${item.authors}</p>
              <p class="publication-venue">${item.venue}</p>
              <div class="button-row">${linkButtons(item.links)}</div>
            </div>
          </article>`,
      )
      .join("");

    document.getElementById("credentials-list").innerHTML = copy.credentials
      .map(
        (item) => `
          <article class="credential-item reveal">
            <div class="credential-copy">
              <h3>${item.title}</h3>
              <p>${item.description} · ${item.institution}</p>
            </div>
            <span class="item-meta">${item.date}</span>
            <a class="link-button${item.icon ? " has-custom-icon" : ""}" href="${safeLink(item.link)}" target="_blank" rel="noreferrer">
              ${copy.labels.details}${
                item.icon
                  ? `<img class="button-icon" src="${item.icon}" alt="" aria-hidden="true" />`
                  : ""
              }
            </a>
          </article>`,
      )
      .join("");

    document.getElementById("language-label").textContent =
      isPersian ? "EN" : "FA";
    document
      .getElementById("language-toggle")
      .setAttribute(
        "aria-label",
        isPersian ? "Switch to English" : "تغییر زبان به فارسی",
      );

    localStorage.setItem("portfolio-language", language);
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    const toggle = document.getElementById("theme-toggle");
    toggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
    );
    toggle.title =
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  }

  const initialTheme =
    savedTheme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  setTheme(initialTheme);

  document.getElementById("theme-toggle").addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  document.getElementById("language-toggle").addEventListener("click", () => {
    language = language === "en" ? "fa" : "en";
    render();
  });

  renderMedia("portrait", "portrait-image", "portrait-placeholder");
  renderMedia("hobby", "hobby-image", "hobby-placeholder");
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
  render();
})();
