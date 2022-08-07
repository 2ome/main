// Class Define
var i = 0;

// new Item by User
document.getElementById("addList").addEventListener("click", function () {
    var text = document.getElementById("userList").value;
    if (text.length > 0) {
        var li = "<li class= items id=item" + i + ">" + text + "</li>";
        document.getElementById("myList").innerHTML += li;
        document.getElementById("userList").value = "";
        i++;
        itemCompleted();
    } else {
        alert("Please enter item for the list")
    }
});

document.addEventListener("keypress", function (event) {
    var text = document.getElementById("userList").value;
    if (event.key === "Enter") {
        if (text.length > 0) {
            var li = "<li class= items id=item" + i + ">" + text + "</li>";
            document.getElementById("myList").innerHTML += li;
            document.getElementById("userList").value = "";
            i++;
            itemCompleted();
        }
        else {
            alert("Please enter item for the list")
        }
    } 
});

// Empty List
document.getElementById("emptyList").onclick = function () {
    document.getElementById("myList").innerHTML = "";
    document.getElementById("completedList").innerHTML = "";
    i = 0;
}

// Item Completed
function itemCompleted() {
    var listItems = document.getElementsByClassName("items");
    var timesClick = 0;
    var userList = document.getElementById("myList");
    var completedList = document.getElementById("completedList");

    for (var n = 0; n < listItems.length; n++)
        listItems[n].addEventListener("click", function () {
            timesClick++;
            var whichItem = document.getElementById(this.id);
            if (timesClick === 2) {
                whichItem.classList.toggle("active");
                timesClick = 0;
                if (whichItem.classList.contains("active") === true){
                    userList.removeChild(whichItem);
                    completedList.appendChild(whichItem);
                } else {
                    userList.appendChild(whichItem);
                    completedList.removeChild(whichItem);
                }
                    

            }
        });


}

// Clear Completed
document.getElementById("clearCompleted").onclick = function () {
    var allList = document.getElementById("completedList");
    var completedItems = document.querySelectorAll("#completedList li");
    for (var b = 0; b < completedItems.length; b++) {
        var checkItem = document.getElementById(completedItems[b].id);
        if (checkItem.classList.contains("active") === true) {
            allList.removeChild(checkItem);
        }
    }
}