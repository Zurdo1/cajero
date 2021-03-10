var user = [
    {
        User: "Andru",
    },
    {
        User: "DanyParc",
    },
    {
        User: "DanyCu",
    },
];

addLi();

function addLi() {
    var contenido;
    for (i = 0; i < user.length; i++) {
      var li = document.createElement("li");
        contenido = user[i].User
      li.appendChild(document.createTextNode(contenido));
      document.querySelector("#user").appendChild(li)
    }
}

