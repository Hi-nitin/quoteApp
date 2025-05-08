const quotes = {
    "science": [
        {
            "quote": "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
            "author": "Albert Einstein"
        },
        {
            "quote": "Science is a way of thinking much more than it is a body of knowledge.",
            "author": "Carl Sagan"
        },
        {
            "quote": "Somewhere, something incredible is waiting to be known.",
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
        },
        {
            "quote": "The Earth has music for those who listen.",
            "author": "William Shakespeare"
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
        },
        {
            "quote": "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
            "author": "Buddha"
        }
    ]
};




var myquote = document.getElementById("thequote");
var author = document.getElementById("quote_author");
var categorychange = document.getElementById("QuoteCategory");
var initial_font_size = 20;

const increaseBtn = document.getElementById("increase_font");
const decreaseBtn = document.getElementById("decrease_font");
const previousButton = document.getElementById("previous_btn");
const nextButton = document.getElementById("next_btn");
const randomButton = document.getElementById("random_btn");
const darkModeButton = document.getElementById('darkmode');
const quoteContainer = document.getElementById('quoteBox');


current_index = 0;
current_category = 'science';


const show_the_quote = (i) => {

    myquote.style.fontSize = `${initial_font_size}px`;
    author.style.fontSize = `${initial_font_size}px`;

    myquote.innerHTML = quotes[current_category][i].quote;
    author.innerHTML = "-" + quotes[current_category][i].author + "-";


}

show_the_quote(current_index);


categorychange.addEventListener('change', () => {
    current_category = categorychange.value;
    show_the_quote(current_index)

})

increaseBtn.addEventListener('click', () => {

    initial_font_size += 1;
    show_the_quote(current_index)


})

decreaseBtn.addEventListener('click', () => {
    initial_font_size -= 1;
    show_the_quote(current_index)

})



previousButton.addEventListener('click', () => {

    //alert(quotes[current_category].length);
    if (current_index < 1) {
        alert('no more quote')
    } else {
        current_index -= 1
        show_the_quote(current_index)
    }



})


nextButton.addEventListener('click', () => {

    if (current_index < quotes[current_category].length - 1) {
        current_index += 1
        show_the_quote(current_index)

    } else {
        alert('nop more quote there')
    }



})


randomButton.addEventListener('click', () => {

    let lengthofcurrentcategory = quotes[current_category].length;
    let randomnumber = Math.floor(Math.random() * lengthofcurrentcategory);

    show_the_quote(randomnumber)

})




if (localStorage.getItem('mode') == 'dark') {
    darkModeButton.textContent = 'light mode';
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = 'white';
    quoteContainer.style.backgroundColor = '#333';
    darkModeButton.style.backgroundColor = 'white';
    darkModeButton.style.color = 'black';

} else {

    darkModeButton.textContent = 'dark mode';
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    quoteContainer.style.backgroundColor = 'white';
    darkModeButton.style.backgroundColor = 'black';
    darkModeButton.style.color = 'white';
}



darkModeButton.addEventListener('click', () => {



    if (localStorage.getItem('mode') === 'dark') {
        darkModeButton.textContent = 'light mode';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        quoteContainer.style.backgroundColor = 'white';
        darkModeButton.style.backgroundColor = 'white';
        darkModeButton.style.color = 'black';

        localStorage.setItem('mode', 'light');
    } else {

        darkModeButton.textContent = 'dark mode';
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = 'white';
        quoteContainer.style.backgroundColor = '#333';
        localStorage.setItem('mode', 'dark');
        darkModeButton.style.backgroundColor = 'black';
        darkModeButton.style.color = 'white';
    }




})