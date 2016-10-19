/**
 * Created by Ярик on 04.10.2016.
 */
$(document).ready(function () {
    //$('.header-contact-allNumber').find('label:after').css({'backgroundPosition': '-3px 11px', 'backgroundColor':'aqua'});
    var $appendModal = $('<div class="modal-window">');
    $('.chkBx').on('click', function (e) {

        if ($('#chkBx-allNumber').prop("checked") == true) {

            $('.header-contact-allNumber')
                .find('.chkBx-showPhone')
                .removeClass('hide-phone')
                .addClass('show-phone');
        } else {
            $('.header-contact-allNumber')
                .find('.chkBx-showPhone')
                .removeClass('show-phone')
                .addClass('hide-phone');
        }

    });

    function onClickConsult(){
        if($('body').find('div').hasClass('modal-window')){
            $appendModal.show();
        }else{
            $('body').append($appendModal);
            $('.modal-window').append('<p class="paragraph">' + '</p>');
        }
    }

    $(".btn-appointment").on('click', onClickConsult);
    $appendModal.on('click', function(){
        $appendModal.hide();
    });

});