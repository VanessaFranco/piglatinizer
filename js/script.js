$( "document" ).ready(function() {

$(".button").click(function(){
    let input= $(".input").val();
      let spilt_word = input.spilt("");
    let vowels = ["a","e","i","o","u"];
    if (spilt_word[0].includes(vowels) ){

            console.log(input);




}


});
