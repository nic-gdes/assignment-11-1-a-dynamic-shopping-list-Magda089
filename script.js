// 2 Create 3 variables
const shoppingList = document.querySelector('#shoppingList');
const form = document.querySelector('#itemToAdd');
// grabbing form -> input
const input= document.querySelector('input');

// 3. Create a function that will run in response to the button being click
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log("Hey");

    const todoValue = input.value;
    // console.log(todoValue);

    // Create item list 3 elements
    const listItem = document.createElement("li");
    const itemSpan = document.createElement("span");
    itemSpan.textContent = todoValue;
    listItem.appendChild(itemSpan);
      // Create to remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    listItem.appendChild(removeButton);

    itemSpan.textContent = todoValue;
    listItem.appendChild(itemSpan);



    // add button text 
    removeButton.textContent = 'Remove';
    // append
   listItem.appendChild(removeButton);


    // Create the remove button functionallity 
    removeButton.addEventListener('click', function (event) {
        const btn = event.target;
        const parent = btn.parentNode;
        parent.remove();
    })

    // append the button to the new li
    listItem.appendChild(removeButton);

    shoppingList.appendChild(listItem);

    // Clear the input 
    input.value = '';
    input.focus();

});


