function decreaseQuantity() {
  const quantityInput = document.getElementById('quantityInput');
  let currentValue = parseInt(quantityInput.value, 10);
  if (!isNaN(currentValue) && currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

function increaseQuantity() {
  const quantityInput = document.getElementById('quantityInput');
  let currentValue = parseInt(quantityInput.value, 10);
  if (!isNaN(currentValue)) {
    quantityInput.value = currentValue + 1;
  }
}

function validateQuantity() {
  const quantityInput = document.getElementById('quantityInput');
  let currentValue = parseInt(quantityInput.value, 10);
  if (isNaN(currentValue) || currentValue < 1) {
    quantityInput.value = 1;
  }
}

// Initialize tooltips
// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })

// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = document.getElementsByClassName("dropdown-container");
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }


// show zoom image in chi tiết sản phẩm page
function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}


document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.side-filter .nav-link').forEach(function(element){
    
    element.addEventListener('click', function (e) {

      let nextEl = element.nextElementSibling;
      let parentEl  = element.parentElement;	

        if(nextEl) {
            e.preventDefault();	
            let mycollapse = new bootstrap.Collapse(nextEl);
            
            if(nextEl.classList.contains('show')){
              mycollapse.hide();
            } else {
                mycollapse.show();
                // find other submenus with class=show
                var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                // if it exists, then close all of them
                if(opened_submenu){
                  new bootstrap.Collapse(opened_submenu);
                }
            }
        }
    }); // addEventListener
  }) // forEach
}); 

function openProductList(){
  window.open('danh-muc-san-pham.html', '_blank');
}


//Admin page - index.html
const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click",() => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass(){
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme',inverted);
}

function toggleLocalStorage(){
    if(isLight()){
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set");
    }
}

function isLight(){
    return localStorage.getItem("light");
}

if(isLight()){
    toggleRootClass();
}

// show side sub menu in all page

function showSubcategories(item) {
  // Hide all subcategory menus
  $('.menu-item').hide();

  // Show the selected subcategory menu
  $('#subcategories' + item).show();
}

function showMainMenu() {
  // Hide all subcategory menus
  $('.subcategory-list').hide();
  $('.menu-item').show();
}






