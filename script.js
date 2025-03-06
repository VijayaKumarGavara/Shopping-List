document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById("form-item");
    const addButton = document.getElementById("add");
    const searchInput = document.getElementById("search");
    const itemList = document.getElementById("item-list");
    const clearButton = document.getElementById("clear");

    // Function to create a new item
    function createItem(name) {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        const itemName = document.createElement("div");
        itemName.classList.add("item-name");
        itemName.textContent = name;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "x";

        // Delete event listener
        deleteBtn.addEventListener("click", () => {
            itemDiv.remove();
            checkListEmpty();
        });

        // Append elements
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(deleteBtn);
        itemList.appendChild(itemDiv);

        checkListEmpty();
    }

    // Add Item
    addButton.addEventListener("click", () => {
        const itemText = itemInput.value.trim();
        if (itemText === "") {
            alert("Please enter an item!");
            return;
        }
        createItem(itemText);
        itemInput.value = "";
    });

    // Filter Items
    searchInput.addEventListener("input", () => {
        const filterText = searchInput.value.toLowerCase();
        const items = document.querySelectorAll(".item");

        items.forEach(item => {
            const itemName = item.querySelector(".item-name").textContent.toLowerCase();
            item.style.display = itemName.includes(filterText) ? "flex" : "none";
        });
    });

    // Clear All Items
    clearButton.addEventListener("click", () => {
        itemList.innerHTML = "";
        checkListEmpty();
    });

    //Function to check if the list is empty and hide clear button
    function checkListEmpty() {
        if (itemList.children.length === 0) {
            clearButton.style.display = "none";
            searchInput.style.display = "none";
        } else {
            clearButton.style.display = "block";
            searchInput.style.display = "block";
        }
    }

    // Initially hide clear button
    checkListEmpty();
});
