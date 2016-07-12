$(document).ready(function() {
    //1. zakłożenie eventów na buttony w headerze
    //przypisuje buttony (strzałki) do zmiennych
    var prevBtn = $('.arrowBtn:first-child');
    var nextBtn = $('.arrowBtn:last-child');
    var sliderImg = $('.slider').find('img');
    var currentIndex = 0;

    prevBtn.on('click', function() {
        if (currentIndex >= 0) {
            sliderImg.eq(currentIndex).fadeOut(750);
            sliderImg.eq(currentIndex - 1).delay(1000).fadeIn(1000);
            currentIndex--;
            if (currentIndex < 0) {
                // sliderImg.eq(currentIndex).hide();
                currentIndex = sliderImg.length - 1;
            }
        }
    });
    nextBtn.on('click', function() {
        if (currentIndex < sliderImg.length - 1) {
            sliderImg.eq(currentIndex).fadeOut(750);
            sliderImg.eq(currentIndex + 1).delay(1000).fadeIn(1000);
            currentIndex++;
            if (currentIndex == sliderImg.length - 1) {
                // sliderImg.eq(currentIndex).hide();
                currentIndex = -1;
            }
        }
    });

    //2. sekcja pierwsza chair Clair chair Margarita

    var chairClairePic = $('#chairClaire').find('img');
    var chairMargaritaPic = $('#chairMargarita').find('img');
    var textBox = $('#section1Text');
    var newTextBox = $('<div>').addClass('inlineBlockSec1');
    var newParagraph = $('<p>').html('Chair Claire<br><br>"This hearty pumpkin cupcake with a cinnamon-cream cheese frosting is good in the fall or any other time of the year."')
    newParagraph.appendTo(newTextBox);
    //maybe have to use DISPLAY NONE?????????
    //krzesło 1; eventy na elementach sekcji 1
    chairClairePic.on('mouseover', function() {
        chairClairePic.next('div.chair_img').hide();
    });
    chairClairePic.on('mouseout', function() {
        chairClairePic.next('div.chair_img').show();
    });

    // chairClairePic.on('click', function() {
    //     newTextBox.insertAfter(chairClairePic);
        // if (newTextBox.is(':visible')){
        // newTextBox.hide();
        // } else {
        //     newTextBox.show();
        // }   
    // });
    //krzesło 2
    chairMargaritaPic.on('mouseover', function() {
        chairMargaritaPic.next('div.chair_img').hide();
    });
    chairMargaritaPic.on('mouseout', function() {
        chairMargaritaPic.next('div.chair_img').show();
    });

});