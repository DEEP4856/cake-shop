
    // Change navbar background color on scroll
    window.addEventListener('scroll', function () {
        let navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });





    // swiper slider
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true, // Enable looping
        autoplay: {
            delay: 3000, // Automatic slide change every 3 seconds
            disableOnInteraction: false, // Keep autoplay even when interacting
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Make pagination dots clickable
        },
        breakpoints: {
            768: {
                slidesPerView: 2, // Show 2 cards on tablets
            },
            1024: {
                slidesPerView: 3, // Show 3 cards on small desktops
            },
            1200: {
                slidesPerView: 3, // Show 4 cards on larger screens
            },
        },
    });





// Select all menu categories and menu items
// Select all menu categories and menu category lists
const menuCategories = document.querySelectorAll('.menu-category');
const menuCategoryLists = document.querySelectorAll('.menu-category-list');

// Function to filter menu items based on category
function filterMenu(category) {
    menuCategoryLists.forEach(list => {
        if (list.getAttribute('data-category') === category) {
            list.classList.add('active'); // Show matching category list
        } else {
            list.classList.remove('active'); // Hide other lists
        }
    });
}

// Add click event listener to each menu category
menuCategories.forEach(category => {
    category.addEventListener('click', function() {
        // Remove 'active' class from all categories
        menuCategories.forEach(cat => cat.classList.remove('active'));
        
        // Add 'active' class to the clicked category
        this.classList.add('active');

        // Get the category to filter from the clicked element
        const selectedCategory = this.getAttribute('data-category');
        
        // Filter the menu items
        filterMenu(selectedCategory);
    });
});

// Show all items by default
filterMenu("starter"); // Default to showing starters


