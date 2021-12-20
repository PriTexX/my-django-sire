const form = document.getElementById('search-field')

form.addEventListener('submit', (event) => {
    console.log(event.target)
})

async function itemInfo(itemId){
    const URL = `http://127.0.0.1:8000/shop/getItem?id=${itemId}`;

    const data = await fetch(URL)
    .then((res) => res.json())
    .catch((err) => {throw err});
    return data
}
