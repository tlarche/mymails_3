
// ==================================================================
// FONCTIONS
// ==================================================================
function nbMessage () {
  return document.getElementsByTagName("p").length - 2;
};

function f_addListenerTrash () {
  // itérer dans les images
  for(var i = 0; i < document.getElementsByClassName("trash").length; i++) {
    document.getElementsByClassName("trash")[i].addEventListener("click",
      function(){
        this.parentNode.remove();
        document.getElementById("count").textContent = nbMessage();
        // **console.log("listener added")
      }
    )
  }
};

// DECLARATIONS
var eltCounterMessage = document.getElementById("count");

// INITIALISATION
f_addListenerTrash();

// compteur INITIALISATION
eltCounterMessage.textContent = nbMessage();

// AJOUTER UN LISTENER SUR LE BOUTON "ADD"
// **console.log("FORM:", document.getElementsByTagName("input"));
var element = document.frm_message.elements["btn_add"];
element.addEventListener("click", function () {

// LIRE LE MESSAGE A AJOUTER
console.log("Listerner ADD added...");

var msg = document.frm_message.elements["txt_message"].value;
// **console.log(msg);

// CREATION DU MESSAGE
var msgHTML = "";
msgHTML += '  <img  class="avatar" src="%IMG">' + '\n'
msgHTML += '  <div>' + '\n'
msgHTML += '    <h6>Thierry L.</h6>' + '\n'
msgHTML += '    <p>%MSG</p>' + '\n'
msgHTML += '  </div>' + '\n'
//msgHTML += '  <img class="trash" src="trash.png">' + '\n'

// AJOUT DU Message
// Génération AVATAR
var num = Math.floor(Math.random() * 5) + 1;
var avatarImg = "avatar-" + num + ".jpg";

// Création DIV_MESSAGE
var div_parent = document.getElementsByClassName("row")[0].parentNode;
var div_last = document.getElementsByClassName("row")[nbMessage()];
div_last.className = "row";

//div_parent.LastChild.class = "row";

var div = document.createElement("div");
div.className = "row last-row";
var div_msg = div_parent.appendChild(div);
var html = msgHTML.replace("%IMG", avatarImg);
html = html.replace("%MSG", msg);
div_msg.innerHTML = html;
//div = div_msg.PreviousSibling.className = "row"
console.log("LAST >>>", div_last);
console.log(div_parent);

// AJOUT DU LISTENER "TRASH"
var trash = document.createElement("img");
trash.className = "trash";
trash.src = "trash.png";
trash.addEventListener("click", function() {
  this.parentNode.remove();
  document.getElementById("count").textContent = nbMessage();
  // **console.log("listener added")
});
div_msg.appendChild(trash);
//console.log(">>>", trash);

// FIN DE TRAITEMENT
document.frm_message.elements["txt_message"].value = "";
eltCounterMessage.textContent = nbMessage();
});
