/**
 * Created by ghost9087 on 15. 4. 26..
 */

var indicator;
var isShowing;

init();

function init(){
    indicator = $('.top_indicater');
    indicator.hide();
    isShowing = false;
    setBehavior();
}
function setOnScroll() {
    $(window).on('scroll', function (ev) {
        if (!isShowing) {
            console.log(ev);
            indicator
                .fadeIn('500')
                .delay(1000)
                .fadeOut('500', function () {
                    isShowing = false;
                });
            isShowing = true;
        }

    });
}
function setOnClick() {
    indicator.on('click', function(){
        window.scrollBy(0, -window.scrollY);
    })
}
function setBehavior() {
    setOnScroll();
    setOnClick();
}