function filterProducts() {
    var input, filter, items, item, title, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    items = document.querySelectorAll(".item");

    for (i = 0; i < items.length; i++) {
        item = items[i];
        title = item.querySelector(".text-truncate");

        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}

function clearSearch() {
    var input = document.getElementById("searchInput");
    input.value = "";
    filterProducts();
}

function resetSearch() {
    var items = document.querySelectorAll(".item");
    items.forEach(function(item) {
        item.style.display = "";  // Prikazuje sve proizvode
    });
}

document.getElementById("searchInput").addEventListener("input", filterProducts);
document.getElementById("clearSearch").addEventListener("click", clearSearch);
document.getElementById("resetSearch").addEventListener("click", resetSearch);