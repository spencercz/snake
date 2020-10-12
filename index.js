$(document).ready(function(){
  let name = "user";
  $("#setname").click(()=>{
    document.getElementById("yourname").innerText = `<h2>Your name: ${name}</h2>`;
  }
});
