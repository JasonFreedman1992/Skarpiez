import $ from 'jquery';

export const hideContext = () => {
    $(".react-contextmenu").css('display', 'none');
}

export const unhideContext = () => {
    $(".react-contextmenu").css('display', 'block');
}