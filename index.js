$(document).ready(function(){
  $("#setname").click(()=>{
    let name = $("#name").val();
    $("#yourname").text(`Your name: ${name}`);
  });
});
