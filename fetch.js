const url = ``;
fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))