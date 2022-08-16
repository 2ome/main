var allNumbers = document.querySelectorAll(".text");
var userChoice = document.getElementById("userInput");
var cleanOption = document.getElementById("clean");
var sumNum = 0; //sumNum is to sum the numbers
var sumUp = 0; //sumUp is the final sum
var newNum = 0; //newNum is to make the abillity for the user to choose multi numbers
var afterSum = 0; //afterSum is to make sure the sumNum wont be doubled after sumup
var hasNum = 0; //hasNum is to make sure the function will work only if there is number
var whichChoice = 0; //whichChoice is to verify what function is required, 1 > -, 2 > X, 3 > /



for (var i = 0; i < allNumbers.length; i++) {
    allNumbers[i].addEventListener("click", function () {
        var userClick = this.textContent;

        // user Clicks 
        if (userClick === "1" || userClick === "2" || userClick === "3" || userClick === "4" || userClick === "5" || userClick === "6" || userClick === "7" || userClick === "8" || userClick === "9" || userClick === "0" || userClick === ".") {


            // user first click
            if (userChoice.innerHTML === "0") {
                userChoice.innerHTML = userClick;
                hasNum = 1;
                cleanOption.innerHTML = "<br>C";

                // user first click after function
            } else if (newNum === 1) {
                userChoice.innerHTML = userClick;
                newNum = 0;
                hasNum = 1;
            }

            // multi numbers for the user
            else {
                console.log(userClick);
                userChoice.innerHTML = userChoice.innerHTML + userClick;
                hasNum = 1;
            }
        }

        // to start function
        else if (userClick === "=" || userClick === "+" || userClick === "-" || userClick === "÷" || userClick === "X" || userClick === "C" || userClick === "AC") {
            switch (userClick) {

                case "AC":
                    userChoice.innerHTML = "0";
                    newNum = 0;
                    sumNum = 0;
                    hasNum = 0;
                    afterSum = 0;
                    whichChoice = 0;
                    break;

                case "C":
                    userChoice.innerHTML = "0";
                    cleanOption.innerHTML = "<br>AC";
                    hasNum = 0;
                    afterSum = 0;
                    whichChoice = 0;
                    break;

                case "+":

                    if (hasNum === 1) {

                        // when user click "+" after "="
                        if (afterSum === 1) {
                            sumNum = parseFloat(userChoice.innerHTML);
                            newNum = 1;
                            afterSum = 0;
                            hasNum = 0;

                            // when user click "+"
                        } else {
                            sumNum = sumNum + parseFloat(userChoice.innerHTML);
                            console.log(sumNum);
                            newNum = 1;
                            hasNum = 0;
                        }
                    }
                    break;

                case "-":

                    if (hasNum === 1) {

                        // when user click "-" on the first number
                        if (sumNum === 0) {
                            sumNum = parseFloat(userChoice.innerHTML);
                            newNum = 1;
                            hasNum = 0;
                            whichChoice = 1;
                        }

                        // when user click "-" after "="
                        else if (afterSum === 1) {
                            sumNum = parseFloat(userChoice.innerHTML);
                            newNum = 1;
                            afterSum = 0;
                            hasNum = 0;
                            whichChoice = 1;

                            // when user click "-"
                        } else {
                            sumNum = sumNum - parseFloat(userChoice.innerHTML);
                            console.log(sumNum);
                            newNum = 1;
                            hasNum = 0;
                            whichChoice = 1;
                        }
                    }

                    break;
                case "X":

                    if (hasNum === 1) {

                        // when user click "X" on the first number
                        if (sumNum === 0) {
                            sumNum = parseFloat(userChoice.innerHTML);
                            newNum = 1;
                            hasNum = 0;
                            whichChoice = 2;
                        }

                        // when user click "X" after "="
                        else if (afterSum === 1) {
                            sumNum = parseFloat(userChoice.innerHTML);
                            newNum = 1;
                            afterSum = 0;
                            hasNum = 0;
                            whichChoice = 2;

                            // when user click "X"
                        } else {
                            sumNum = sumNum * parseFloat(userChoice.innerHTML);
                            console.log(sumNum);
                            newNum = 1;
                            hasNum = 0;
                            whichChoice = 2;
                        }
                    }

                    break;
                case "÷":

                    if (hasNum === 1) {

                        // when user click "÷" on the first number
                        if (sumNum === 0) {
                            sumNum = parseFloat(userChoice.innerHTML);
                            newNum = 1;
                            hasNum = 0;
                            whichChoice = 3;
                        }

                        // when user click "÷" after "="
                        else if (afterSum === 1) {
                            sumNum = parseFloat(userChoice.innerHTML);
                            newNum = 1;
                            afterSum = 0;
                            hasNum = 0;
                            whichChoice = 3;

                            // when user click "÷"
                        } else {
                            sumNum = sumNum / parseFloat(userChoice.innerHTML);
                            console.log(sumNum);
                            newNum = 1;
                            hasNum = 0;
                            whichChoice = 3;
                        }
                    }

                    break;
                case "=":
                    if (whichChoice === 1) { //is - option
                        sumUp = sumNum - parseFloat(userChoice.innerHTML);
                        userChoice.innerHTML = sumUp;
                        afterSum = 1;
                        hasNum = 1;
                        whichChoice = 0;
                    } else if (whichChoice === 2) { //is X option
                        sumUp = sumNum * parseFloat(userChoice.innerHTML);
                        userChoice.innerHTML = sumUp;
                        afterSum = 1;
                        hasNum = 1;
                        whichChoice = 0;
                    } else if (whichChoice === 3) { //is ÷ option
                        sumUp = sumNum / parseFloat(userChoice.innerHTML);
                        userChoice.innerHTML = sumUp;
                        afterSum = 1;
                        hasNum = 1;
                        whichChoice = 0;
                    } else {
                        sumUp = sumNum + parseFloat(userChoice.innerHTML);
                        userChoice.innerHTML = sumUp;
                        afterSum = 1;
                        hasNum = 1;
                    }
                    break;


                default:
            }
        }

    });
}


document.addEventListener("keydown", function (event) {
    var userClick = event.key;
    // user Clicks 
    if (userClick === "1" || userClick === "2" || userClick === "3" || userClick === "4" || userClick === "5" || userClick === "6" || userClick === "7" || userClick === "8" || userClick === "9" || userClick === "0" || userClick === ".") {

        // user first click
        if (userChoice.innerHTML === "0") {
            userChoice.innerHTML = userClick;
            hasNum = 1;
            cleanOption.innerHTML = "<br>C";
            animationButton(userClick);

            // user first click after function
        } else if (newNum === 1) {
            userChoice.innerHTML = userClick;
            newNum = 0;
            hasNum = 1;
            animationButton(userClick);

        }

        // multi numbers for the user
        else {
            console.log(userClick);
            userChoice.innerHTML = userChoice.innerHTML + userClick;
            hasNum = 1;
            animationButton(userClick);


        }
    }

    // to start function
    else if ((userClick === "=") || (userClick === "+") || (userClick === "-") || (userClick === "÷") || (userClick === "/") || (userClick === "X") || (userClick === "*") || (userClick === "C") || (userClick === "AC") || (userClick === "Enter") || (userClick === "Escape") || (userClick === "Backspace")) {
        switch (userClick) {

            case "AC":
                userChoice.innerHTML = "0";
                newNum = 0;
                sumNum = 0;
                hasNum = 0;
                afterSum = 0;
                whichChoice = 0;
                break;

            case "C":
                userChoice.innerHTML = "0";
                cleanOption.innerHTML = "<br>AC";
                hasNum = 0;
                afterSum = 0;
                whichChoice = 0;
                break;

            case "Backspace":
                userChoice.innerHTML = userChoice.innerHTML.slice(0, -1);
                if (userChoice.innerHTML.length === 0) {
                    userChoice.innerHTML = "0";
                    cleanOption.innerHTML = "<br>AC";
                }
                animationButton(userClick);

                break;

            case "Escape":
                userChoice.innerHTML = "0";
                cleanOption.innerHTML = "<br>AC";
                newNum = 0;
                sumNum = 0;
                hasNum = 0;
                afterSum = 0;
                whichChoice = 0;
                animationButton(userClick);

                break;

            case "+":

                if (hasNum === 1) {

                    // when user click "+" after "="
                    if (afterSum === 1) {
                        sumNum = parseFloat(userChoice.innerHTML);
                        newNum = 1;
                        afterSum = 0;
                        hasNum = 0;

                        // when user click "+"
                    } else {
                        sumNum = sumNum + parseFloat(userChoice.innerHTML);
                        console.log(sumNum);
                        newNum = 1;
                        hasNum = 0;
                    }
                }
                animationButton(userClick);

                break;

            case "-":

                if (hasNum === 1) {

                    // when user click "-" on the first number
                    if (sumNum === 0) {
                        sumNum = parseFloat(userChoice.innerHTML);
                        newNum = 1;
                        hasNum = 0;
                        whichChoice = 1;
                    }

                    // when user click "-" after "="
                    else if (afterSum === 1) {
                        sumNum = parseFloat(userChoice.innerHTML);
                        newNum = 1;
                        afterSum = 0;
                        hasNum = 0;
                        whichChoice = 1;

                        // when user click "-"
                    } else {
                        sumNum = sumNum - parseFloat(userChoice.innerHTML);
                        console.log(sumNum);
                        newNum = 1;
                        hasNum = 0;
                        whichChoice = 1;
                    }
                }
                animationButton(userClick);

                break;
            case "X":

                if (hasNum === 1) {

                    // when user click "X" on the first number
                    if (sumNum === 0) {
                        sumNum = parseFloat(userChoice.innerHTML);
                        newNum = 1;
                        hasNum = 0;
                        whichChoice = 2;
                    }

                    // when user click "X" after "="
                    else if (afterSum === 1) {
                        sumNum = parseFloat(userChoice.innerHTML);
                        newNum = 1;
                        afterSum = 0;
                        hasNum = 0;
                        whichChoice = 2;

                        // when user click "X"
                    } else {
                        sumNum = sumNum * parseFloat(userChoice.innerHTML);
                        console.log(sumNum);
                        newNum = 1;
                        hasNum = 0;
                        whichChoice = 2;
                    }
                }
                animationButton(userClick);

                break;

            case "*":

                if (hasNum === 1) {

                    // when user click "X" on the first number
                    if (sumNum === 0) {
                        sumNum = parseFloat(userChoice.innerHTML);
                        newNum = 1;
                        hasNum = 0;
                        whichChoice = 2;
                    }

                    // when user click "X" after "="
                    else if (afterSum === 1) {
                        sumNum = parseFloat(userChoice.innerHTML);
                        newNum = 1;
                        afterSum = 0;
                        hasNum = 0;
                        whichChoice = 2;

                        // when user click "X"
                    } else {
                        sumNum = sumNum * parseFloat(userChoice.innerHTML);
                        console.log(sumNum);
                        newNum = 1;
                        hasNum = 0;
                        whichChoice = 2;
                    }
                }
                animationButton(userClick);

                break;

            case "÷":

                if (hasNum === 1) {

                    // when user click "÷" on the first number
                    if (sumNum === 0) {
                        sumNum = parseFloat(userChoice.innerHTML);
                        newNum = 1;
                        hasNum = 0;
                        whichChoice = 3;
                    }

                    // when user click "÷" after "="
                    else if (afterSum === 1) {
                        sumNum = parseFloat(userChoice.innerHTML);
                        newNum = 1;
                        afterSum = 0;
                        hasNum = 0;
                        whichChoice = 3;

                        // when user click "÷"
                    } else {
                        sumNum = sumNum / parseFloat(userChoice.innerHTML);
                        console.log(sumNum);
                        newNum = 1;
                        hasNum = 0;
                        whichChoice = 3;
                    }
                }
                animationButton(userClick);

                break;
            case "/":

                if (hasNum === 1) {

                    // when user click "÷" on the first number
                    if (sumNum === 0) {
                        sumNum = parseFloat(userChoice.innerHTML);
                        newNum = 1;
                        hasNum = 0;
                        whichChoice = 3;
                    }

                    // when user click "÷" after "="
                    else if (afterSum === 1) {
                        sumNum = parseFloat(userChoice.innerHTML);
                        newNum = 1;
                        afterSum = 0;
                        hasNum = 0;
                        whichChoice = 3;

                        // when user click "÷"
                    } else {
                        sumNum = sumNum / parseFloat(userChoice.innerHTML);
                        console.log(sumNum);
                        newNum = 1;
                        hasNum = 0;
                        whichChoice = 3;
                    }
                }
                animationButton(userClick);

                break;
            case "=":
                if (whichChoice === 1) { //is - option
                    sumUp = sumNum - parseFloat(userChoice.innerHTML);
                    userChoice.innerHTML = sumUp;
                    afterSum = 1;
                    hasNum = 1;
                    whichChoice = 0;
                } else if (whichChoice === 2) { //is X option
                    sumUp = sumNum * parseFloat(userChoice.innerHTML);
                    userChoice.innerHTML = sumUp;
                    afterSum = 1;
                    hasNum = 1;
                    whichChoice = 0;
                } else if (whichChoice === 3) { //is ÷ option
                    sumUp = sumNum / parseFloat(userChoice.innerHTML);
                    userChoice.innerHTML = sumUp;
                    afterSum = 1;
                    hasNum = 1;
                    whichChoice = 0;
                } else {
                    sumUp = sumNum + parseFloat(userChoice.innerHTML);
                    userChoice.innerHTML = sumUp;
                    afterSum = 1;
                    hasNum = 1;
                }
                animationButton(userClick);

                break;

            case "Enter":
                if (whichChoice === 1) { //is - option
                    sumUp = sumNum - parseFloat(userChoice.innerHTML);
                    userChoice.innerHTML = sumUp;
                    afterSum = 1;
                    hasNum = 1;
                    whichChoice = 0;
                } else if (whichChoice === 2) { //is X option
                    sumUp = sumNum * parseFloat(userChoice.innerHTML);
                    userChoice.innerHTML = sumUp;
                    afterSum = 1;
                    hasNum = 1;
                    whichChoice = 0;
                } else if (whichChoice === 3) { //is ÷ option
                    sumUp = sumNum / parseFloat(userChoice.innerHTML);
                    userChoice.innerHTML = sumUp;
                    afterSum = 1;
                    hasNum = 1;
                    whichChoice = 0;
                } else {
                    sumUp = sumNum + parseFloat(userChoice.innerHTML);
                    userChoice.innerHTML = sumUp;
                    afterSum = 1;
                    hasNum = 1;
                }
                animationButton(userClick);

                break;

            default:
        }
    }

});



function animationButton(currentKey) {

    var activeButton = document.getElementsByClassName(currentKey)[0];
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}