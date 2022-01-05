
// VARIABLES AND CONSTANTS
// const BASE_URL = 'https://api.poems.one/pod/';

let poemData;


// CACHED ELEMENT REFERENCES

const $date = $('#date');
const $title = $('#title');
const $author = $('#author');
const $poem = $('#poem');
const $copyright = $('#copyright');

// EVENT LISTENERS

// click on 'get poem!'

// FUNCTIONS

// init();

// function init() {
//     getPoemData(); // load poem of the day
// }

function getPoemData() {
    // fetch response
    $.ajax('https://api.poems.one/pod/')
    .then(function(response) {
        // save data locally
        poemData = response;
        // transfer data to DOM
        render();
    }, function(error) {
        console.log(error);
    });
}

getPoemData();


function render() {
    $date.html(poemData.contents.poems[0].date);
    $title.html(poemData.contents.poems[0].poem.title);
    $author.html(poemData.contents.poems[0].poem.author);
    $poem.html(poemData.contents.poems[0].poem.poem); 
    $copyright.html(poemData.copyright);
    // $image.text(poemData.image);
}

function copyright() {
    var x = document.getElementById("copyright");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}