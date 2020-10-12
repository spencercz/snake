$(document).ready(function(){
  let name = "user";
  $("#setname").click(()=>{
    name = document.getElementById("name").val();
    document.getElementById("yourname").innerText = `<h2>Your name: ${name}</h2>`;
  }
});
