document.getElementById("count").textContent = document.getElementsByTagName("p").length;

for(var i=0; i<document.getElementsByClassName("trash").length; i++){
  document.getElementsByClassName("trash")[i].addEventListener("click",
    function(){
      this.parentNode.remove();
      document.getElementById("count").textContent = document.getElementsByTagName("p").length;
    }
  )
}

// AJOUTER UN LISTENER
console.log("FORM:", document.getElementsByTagName("input"));
var element = document.frm_message.elements["btn_add"];
element.addEventListener("click",
    function () {

    // LIRE LE MESSAGE A AJOUTER
    var msg = document.frm_message.elements["txt_message"].value;
    console.log(msg);

    // CREATION DU MESSAGE
    var monMessageHTML = "";
    monMessageHTML += '  <img  class="avatar" src="avatar-1.jpg">' + '\n'
    monMessageHTML += '  <div>' + '\n'
    monMessageHTML += '    <h6>Thierry L.</h6>' + '\n'
    monMessageHTML += '    <p>__MSG__</p>' + '\n'
    monMessageHTML += '  </div>' + '\n'
    monMessageHTML += '  <img class="trash" src="trash.png">' + '\n'

    // AJOUT DU Message
    // Génération AVATAR
    var num = Math.floor(Math.random() * 5) + 1;
    //console.log(num);
    var avatarImg = "avatar-" + num;
    //console.log("num:" + avatarImg);

    // Création DIV_MESSAGE
    var div_parent = document.getElementsByClassName("row")[0].parentNode;

    var div = document.createElement("div");
    div.className = "row last-row";
    var div_msg = div_parent.appendChild(div);

    //div_last.insertBefore(div, div_last);
    var html = monMessageHTML.replace("avatar-1", avatarImg);
    html = html.replace("__MSG__", msg);
    //console.log(monMessageHTML);
    div_msg.innerHTML = html;
    //div_last.className = "row"

    console.log("Message ajouté !");
});


/*
var inputs = document.getElementsByTagName("input");
for (let index = 0; index < inputs.length; index++) {
  const element = inputs[index];
  //console.log(element.name);
  if (element.name == "t_message") {
    element.addEventListener("click",
      console.log("Listener CLICK ajouté");
        function() {
        console.log("Message ajouté !");
      });
  }
}
*/
