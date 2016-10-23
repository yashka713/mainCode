/**
 * Created by Ярик on 04.10.2016.
 */
$(document).ready(function () {
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
            $paragraph = $('<div class="paragraph">' + '</div>');
            $('.modal-window').append($paragraph);
        }

        $spanClose = $('<span class="paragraph-close">X</span>');
        $title = $('<p class="paragraph-title">' + objModal.title + '</p>');
        $inputName = $('<input type="text" class="input-modal" placeholder="Ваше имя:">');
        $inputPhone = $('<input type="text" class="input-modal" placeholder="Ваш телефон:">');
        $btnModal = $('<button class="btn-custom btn-appointment">' + objModal.btn + '</button>');
        $paragraph
            .append($spanClose)
            .append($title)
            .append($inputName)
            .append($inputPhone)
            .append($btnModal);

        $spanClose.on('click', function(e){
            console.log('fcvfev');
            $appendModal.hide();
            $title.remove();
            $inputName.remove();
            $inputPhone.remove();
            $btnModal.remove();
        });

    }

    $(".btn-appointment").on('click', function (e) {
        onClickConsult(objModalForm.appointments);
    });

    $(".btn-askDoctor").on('click', function (e) {
        onClickConsult(objModalForm.consultation);
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