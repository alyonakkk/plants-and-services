$(document).ready(function(){
    // burger
    $('.main-screen__menu-icon').on('click', function(){
        $('.main-screen__menu-icon').addClass('js-menu-icon');
        $('.main-screen__close-icon').addClass('js-close-icon');
        $('.main-screen__list').addClass('js-list');
        $('.main-screen__text').addClass('js-text');
    });
    
    $('.main-screen__close-icon').on('click', function(){
        $('.main-screen__close-icon').removeClass('js-close-icon');
        $('.main-screen__menu-icon').removeClass('js-menu-icon');
        $('.main-screen__list').removeClass('js-list');
        $('.main-screen__text').removeClass('js-text');
    });


    // form
    $('.submit').on('click', function(){
        let k = 0;
        $('.js-input').each(function(){
            if (($(this).val()).length == 0){
                $(this).css('border', '2px solid red');
                k++;
            }
            else{
                $(this).css('border', 'none');
            }
        });
        if (k == 0){
            $('.js-label').css('display', 'block');
            $('.js-label').css('background-color', '#0ac70a');
            $('.js-label').text('Форма успешно отправлена! С Вами скоро свяжутся!');
        } else{
            $('.js-label').css('display', 'block');
            $('.js-label').css('background-color', 'red');
            $('.js-label').text('Заполните все необходимые поля!');
        }
    });


    // filter
    let filter = $('[data-filter]');
    filter.on('click', function(event){
        event.preventDefault();

        let cat = $(this).data('filter');
        if (cat == 'all'){
            $('[data-cat').removeClass('js-hide');
        } else{
            $('[data-cat]').each(function(){
                let workCat = $(this).data('cat');
    
                if (workCat != cat){
                    $(this).addClass('js-hide');
                } else{
                    $(this).removeClass('js-hide');
                }
            });
        }
    });
});