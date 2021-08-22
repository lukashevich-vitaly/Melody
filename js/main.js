'use strict';

$(document).ready(function () {
    
    var currentFloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    const modal = $('.modal');
    const modalCloseButton = $('.modal-close-button');
    const viewFlats = $('.view-flats');
    const flatsPath = $('.modal-image path');
    const flatsLink = $('.flat-link');
   
    floorPath.on("mouseover", function() {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor)
    });
    
    function toggleModal() {
        modal.toggleClass('is-open');
    };
    
    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlats.on('click', toggleModal);
    
    function usCounterFloor(floor) {
        return floor.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
    };
    
    function floorToggle(floor) {
        $('.counter').text(usCounterFloor(floor));
        floorPath.removeClass('current-floor');
        $(`[data-floor="${usCounterFloor(floor)}"]`).toggleClass('current-floor');
    };
    
    counterUp.on('click', function() {
        if (currentFloor < 18) {
          currentFloor++;
          floorToggle(currentFloor);
        }
    });

    counterDown.on('click', function() {
        if (currentFloor > 2) {
          currentFloor--;
          floorToggle(currentFloor);
        }
    });
    
    function deleteClass() {
        flatsPath.removeClass('current-flat');
        flatsLink.removeClass('current-flat');
    };
    
    flatsPath.on('mouseover', function() {
        deleteClass();
        $(`[data-flat-link="${$(this).attr('data-flat')}"]`).toggleClass('current-flat');
    });
    
    flatsLink.on('mouseover', function() {
        deleteClass();
        $(`[data-flat="${$(this).attr('data-flat-link')}"]`).toggleClass('current-flat');
    });
});