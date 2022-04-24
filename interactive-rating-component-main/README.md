# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Rating](https://github.com/michealap/interactive-rating/blob/main/interactive-rating-component-main/rating.png?raw=true)
![Thank You](https://github.com/michealap/interactive-rating/blob/main/interactive-rating-component-main/thank-you.png?raw=true)

### Links

- [Solution](https://github.com/michealap/interactive-rating/tree/main/interactive-rating-component-main)
- [Live Site](https://interactive-rating-score.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Using prop deconstruction
```js
function handleRating({ target }) {
  ratingBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  
  target.classList.add('active');
  
  selectedRating = target.textContent;
}
```
instead of
```js
function handleRating(event) {
  ratingBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  
  event.target.classList.add('active');
  
  selectedRating = event.target.textContent;
}
```

### Continued development

- To store rating in a form for future analysis.

### Useful resources

- [Resource 1](https://www.w3schools.com/tags/att_script_defer.asp) - This helped me as an alternative solution to jQuery. For single components, I liked this pattern.
- [Resource 2](https://javascript.info/introduction-browser-events) - This reinforced the concepts of using the basic languages without additional packages.


## Author

- Website - [Micheala](https://www.michealaprowess.com)
- Frontend Mentor - [@michealap](https://www.frontendmentor.io/profile/michealap)