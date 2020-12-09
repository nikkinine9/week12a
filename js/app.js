class KanyaWestTweet {
    firstName = '';
    lastName = '';
    content = '';

    constructor(firstName, lastName, content) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.content = content;
        this.getNewTweet();
    }
    getNewTweet() {
        let button = document.querySelector(".get-quote");
        button.addEventListener("click", function() {
            let ajax = new XMLHttpRequest();
            let self = this;
            ajax.onreadystatechange = function() {
                if (this.readyState == 1) {
                    target.innerHTML = "Loading...";
                } else if (this.readyState == 4 && this.status == 200) {
                    let text = JSON.parse(this.responseText);

                    target.innerHTML = text.quote;
                }
            };

            ajax.open("GET", "https://cors-anywhere.herokuapp.com/https://api.kanye.rest", true);
            ajax.send();
        });

        button.click();
    }
}
let target = document.querySelector(".quote");
let quote = new KanyaWestTweet(
    "Kanye",
    "West",
    ""
);
console.log(quote);