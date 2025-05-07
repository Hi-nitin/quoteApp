const quotes = {
    "science": [
        {
            "quote": "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
            "author": "Albert Einstein"
        },
        {
            "quote": "Science is a way of thinking much more than it is a body of knowledge.",
            "author": "Carl Sagan"
        }
    ],
    "nature": [
        {
            "quote": "Look deep into nature, and then you will understand everything better.",
            "author": "Albert Einstein"
        },
        {
            "quote": "In every walk with nature one receives far more than he seeks.",
            "author": "John Muir"
        }
    ],
    "health": [
        {
            "quote": "It is health that is real wealth and not pieces of gold and silver.",
            "author": "Mahatma Gandhi"
        },
        {
            "quote": "To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear.",
            "author": "Buddha"
        }
    ]
}




var myquote = document.getElementById("thequote");
var author = document.getElementById("quote_author");
var categorychange = document.getElementById("QuoteCategory");
var initial_font_size = 20;
const increaseBtn = document.getElementById("increase_font");
const decreaseBtn = document.getElementById("decrease_font");

initial_category = 'science';


const show_the_quote = () => {

    myquote.style.fontSize = `${initial_font_size}px`;
    author.style.fontSize = `${initial_font_size}px`;

    myquote.innerHTML = quotes[initial_category][0].quote;
    author.innerHTML = "-" + quotes[initial_category][0].author + "-";


}

show_the_quote();


categorychange.addEventListener('change', () => {
    initial_category = categorychange.value;
    show_the_quote()

})

increaseBtn.addEventListener('click', () => {

    initial_font_size += 1;
    show_the_quote()


})

decreaseBtn.addEventListener('click', () => {
    initial_font_size -= 1;
    show_the_quote()

})


