function getData(from, to, elementToInsertData) {
    const URL = `http://127.0.0.1:8000/shop/getDataFromDB?from=${from}&to=${to}`;
  
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
          const DOMcontainer = document.createDocumentFragment()
          for (object of data.objects){
              const el = wrapData(object)
              DOMcontainer.appendChild(el)
          }
          elementToInsertData.appendChild(DOMcontainer)
      })
      .catch((err) => {throw err});
  }
  

function wrapData(data, elementToInsertData){
    const html = `
    <div class="card h-100">
        ${data.prev_price ? '<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>': ''}
        <img class="card-img-top" src="${data.image_url}" alt="..." />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">${data.name}</h5>
                ${data.prev_price ? `<span class="text-muted text-decoration-line-through">${data.prev_price}</span>`: ''}
                ${data.price}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="aboutItem/${data.id}">Подробнее</a></div>
        </div>
    </div>
    `
    const element = document.createElement('div');
    element.classList.add('col')
    element.classList.add('mb-5')

    element.style.width = 273
    element.style.height = 345

    element.innerHTML = html
    return element
}







//   function wrapData(data, elementToInsertData){
//       const element = document.createElement('div')
//       element.classList.add('card')
//       element.style = 'width: 18rem'
//       const html = 
//       `
      
//       <a href="aboutItem/${data.id}"><img
//       src="${data.image_url}"
//       class="card-img-top"
//       alt="..."
//       /></a>
//       <div class="card-body">
//           <a href="aboutItem/${data.id}"><span class="my-card-title">${data.name}</span></a>
//           <div class="price">
//             ${isDiscounted(data.prev_price, data.price)}  
//           </div>
//           <div class="card-btn not-added-to-cart btn btn-primary ms-auto">
//               <div class="my-plus"><div class="fa-solid fa-plus"></div></div>
//               <div class="cart-count"><span>1</span> <small>шт.</small></div>
//               <div class="minus"><div class="fa-solid fa-minus"></div></div>
//               <div class="my-2-plus fa-solid fa-plus"></div>
//               </div>
//       </div>
      
//       `
//       element.innerHTML = html
//       initCard(element)
  
//       return element;
//   }
  
// function isDiscounted(prev_price, price){
//     if (prev_price){
//         return `
//         <span class="price__small">${prev_price}</span><span class="price__big">${price}</span>
//         `
//     }
//     else {
//         return `
//         <span class="price__normal">${price}</span>
//         `
//     }
// }

