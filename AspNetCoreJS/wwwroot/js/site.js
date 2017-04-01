
function callClickEvent() {
    let date = new Date();
    let divOut = $("#output");
    divOut.text(`Welcome to the webinar about Visual Studio 2017 ${date}`);
}


/**
 * This class performs arithmetic operations 
 */
class ArithmeticOperations {
    /** 
     * Operations class constructor
     * @param {string} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Add function
     */
    add() {
        return (this.x + this.y);
    }
}

function showECMA6() {
    let myObj = new ArithmeticOperations(10, 5);
    let dtToday = new Date();
    let divOut = document.querySelector("#output");
    divOut.textContent = "The result is " + myObj.add();
}


