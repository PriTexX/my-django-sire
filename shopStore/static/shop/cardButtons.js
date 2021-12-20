function initCard(card){
  initCardBtn(card)
  // initCardTitle(card)
}

function initCardBtn(card){
  const minusBtn = card.querySelector(".minus");
  const plusBtn = card.querySelector(".my-plus");
  const counter = card.querySelector(".cart-count span");
  const mySecondPlus = card.querySelector(".my-2-plus")

  minusBtn.addEventListener("click", (event) => {
    if (counter.innerHTML == 1) {
      event.target.parentNode.parentNode.classList.toggle("my-btn-transition");
      setTimeout(() => {
        event.target.parentNode.parentNode.classList.toggle(
          "not-added-to-cart"
        );
        event.target.parentNode.parentNode.classList.toggle(
          "my-btn-transition"
        );
        event.target.parentNode.parentNode.classList.toggle("added-to-cart");
      }, 350);
    } else {
      counter.innerHTML -= 1;
    }
  });

  plusBtn.addEventListener("click", (event) => {
    counter.innerHTML = Number(counter.innerHTML) + 1;
  });

  mySecondPlus.addEventListener("click", (event) => {
    event.stopPropagation();

    event.target.parentNode.classList.toggle("not-added-to-cart");
    event.target.parentNode.classList.toggle("added-to-cart");
  });
}

function initCardTitle(card){
  const title = card.querySelector(".my-card-title")
  const text = card.querySelector(".my-card-text")
  const img = card.querySelector(".card-img-top")

  
  title.addEventListener("click", (event) => {
    itemInfo(event.target.id)
    .then(data => {
      const modal = document.getElementById('myModal')
      const modalTitle = modal.querySelector(".modal-title")
      const modalText = modal.querySelector(".modal-body")
      const modalImg = modal.querySelector(".modal-body img")
      const modalPrice = modal.querySelector(".price-container")

      modalTitle.textContent = data.name
      modalImg.src = data.image_url
      modalPrice.textContent = data.price+'$'

      const myModal = bootstrap.Modal.getOrCreateInstance(modal)
      myModal.show()
    })
    .catch(error => {throw error})
  })
}
