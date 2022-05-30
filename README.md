# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![](./video/interactive-video.webm)

### Links

- Live Site URL: [https://interactive-rating-component-main-ap.netlify.app/](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Flexbox
- Sass
- [JavaScript](https://www.javascript.com/)

### What I learned

Event.currentTarget : identifies the current target for the event

```js
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
      selected = e.currentTarget.innerHTML;
    });
```

## Author

- Frontend Mentor - [@alessiopisanoweb](https://www.frontendmentor.io/profile/alessiopisanoweb)
- Twitter - [@ap\_\_dev(https://twitter.com/ap__dev)
