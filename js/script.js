
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
    // fetch data
    $.ajax('https://api.poems.one/pod/')
    .then(function(data) {
        // save data locally
        poemData = data;
        // transfer data to DOM
        render();
    }, function(error) {
        console.log(error);
    });
}

function render() {
    $date.text(poemData.contents.poems.date);
    // $title.text(poemData.contents.poems.poem.title);
    // $author.text(poemData.contents.poems.poem.author);
    // $poem.text(poemData.contents.poems.poem); 
    // $copyright.text(poemData.copyright);
    // $image.text(poemData.image);
}