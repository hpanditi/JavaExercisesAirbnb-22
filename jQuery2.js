// bad
function setSidebar() {
    $('.sidebar').hide();

    // ...

    $('.sidebar').css({
        'background-color': 'pink',
    });
}

// good
function setSidebar() {
    const $sidebar = $('.sidebar');
    $sidebar.hide();

    // ...

    $sidebar.css({
        'background-color': 'pink',
    });
}
