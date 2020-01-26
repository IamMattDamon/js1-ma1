// JavaScript for MA1

// Question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
};
cat.complain();

// Question 2
const heading = document.querySelector("h3");

// Question 3
const heading = document.querySelector("h3")
heading.style.fontSize = "2em";

// Question 4
const heading = document.querySelector("h3");
heading.classList.add("subheading");

// Question 5
const paragraph = document.querySelectorAll("p");

// Question 6
const resultsContainer = document.querySelector("div");
resultsContainer.innerHTML = "<p>New paragraph</p>";

// Question 7
function findArray(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

findArray(cats);

// Question 8
function findArray(catArray) {
    let catHTML = "";

    for (let i = 0; i < catArray.length; i++) {
        catHTML += `<h5>${catArray[i].name}</h5>`;
        }

    console.log(catHTML);
    return catHTML;
}

// Question 9
resultsContainer.innerHTML = findArray(cats);

// Question 10
function findArrayDiv(catArray) {
    let newHTML = "",

    for(let i = 0; i < catArray.length; i++) {
        let age = "Age unknown";
        
        if(catArray[i].age) {
            age = catArray[i].age;      
        }

    newHTML +=`<div>
            <h5>${catArray[i].name}</h5>
            <p>${age}</p>
            </div>`;
    }
    
    console.log(newHTML);
    return newHTML;
}

resultsContainer.innerHTML = findArrayDiv(cats);

