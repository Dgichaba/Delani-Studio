$(document).ready(function(){
  $("#des_image").click(function(){
    $("#des_image").slideDown('1000').hide('1000');
    $("#design").show('1000');
  });
  $("#design").click(function(){
    $("#design").slideUp('1000');
    $("#des_image").slideDown('1000');
  });
});
$(document).ready(function(){
  $("#dev_image").click(function(){
    $("#dev_image").slideDown('1000').hide('1000');
    $("#development").show('1000');
  });
  $("#development").click(function(){
    $("#development").slideUp('1000');
    $("#dev_image").slideDown('1000');
  });
});
$(document).ready(function(){
  $("#pm_image").click(function(){
    $("#pm_image").slideDown('1000').hide('1000');
    $("#product-management").show('1000');
  });
  $("#product-management").click(function(){
    $("#product-management").slideUp('1000');
    $("#pm_image").slideDown('1000');
  });
});

$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#text1").show();
  }).mouseout(function(){
    $("#text1").hide();
  });
});
$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#text2").show();
  }).mouseout(function(){
    $("#text2").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#text3").show();
  }).mouseout(function(){
    $("#text3").hide();
  });
});
$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#text4").show();
  }).mouseout(function(){
    $("#text4").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#text5").show();
  }).mouseout(function(){
    $("#text5").hide();
  });
  $("#work6").mouseover(function(){
    $("#text6").show();
  }).mouseout(function(){
    $("#text6").hide();
  });
  $("#work7").mouseover(function(){
    $("#text7").show();
  }).mouseout(function(){
    $("#text7").hide();
  });
  $("#work8").mouseover(function(){
    $("#text8").show();
  }).mouseout(function(){
    $("#text8").hide();
  });
});

function sendMessage(){
  var name =$("#name").val();
  var email=$("#email").val();
  var message=$("#message").val();
  if (name === "" || email==="" || message===""){
    $("#error").html("Please fill in all fields!");
 }else{
  alert("Thank you " + name + "! Your message has been received. We shall get back to you shortly."); 
  //document.getElementById(form1)          
};
}
