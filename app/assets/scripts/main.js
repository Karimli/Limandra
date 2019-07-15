$(document).ready(function(){
    // Email.send({
    //     SecureToken : "acc02480-2c43-45f7-8ac0-31aa3368a9d3",
    //     To : 'talehkarim@gmail.com',
    //     From : "limandrasmtp@gmail.com",
    //     Subject : "This is the subject",
    //     Body : "Salam qaqa necesen?"
    // }).then(
    //   message => alert(message)
    // );
        //toggle menu responsive mode
        $('.menu-toggle').click(function () {
            $(this).toggleClass('is-active');
            $('.header-holder-navigation').slideToggle(300);
          });
})
