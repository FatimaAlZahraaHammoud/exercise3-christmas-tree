var x = parseInt(prompt("Enter the height of the christmas tree: "))
if (x > 0){
    createChristmasTree(x);
}

function createChristmasTree(x){
    var stars = "*";
    var line = "|";
    var tree = "";

    tree += " ".repeat(x) + stars + "\n";

    for (var i = 1; i <= x; i++){
        tree += " ".repeat(x - i) + stars + line.repeat(i * 2 - 1) + stars + "\n";
    }

    document.body.innerHTML = "<pre>"+ tree + "</pre>";
}

/* I really tried my best to fix colors, but it did not work.

The code I tried

var x = parseInt(prompt("Enter the height of the christmas tree: "))
if (x > 0){
    createChristmasTree(x);
}

function createChristmasTree(x){
    document.body.innerHTML = "";
    var stars = document.createElement("span");
    stars.classList.add("star")
    stars.textContent = "";
    var line = document.createElement("span");
    line.classList.add("line")
    line.textContent = "|";
    var space = "";


    space += " ".repeat(x);
    document.body.append(space);
    document.body.append(stars);
    document.body.append(document.createElement("br"));

    for (var i = 1; i <= x; i++){
        console.log("hi")
        var stars = document.createElement("span");
        stars.classList.add("star")
        stars.textContent = "";

        var space = "";
        document.body.append(space);
        document.body.append(stars);

        for(var j = 0; j < i; j++){
            var line = document.createElement("span");
            line.classList.add("line")
            line.textContent = "|";
            console.log("hello")
            document.body.append(line);
        }

        document.body.append(stars);
        document.body.append(document.createElement("br"));
        console.log("bi")
    }
}
    

*/