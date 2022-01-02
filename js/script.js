let poemData;

const $date = $('#date');
const $title = $('#title');
const $author = $('#author');
const $copyright = $('#copyright');


// function handleGetData(event) {
//     event.preventDefault();

    $.ajax({
        url:'https://api.poems.one/pod'
    }).then(
        (data) => {
            console.log(data);
        },
        (error) => {
            console.log('bad request', error);
        }
    );



//         (poem) => {
//         poemData = poem;
//         render();
//         },
//         (error) => {
//         console.log('bad request', error);
//         }
//     );

//     function render() {
//         $date.text(poem.Date);
//         $title.text(poem.Title);
//         $author.text(poem.Author);
//         }
// }