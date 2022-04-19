# updated-portfolio

## Description

In this project, I made a new portfolio using HTML, CSS, JavaScript, and Bulma. This portfolio inludes a navbar, about me section, project section, and a contact section at the bottom.

## Table of Contents

- [Webpage Preview](#webpage-preview-)
- [Code-Snippet](#code-snippet-)
- [Usage](#usage-)
- [Skill-Improved](#skill-improved-)
- [Technologies](#technologies-)
- [Authors](#authors-)

## Webpage Preview

![Porfolio](https://drive.google.com/file/d/1Jv6Uv2ByqknbdZokZi7WU4Bv1TftL134/view)

## Code-Snippet

HTML/Bulma

Setting up a modal using Bulma, once the button is clicked, the image sourced will appear on the screen.

```HTML
 <section>
      <div class="modal" id="celebrity-matchmaker">
        <div class="modal-background" id="cm-background"></div>
        <div class="modal-content has-background-white py-5 px-5">
          <img src="https://user-images.githubusercontent.com/101283174/163512126-d8f0d253-8d8f-4f7d-9a83-010d1c50411c.gif" alt="">
        </div>
      </div>
    </section>
```

JavaScript

Event listener to make the gif of projects show up on the screen when button is clicked.

```JavaScript
var cmButton = document.querySelector("#cm-button");
var cmModalBackground = document.querySelector("#cm-background");
var cmModal = document.querySelector("#celebrity-matchmaker")

cmButton.addEventListener("click", () => {
    cmModal.classList.add("is-active");
})

cmModalBackground.addEventListener("click", () => {
    cmModal.classList.remove("is-active")
})
```

## Usage 💡

The link of the webpage is:

## Skill Improved

- Bulma\
- HTML\
- CSS\
- JavaScript\

## Technologies

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Bulma](https://bulma.io/)

## Authors

- **Callan Hunter** - [LinkedIn](https://www.linkedin.com/in/callan-hunter-195816196/)
