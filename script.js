export { createCCMenu, getCCImgObj };

/**
 * @author Hanaa Barakat &lt;https://github.com/hbar1st&gt;
 * @param {*} docObj - the document object is required
 * @param {*} menuItemsArray - optional: an array of all the li elements of type Element that need to be included in the menu
 * @param {*} menuItemsStr - optional: a string containing the html fragment of the li elements to be added to the menu
 * @param {*} parentSelector - the parent selector is needed if it is not the body element
 * @param {*} customImg - an object containing the path to a custom image if needed (required keys: src, alt) (optional keys: id, classList)
 * @returns the div element that was created for the menu.
 */
function createCCMenu(
  docObj,
  menuItemsArray,
  menuItemsStr,
  parentSelector = "body",
  customImg = getCCImgObj()
) {
  //start of create menu img element
  const menuImg = docObj.createElement("img");
  menuImg.setAttribute("src", customImg.src);
  menuImg.setAttribute("alt", customImg.alt);
  menuImg.classList.add("coptic-menu-icon");
  if (customImg?.id) {
    menuImg.setAttribute("id", customImg.id);
  }
  if (customImg?.classList) {
    Object.values(customImg.classList).forEach((classV) => {
      return menuImg.classList.add(classV);
    });
  }
  menuImg.addEventListener("click", () => {
    const menuEl = docObj.querySelector(".coptic-menu");
    if (menuEl.style.display === "none") {
      menuEl.style.display = "block";
    } else {
      menuEl.style.display = "none";
    }
  });
  //end of create menu img element

  //start of create menu element and its li children
  const menuEl = docObj.createElement("menu");
  menuEl.classList.add("coptic-menu");
  menuEl.style.display = "none";

  if (menuItemsArray) {
    for (let i = 0; i < menuItemsArray.length; i++) {
      menuEl.appendChild(menuItemsArray[i]);
    }
  }
  if (menuItemsStr) {
    menuEl.innerHTML = menuItemsStr;
  }
  //end of create menu element and its li children

  const divEl = docObj.createElement("div");
  divEl.classList.add("coptic-menu-comp");
  divEl.appendChild(menuImg);
  divEl.appendChild(menuEl);

  const bodyEl = docObj.querySelector(parentSelector);
  bodyEl.appendChild(divEl);
  return divEl;
}

function getCCImgObj() {
  return { src: "./coptic-menu-icon.svg", alt: "drop down menu icon" };
}
