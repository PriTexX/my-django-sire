const form = document.getElementById('search-field')

form.addEventListener('submit', (event) => {
    console.log(event.target)
})

async function itemInfo(itemId){
    const URL = `https://dpo-mysite.herokuapp.com/shop/getItem?id=${itemId}`;

    const data = await fetch(URL)
    .then((res) => res.json())
    .catch((err) => {throw err});
    return data
}
