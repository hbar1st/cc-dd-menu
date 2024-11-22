# Coptic cross drop down menu component

## Description

Create a drop-down menu for your church with this package.
The package includes a few coptic-themed menu icons that can be used. The coptic cross icons that are used in this component are all 24px x 24px svg images.
A different image can be supplied. And if needed, the image can be made larger by modifying the custom css property --icon-width;

### Included Icons

![alt text](church-menu.svg)
![alt text](coptic-menu-icon.svg)
![alt text](egypt-copt-menu.svg)
![alt text](oriental-cross-menu.svg)

### Included Stylesheet

[styles.css](styles.css)

> [!NOTE]
> Make a local copy of the icon image and stylesheet and include them in the root path of your project. This will allow you to either import them or link to them as needed.

You can make customizations by defining any of the following custom properties:

```
  --menu-background-color: rgb(150, 18, 18);
  --menu-font-color: white;
  --border-color: rgb(199, 181, 181);
  --icon-width: 30px;
  --aspect-ratio: 1;
  --img-left-indent: 3px;
  --img-left-padding: 2px;
  --img-left-margin: var(--img-left-padding);
  --icon-hover-border-style: dotted;
  --list-hover-border-style: dashed;
  --menu-font-size: 1rem;
  --menu-font-family: cursive;
  --menu-font-weight: 600;
```

## Usage

Link the styles.css:

`   <link rel="stylesheet" href="./styles.css" />`

If you're using a local copy of the script.js file, you can add it to your html file like below (it should be above other script files that import from it):

`    <script type="module" src="script.js"></script>`

alternatively, use a static import in your script file

`import { createCCMenu } from "./script.js";`

Then create an object with the following key-value pairs.

```
const customImgObj = {
    src: <required local img-path or img-url>
    alt: <required-alt-message-string>
    id: <optional-id-string>,
    classList: <optional-classes-array--of-string>
}
```

See the code snippets below to learn how to use the module.

```
/**
 * The createCCMenu module expects the following arguments.
 * @param {*} docObj - the document object is required
 * @param {*} menuItemsArray - optional: an array of all the li elements of type Element that need to be included in the menu
 * @param {*} menuItemsStr - optional: a string containing the html fragment of the li elements to be added to the menu
 * @param {*} parentSelector - the parent selector of the menu is needed if it is not the default body element
 * @param {*} customImg - an object containing the path to a custom image if needed (required keys: src, alt) (optional keys: id, classList)
 * @returns the div element that was created for the menu.
 */
```

examples of calling this with default parameters and a string of li elements:

```
import { createCCMenu } from "./script.js"; //if you copied the script locally. Or use reference to the package "coptic-cross-drop-down-menu" instead.

function getListStr() {
  return `<li>first menu item</li>
        <li>second menu item</li>
        <li>third menu item</li>
        <li>fourth menu item</li>
        <li>fifth menu item</li>
        <li>sixth menu item</li>
        <li>seventh menu item</li>`;
}

function getImgObj() {
  return { src: "./church-menu.svg", alt:"church menu icon" };
}
createCCMenu(document, undefined, getListStr(), undefined, getImgObj());

```

another example:

```
function getListArray() {
  const arr = [];

  for (let i = 0; i < 7; i++) {
    const liEl = document.createElement("li");
    liEl.innerText = "menu item";

    arr.push(liEl);
  }
  return arr;
}

function getImgObj() {
  return { src: "./church-menu.svg", alt:"church menu icon" };
}
createCCMenu(document, getListArray(), undefined, "#my-parent-element", getImgObj());
```
