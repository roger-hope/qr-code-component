# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![](./screenshot_desktop_img1.png)

### Links

- Solution URL: [https://github.com/roger-hope/qr-code-component](https://github.com/roger-hope/qr-code-component)
- Live Site URL: [https://roger-hope.github.io/qr-code-component/](https://roger-hope.github.io/qr-code-component/)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- Mobile-first workflow
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [SASS](https://sass-lang.com/) - For styles

### What I learned

This project is a good starter for some experimental CSS. In this particular one, I made use of very basic SASS and standard HTML5. This produced the desired result, but there is room to upgrade this component using animation, JavaScript to dynamically generate the QR-code image, and create mixins for the border radius and drop-shadows. The below mixin is a start of the next version of this project.:

#### SASS mixin to define positioning.

```css
@mixin flex($dir: row, $just: space-between, $align: center) {
  display: flex;
  flex-direction: $dir;
  justify-content: $just;
  align-items: $align;
}
```

#### SASS to center a div vertically and horizontally. A common pain, easily solved with Flexbox

```css
body {
  background-color: #d5e1ef;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

### Continued development

Further development of this project, will be the use of more tricky and advanced SASS mixins to make the component more reusable.

### Useful resources

- [SASS documentation](https://sass-lang.com/documentation/) - This is the go-to place for advancing the SASS mixins.
- [Vite - Static deploy](https://vitejs.dev/guide/static-deploy.html) - Deploy a static site by providing the correct Vite configuration and Gitub actions.
- [Vite - SASS boilerplate](https://www.npmjs.com/package/generator-vite-sass-boilerplate?activeTab=readme) - Get up-and-running with a Vite and SASS setup quickly.

## Author

- Website - [Roger](https://rogerhope.de)
- Frontend Mentor - [@roger-hope](https://www.frontendmentor.io/profile/roger-hope)
