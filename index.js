$(document).ready(function(){
  let name = "user";
  $("#setname").click(()=>{
    $("#yourname").innerHTML(`Your name: ${("#name").val()}`);
  }
});
