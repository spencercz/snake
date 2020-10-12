$(document).ready(function(){
  let name = "user";
  $("#setname").click(()=>{
    name = $("#name").val();
    $("#yourname").innerText = `<h2>Your name: ${name}</h2>`;
  });
});
