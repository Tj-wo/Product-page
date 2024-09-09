// cart
let cart = document.querySelector("header .cart");
let cartIcon = document.querySelector("header .cart-click");
let cartContent = document.querySelector("header .cart .content");

cartIcon.onclick = () => {
  cart.classList.toggle("active");
};

function emptyCart() {
  cart.classList.remove("filled");
  cartContent.innerHTML = "";
  cartContent.insertAdjacentHTML(
    "afterbegin",
    `<p class="empty">Your cart is empty</p>`
  );
}

function fillCart(iCount) {
  cartContent.innerHTML = "";
  cart.classList.add("filled");
  cartIcon.setAttribute("data-count", iCount);
  cartContent.insertAdjacentHTML(
    "afterbegin",
    `<div class="item">
          <img src="images/image-product-1-thumbnail.jpg" alt="">
          <div class="info">
            <p>Fall Limited Edition Sneakers</p>
            <div class="price">
              <span>$125.00 x <span class="count">${iCount}</span></span>
              <span class="full-price">$${iCount * 125}.00</span>
            </div>
          </div>
          <img src="images/icon-delete.svg" alt="" class="del-cart">
        </div>
        <div class="checkout">
          Checkout
        </div>
      </div>`
  );
}

function incCart(num) {
  let oldnum = document.querySelector(".cart .item .count").innerHTML;
  fillCart(+oldnum + +num);
}

cart.addEventListener("click", (e) => {
  if (e.target.classList.contains("del-cart")) {
    emptyCart();
  }
});

// Nav menu

let menu = document.querySelector("header ul");
let hamburger = document.querySelector(".hamburger");
let closeMenu = document.querySelector("header ul .close");

hamburger.onclick = () => {
  menu.classList.remove("hide-mobile");
  document.body.classList.add("overlay");
};

closeMenu.onclick = () => {
  menu.classList.add("hide-mobile");
  document.body.classList.remove("overlay");
};

// add to cart

let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let count = document.querySelector("form .count");
let add = document.querySelector("form p");

increment.onclick = () => {
  count.innerHTML = +count.innerHTML + 1;
};

decrement.onclick = () => {
  count.innerHTML -= 1;
  if (count.innerHTML < 0) count.innerHTML = +count.innerHTML + 1;
};

add.onclick = () => {
  if (count.innerHTML != 0) {
    if (cart.classList.contains("filled")) {
      incCart(count.innerHTML);
    } else {
      fillCart(count.innerHTML);
    }
  }
};

// img slider

let slider = document.querySelector("main .img-slider");
let sliderImgs = document.querySelectorAll("main .img-slider > img");
let navImgs = [...document.querySelectorAll("main .navImg img")];
let nextbtn = document.querySelector(".next.arrow");
let prevbtn = document.querySelector(".arrow.prev");
let imgIndex = 0;

nextbtn.onclick = next;

prevbtn.onclick = prev;

navImgs.forEach((navimg, i) => {
  navimg.onclick = () => {
    navImgs.forEach((e) => e.classList.remove("active"));
    navimg.classList.add("active");
    imgIndex = i;
    UpdateImg();
  };
});

function UpdateImg() {
  sliderImgs.forEach((i) => i.classList.remove("active"));
  sliderImgs[imgIndex].classList.add("active");
}

function next() {
  ++imgIndex;
  checker();
  UpdateImg();
}

function prev() {
  --imgIndex;
  checker();
  UpdateImg();
}

function checker() {
  if (imgIndex > sliderImgs.length - 1) imgIndex = 0;
  if (imgIndex < 0) imgIndex = sliderImgs.length - 1;
  navImgs.forEach((e) => e.classList.remove("active"));
  navImgs[imgIndex].classList.add("active");
}


//lightBox

let lighBox = document.querySelector(".images.lightbox")
let closebtn = document.querySelector(".lightbox .closebtn")
let sliderImgsBox = document.querySelectorAll(".images.lightbox .img-slider > img");
let navImgsBox = [...document.querySelectorAll(".images.lightbox .navImg img")];
let nextbtnBox = document.querySelector(".images.lightbox .next.arrow");
let prevbtnBox = document.querySelector(".images.lightbox .arrow.prev");
let imgIndexBox = 0;

slider.onclick = () => {
  function myFunction(x) {
    if (x.matches == false) {
      imgIndexBox = imgIndex;
      UpdateImgBox();
      checkerBox();
      window.scrollTo(0, 0);
      document.body.classList.add("overlay");
      lighBox.style.display = "block";
    }
  }
  let x = window.matchMedia("(max-width: 567px)");
  myFunction(x);
  x.addEventListener("change", myFunction);
};

closebtn.onclick = ()=>{
  document.body.classList.remove("overlay");
  lighBox.style.display = "none";
}

nextbtnBox.onclick = nextBox;

prevbtnBox.onclick = prevBox;

navImgsBox.forEach((navimg, i) => {
  navimg.onclick = () => {
    navImgsBox.forEach((e) => e.classList.remove("active"));
    navimg.classList.add("active");
    imgIndexBox = i;
    UpdateImgBox();
  };
});

function UpdateImgBox() {
  sliderImgsBox.forEach((i) => i.classList.remove("active"));
  sliderImgsBox[imgIndexBox].classList.add("active");
}

function nextBox() {
  ++imgIndexBox;
  checkerBox();
  UpdateImgBox();
}

function prevBox() {
  --imgIndexBox;
  checkerBox();
  UpdateImgBox();
}

function checkerBox() {
  if (imgIndexBox > sliderImgsBox.length - 1) imgIndexBox = 0;
  if (imgIndexBox < 0) imgIndexBox = sliderImgsBox.length - 1;
  navImgsBox.forEach((e) => e.classList.remove("active"));
  navImgsBox[imgIndexBox].classList.add("active");
}
