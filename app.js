//document.getElementById('test').style.display='none'
//same styel like jquery

//$('#test').hide()


/*$(document).ready(function () {
    alert();
}

)*/
/*
$(function (){
    $('#test').hide()
})*/

$(function(){
  $('#hide8tn').on('click', function(){
      $('#test').hide(2000, function() {
         // alert('HIDE')
      });
  })

})

    $('#showBtn').on('click', function(){
        $('#test').show();
    })
 /*
    $('#toggleBtn').on('dblclick', function(){
        $('#test').toggle();
    })*/
      $('#toggleBtn').on('mouseleave', function(){
        $('#test').toggle();
    })
    /*$('#toggleBtn').on('mouseenter', function(){
        $('#test').toggle();
    })*/
    /*
    $('#showBtn').on('mouseleave', function(){
        $('#test').hide();
    })
    $('#showBtn').on('mouseenter', function(){
        $('#test').show();
    })*/

    
    
    

    //FadeButton
    $('#fadeIn').on('click', function(){
        $('.fadeElement').fadeIn()
    })
    $('#fadeOut').on('click', function(){
        $('.fadeElement').fadeOut(1000)
    })
    $('#fadeToggle').on('click', function(){
        $('.fadeElement').fadeToggle(1000)
    })
    $('#fadeTo').on('click', function(){
        $('.fadeElement').fadeTo(500,0.5).slideUp(3000).show(5000)
    })

    $('#animate').on('click', function() {
        $('.animateElement').animate({
            width:'500px',
            height: '500px',
            fontSize: '50px',
           
        },2000)
    })
    $('#stop').on('click', function() {
        $('.animateElement').stop();
    })












    $(function(){
        $('#HIDEBtn').on('click', function(){
            $('#GD').hide(2000, function() {
               //alert('HIDE')
            });
        })
      })
      
          $('#SHOWBtn').on('click', function(){
              $('#GD').show();
          })
