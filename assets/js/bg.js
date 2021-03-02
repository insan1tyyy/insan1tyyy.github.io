$(document).ready(function(){
    var classCycle=['imageCycle1','imageCycle2'];
    var dd = 1
    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];

    $('.hero').addClass(classToAdd);

});
