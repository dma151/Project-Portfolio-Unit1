$('.hamburger').on('click', function (event) {
    event.preventDefault();
    $('.navbar ul').toggleClass('hidden')
})
$('.aboutContainer').on('click', function(event) {
    $('.aboutContainer p').toggleClass('hidden');
})
