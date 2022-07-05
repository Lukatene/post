
let addButton = document.getElementById('add');
let postOverlay = document.getElementById('postOverlay');
let form = document.getElementById('form');



form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = {
        title: event.target[0].value,
        description: event.target[1].value
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
            postOverlay.classList.remove('activeOverlay');
            console.log(json);
        });
});

addButton.addEventListener('click', function() {
    postOverlay.classList.add('activeOverlay');
})
