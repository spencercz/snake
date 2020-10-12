$(document).ready(function(){
  let name = "user";
  $("#setname").click(()=>{
    name = document.getElementById("name").value;
    document.getElementById("yourname").innerText = `<h2>Your name: ${name}</h2>`;
  });
});
