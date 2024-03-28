document.addEventListener('DOMContentLoaded', function () {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function checkPortfolioItems() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            if (isInViewport(item) && !item.classList.contains('active')) {
                item.classList.add('active');
            }
        });
    }

    checkPortfolioItems();

    window.addEventListener('scroll', checkPortfolioItems);
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const offset = 150;
    return (
        rect.top + offset >= 0 &&
        rect.left >= 0 &&
        rect.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
document.addEventListener('DOMContentLoaded', function () {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const offset = 150; 
        return (
            rect.top + offset >= 0 &&
            rect.left >= 0 &&
            rect.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkPortfolioItems() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            if (isInViewport(item) && !item.classList.contains('active')) {
                item.classList.add('active');
            }
        });
    }

   
    checkPortfolioItems();

    window.addEventListener('scroll', checkPortfolioItems);
});
