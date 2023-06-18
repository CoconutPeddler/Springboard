// // 1. Select the section with an id of container without using querySelector.

document.getElementById('container');

// // 2. Select the section with an id of container using querySelector.

document.querySelector('section');

// // 3. Select all of the list items with a class of “second”.

document.getElementsByClassName('second');

// // 4. Select a list item with a class of third, but only the list item inside of the ol tag.

document.querySelector("ol .third");

// // 5. Give the section with an id of container the text “Hello!”.

const contDiv = document.querySelector('#container');
contDiv.textContent = "Hello!";

// // 6. Add the class main to the div with a class of footer.

const foot = document.querySelector('.footer');
foot.classList.add("main");

// // 7. Remove the class main on the div with a class of footer.
foot.classList.remove("main");

// // 8. Create a new li element.

const newLiElement = document.createElement("li");

// // 9. Give the li the text “four”.

newLiElement.innerText = "four";

// // 10. Append the li to the ul element.

const list = document.querySelector("ul");
list.appendChild(newLiElement);

// // // 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.

let bothLists = document.querySelectorAll("ol li");

for (let i = 0; i < bothLists.length; i++){
    bothLists[i].style.backgroundColor = "green";
}

// 12. Remove the div with a class of footer

const footing = document.querySelector('footer')
footing.remove();