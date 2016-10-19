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

    function onClickConsult(objModal){
        if($('body').find('div').hasClass('modal-window')){
            $appendModal.show();
        }else{
            $('body').append($appendModal);
            $('.modal-window').append('<div class="paragraph">' + '</div>');
        }
        $title = $('<p class="paragraph-title">' + objModal.title + '</p>');
        $inputName = $('<input type="text" class="paragraph-name" placeholder="Ваше имя:">');
        $inputPhone = $('<input type="text" class="paragraph-phone" placeholder="Ваш телефон:">');
        $btnModal = $('<button class="btn-custom btn-appointment">' + objModal.btn + '</button>');
        $('.modal-window').find('div.paragraph').append($title).append($inputName).append($inputPhone).append($btnModal);
    }

    $(".btn-appointment").on('click', onClickConsult, objModalForm.appointments);
    $appendModal.on('click', function(){
        $appendModal.hide();
    });

});

var objModalForm = {
    appointments:{
        title:'Записаться на прием',
        btn:'Подтвердить запись'
    },
    consultation:{
        title:'Задать вопрос врачу',
        btn:'Задать вопрос'
    }
};