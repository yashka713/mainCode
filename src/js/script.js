/**
 * Created by Ярик on 04.10.2016.
 */
$(document).ready(function () {
    var $modalWindow = $('.modal-window');
    var objClientData

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

    /* Show modal window */
    $("body").click(function (e) {
        $('.modal-window').removeClass('show').addClass('hide');
    });

    $(".paragraph").click(function (e) {
        e.stopImmediatePropagation();
    });

    $('.btn-appointment').on('click', function (e) {
        modalWindowConsultation(e, objModalForm.appointments);
    });

    $('.btn-askDoctor').on('click', function (e) {
        modalWindowConsultation(e, objModalForm.consultation);
    });

    $('.paragraph-close').on('click', function (e) {
        $('.modal-window').removeClass('show').addClass('hide');
    });

    function modalWindowConsultation (e, obj){
        $title = $('<p class="paragraph-title">' + obj.title + '</p>');
        $modalWindow.removeClass('hide').addClass('show');
        $button = $('<button class="btn-custom">' + obj.title + '</button>');
        $modalWindow.find('.paragraph').find('.btn-custom').remove();
        $modalWindow.find('.paragraph').find('.paragraph-title').remove();
        $modalWindow.find('.paragraph').prepend($title);
        $modalWindow.find('.paragraph').append($button);
        $button.on('click', function () {

        });
        e.stopPropagation();
    };

});

var objModalForm = {
    appointments: {
        title: 'Записаться на прием',
        btn: 'Подтвердить запись'
    },
    consultation: {
        title: 'Задать вопрос врачу',
        btn: 'Задать вопрос'
    }
};