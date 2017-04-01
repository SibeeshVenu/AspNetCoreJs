class MyClass {
    constructor(dtToday) {
        this.dtToday = dtToday;
    };

    callClickEvent() {
        let divOut = $("#output");
        divOut.text(`Welcome to the webinar about Visual Studio 2017 ${this.dtToday}`);
    };
}
$(function () {
    var myCls = new MyClass(new Date().toDateString());
    myCls.callClickEvent();
});


