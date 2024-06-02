jQuery(document).ready(function(){
    jQuery('.no').on("click", function(){ 
    jQuery('#f1').css('display', 'none');
    jQuery('#f2').css('display', 'flex');  
    });
  
    jQuery('.weno').on("click", function(){ 
    jQuery('#f2').css('display', 'none');
    jQuery('#f1').css('display', 'flex');  
    });
  
    jQuery('.si').on("click", function(){ 
    jQuery('#f1').css('display', 'none');
    jQuery('#f3').css('display', 'flex');  
    });
  
    jQuery('.dale').on("click", function(){ 
    jQuery('#f3').css('display', 'none');
    jQuery('#f4').css('display', 'flex');  
    });
  
    jQuery('.rega').on("click", function(){ 
    jQuery('#f4').css('display', 'none');
    jQuery('#f5').css('display', 'flex');  
    });
  
    jQuery('.ojo').on("click", function(){ 
    jQuery('#f5').css('display', 'none');
    jQuery('#f6').css('display', 'flex');  
    });
  
  jQuery('.ojo').on("click", function(){ 
    jQuery('#f5').css('display', 'none');
    jQuery('#f6').css('display', 'flex');  
    });
  
  jQuery('.afi').on("click", function(){ 
    jQuery('#f6').css('display', 'none');
    jQuery('#f7').css('display', 'flex');
    jQuery('#f8').css('display', 'flex');  
    });
  
  jQuery('.salu').on("click", function(){ 
    jQuery('#f8').css('display', 'none');
    jQuery('#f9').css('display', 'flex');  
    });
  
  jQuery('.copy').on("click", function(){ 
    jQuery('#f9').css('display', 'none');
    jQuery('#f10').css('display', 'flex');          
    jQuery('#f11').css('display', 'flex');
    });
  
  jQuery('span.go').on("click", function(){ 
    jQuery('#f13').css('display', 'none');
    jQuery('#f14').css('display', 'block');   
    });
  
  jQuery('.ca1').on("click", function(){ 
    jQuery('#f12').css('display', 'flex'); 
    jQuery('#f13').css('display', 'block'); 
    });

    const $button = $('.play');
    const $audio = $('#audio')[0]; // jQuery returns an array-like object, we need the first element

    $button.click(function() {
        if ($audio.paused) {
            $audio.play().then(() => {
                $button.text('> Pausar');
            }).catch(error => {
                console.error('Error al intentar reproducir el audio:', error);
            });
        } else {
            $audio.pause();
            $button.text('> Reproducir canción');
        }
    });
  
  jQuery('.ca3').on("click", function(){ 
    jQuery('#f15').css('display', 'block'); 
    jQuery('#f16').css('display', 'flex'); 
    });
  
  jQuery('.ca2').on("click", function(){ 
    jQuery('#f18').css('display', 'block'); 
    jQuery('#f19').css('display', 'flex'); 
    });
  
  jQuery('.carta').on("click", function(){ 
    jQuery('#f12').css('display', 'none'); 
    });
   
  jQuery('.anillo').on("click", function(){ 
    jQuery('#f16').css('display', 'none');
     jQuery('#f17').css('display', 'flex');
    
    });
  
  jQuery('.marry').on("click", function(){ 
    jQuery('#f15').css('display', 'none');
    jQuery('#f17').css('display', 'none');
    });
   
  jQuery('.meme').on("click", function(){ 
    jQuery('#f19').css('display', 'none');
    jQuery('#f20').css('display', 'flex');
    });
  
  jQuery('.meme2').on("click", function(){ 
    jQuery('#f20').css('display', 'none');
    jQuery('#f21').css('display', 'flex');
    });
  
  jQuery('.yes').on("click", function(){ 
    jQuery('#f21').css('display', 'none');
    jQuery('#f22').css('display', 'flex');
    });
});