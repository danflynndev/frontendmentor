# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam).

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Project Goals

I took on this project in order to practice constructing a page from provided materials. My goal was to replicate the supplied graphic image using HTML & CSS as faithfully as possible while implementing the specified functionality and active element states. 

This project included a bonus challenge of implementing the accordion funcitonality without using JavaScript, which I have attempted here and expand on below. 

### Screenshots

![](./screenshot.jpg)

The design files supplied by FrontendMentor are on the left while screenshots of my completed work are on the right:

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS Pseudo selectors
- Mobile-first workflow

### Reflections

Self-imposed constraints can be a tool for stimulating creativity and discovering novel solutions to problems. I decided to forego the use of JS in this project and instead complete the page using only HTML and CSS. Additionally, I endeavored to use only the minimum HTML tags necessary to structure the content. In the end I ended up with only one non-semantic `<div>` tag used to structure the desktop view. 

To create the accordion effect without JS, I use `input:checked` in conjunciton with the sibling selector (`+`). By specifying the `for` attribute on `label` elements, the user can click anywhere on the text to activate the toggle.

Although working with artificial constraints is a worthwhile exercise, it is best to use an apropriate tool for the task. A CSS-only implementation here created some side-effects I could not discover how to erase. For example, I use `:focus-within` to toggle the `font-weight` property on `label` elements; as such, only one label can be bold at a time even though multiple sections can remain open. In the future, I would rely on JS to provide interactivity as well as to bypass the difficulty of shoehorning CSS into that role. 

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- LinkedIn - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

