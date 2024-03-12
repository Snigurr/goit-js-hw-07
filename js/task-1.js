var section = document.getElementById('categories');
var numberCat = section.children.length;

console.log("Number of categories: " + numberCat);

const links = document.querySelectorAll("h2");


links.forEach(link => {

    console.log("Category:" + link.textContent);
    
    var parentItem = link.closest('li.item');

    if (parentItem) {

        var elements = parentItem.querySelectorAll('li');
        console.log("Elements:" + elements.length);
    }
});


