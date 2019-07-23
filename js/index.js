const calendar = new Calendar('calendar-wrap')
$(document).ready(function(){
    $("#singleRange").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550
    });
    $("#doubleRange").ionRangeSlider({
        type: "double",
        min: 100,
        max: 1000,
        from: 550
    });
   // Toggle block
    var toggle     =  document.querySelector('.switch input[type="checkbox"]');
    var toggleText =  document.querySelector('.toggle-text .state');

     toggle.addEventListener('click',function() {
        toggleText.textContent =  (this.checked) ? 'ON' : 'OFF';
         
     });
});