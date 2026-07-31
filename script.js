(() => {
  const root = document.documentElement;
  const data = window.portfolioData;
  const savedLanguage = localStorage.getItem("portfolio-language");
  const savedTheme = localStorage.getItem("portfolio-theme");
  let language = savedLanguage === "fa" ? "fa" : "en";

  const get = (source, path) =>
    path.split(".").reduce((value, key) => value?.[key], source);

  const hasValue = (value) =>
    value !== undefined &&
    value !== null &&
    (typeof value !== "string" || value.trim() !== "");

  const list = (value) => (Array.isArray(value) ? value : []);

  const hasAny = (item, fields) =>
    fields.some((field) => hasValue(item?.[field]));

  const detailRow = (label, value) =>
    hasValue(value)
      ? `<span>${hasValue(label) ? `<strong>${label}:</strong> ` : ""}${value}</span>`
      : "";

  const safeLink = (url) => url || "#";

  const linkButtons = (links) =>
    list(links)
      .filter(({ label, url }) => hasValue(label) && hasValue(url))
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

  const textLinks = (links) =>
    list(links)
      .filter(({ label, url }) => hasValue(label) && hasValue(url))
      .map(
        ({ label, url }) =>
          `<a href="${safeLink(url)}" target="_blank" rel="noreferrer">${label}</a>`,
      )
      .join('<span aria-hidden="true">·</span>');

  function renderMedia(imageKey, imageId, placeholderId) {
    const source = data.images?.[imageKey];
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
    document.title = [copy.name, copy.hero?.eyebrow]
      .filter(hasValue)
      .join(" · ");

    document.querySelectorAll("[data-copy]").forEach((element) => {
      const value = get(copy, element.dataset.copy);
      element.textContent = hasValue(value) ? value : "";
      element.hidden = !hasValue(value);
    });

    const links = list(copy.links);

    document.querySelectorAll("[data-links='primary']").forEach((element) => {
      element.innerHTML = linkButtons(links);
    });

    document.querySelectorAll("[data-links='contact']").forEach((element) => {
      element.innerHTML = linkButtons(
        links.filter((link) => link.kind === "contact"),
      );
    });

    document.querySelectorAll("[data-links='profile']").forEach((element) => {
      element.innerHTML = textLinks(
        links.filter((link) => link.kind === "profile"),
      );
    });

    const updates = list(copy.updates).filter((item) =>
      hasAny(item, ["date", "title", "description", "link"]),
    );
    document.getElementById("updates-list").innerHTML = updates
      .map(
        (item) => `
          <article class="timeline-item reveal">
            ${item.date ? `<span class="timeline-date">${item.date}</span>` : ""}
            ${
              item.title || item.description
                ? `<div>
                    ${item.title ? `<h3>${item.title}</h3>` : ""}
                    ${item.description ? `<p>${item.description}</p>` : ""}
                  </div>`
                : ""
            }
            ${
              item.link && copy.labels?.details
                ? `<a class="link-button" href="${safeLink(item.link)}"${item.link.startsWith("#") ? "" : ' target="_blank" rel="noreferrer"'}>${copy.labels.details}</a>`
                : ""
            }
          </article>`,
      )
      .join("");

    const education = list(copy.education).filter((item) =>
      hasAny(item, ["degree", "university", "supervisor", "thesis", "gpa", "date", "logo"]),
    );
    document.getElementById("education-list").innerHTML = education
      .map(
        (item) => `
          <article class="education-card reveal">
            <div class="logo-box">${
              item.logo
                ? `<img src="${item.logo}" alt="" loading="lazy" />`
                : copy.labels?.logo || ""
            }</div>
            <div class="education-copy">
              ${hasValue(item.degree) ? `<h3>${item.degree}</h3>` : ""}
              ${hasValue(item.university) ? `<p>${item.university}</p>` : ""}
              ${
                hasAny(item, ["supervisor", "thesis", "gpa"])
                  ? `<div class="detail-list">
                      ${detailRow(copy.labels?.supervisor, item.supervisor)}
                      ${detailRow(copy.labels?.thesis, item.thesis)}
                      ${detailRow(copy.labels?.gpa, item.gpa)}
                    </div>`
                  : ""
              }
            </div>
            ${hasValue(item.date) ? `<span class="item-meta">${item.date}</span>` : ""}
          </article>`,
      )
      .join("");

    const awards = list(copy.awards).filter((item) =>
      hasAny(item, ["title", "description", "institution", "date", "logo"]),
    );
    document.getElementById("awards-list").innerHTML = awards
      .map(
        (item) => {
          const meta = [item.institution, item.date].filter(hasValue).join(" · ");
          return `
          <article class="award-card reveal">
            <div class="logo-box">${
              item.logo
                ? `<img src="${item.logo}" alt="" loading="lazy" />`
                : copy.labels?.logo || ""
            }</div>
            ${item.title ? `<h3>${item.title}</h3>` : ""}
            ${item.description ? `<p>${item.description}</p>` : ""}
            ${meta ? `<span class="item-meta">${meta}</span>` : ""}
          </article>`;
        },
      )
      .join("");

    const publications = list(copy.publications).filter((item) =>
      hasAny(item, ["title", "authors", "venue", "image", "caption", "links"]),
    );
    document.getElementById("publications-list").innerHTML = publications
      .map(
        (item, index) => `
          <article class="publication-card reveal">
            <div class="publication-copy">
              ${item.title ? `<h3>${item.title}</h3>` : ""}
              ${item.authors ? `<p class="publication-authors">${item.authors}</p>` : ""}
              ${item.venue ? `<p class="publication-venue">${item.venue}</p>` : ""}
            </div>
            <figure class="publication-media${item.image ? "" : " media-placeholder"}">
              ${
                item.image
                  ? `<a class="publication-image-link" href="${item.image}" target="_blank" rel="noreferrer" aria-label="${copy.labels?.openFigure || "Open full-size figure"}${item.title ? `: ${item.title}` : ""}">
                      <span class="publication-image-crop"${item.imageAspectRatio ? ` style="--figure-aspect-ratio: ${item.imageAspectRatio}"` : ""}>
                        <img src="${item.image}" alt="" loading="lazy" />
                      </span>
                    </a>`
                  : `<span class="placeholder-symbol" aria-hidden="true">0${index + 1}</span>
                    ${copy.labels?.paper ? `<span>${copy.labels.paper}</span>` : ""}`
              }
              ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ""}
            </figure>
            ${list(item.links).length ? `<div class="publication-actions button-row">${linkButtons(item.links)}</div>` : ""}
          </article>`,
      )
      .join("");

    const credentials = list(copy.credentials).filter((item) =>
      hasAny(item, ["title", "institution", "date", "link", "icon"]),
    );
    document.getElementById("credentials-list").innerHTML = credentials
      .map(
        (item) => `
          <article class="credential-item reveal">
            <div class="credential-copy">
              ${item.title ? `<h3>${item.title}</h3>` : ""}
              ${item.institution ? `<p>${item.institution}</p>` : ""}
            </div>
            ${item.date ? `<span class="item-meta">${item.date}</span>` : ""}
            ${
              item.link && copy.labels?.details
                ? `<a class="link-button${item.icon ? " has-custom-icon" : ""}" href="${safeLink(item.link)}" target="_blank" rel="noreferrer">
                    ${copy.labels.details}${
                      item.icon
                        ? `<img class="button-icon" src="${item.icon}" alt="" aria-hidden="true" />`
                        : ""
                    }
                  </a>`
                : ""
            }
          </article>`,
      )
      .join("");

    document.getElementById("language-label").textContent =
      isPersian ? "EN" : "FA";
    document.getElementById("current-year").textContent = isPersian
      ? new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
          year: "numeric",
        }).format(new Date())
      : new Date().getFullYear();
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
  render();
})();
