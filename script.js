//CRUD - create read update delete

var div1= document.createElement("div");
div1.setAttribute("class","contain1");

async function getUser(){
const data= await fetch("https://611f266d9771bf001785c74a.mockapi.io/users");
  const users=await data.json();


users.forEach(user=>createUser(user));

}

 function createUser(user){
  var div= document.createElement("div");
  div.setAttribute("class","divi")
    
    var date= new Date(user.createdAt).toDateString();
    div.innerHTML=`
    <img class="imge" src="${user.avatar}"/>
    <div>
    <p class="name">${user.name}</p>

    
    <p>${date}</p>
    <button class="delete" onclick="deleteUser(${user.id})">Delete</button>
    <button class="edit" onclick="editUser(${user.id})">Edit</button>
    
    <p>${user.id}</p>
    </div>`;
 
    div1.append(div);
  
 }
 
 document.body.append(div1);

getUser();



async function addUser(){
  console.log("Adding User...");

  var usname=document.getElementById("uname").value
  var usavatar=document.getElementById("uavatar").value
  console.log(usname,usavatar)

  var add= await fetch("https://611f266d9771bf001785c74a.mockapi.io/users",
  {method:"POST",
  headers:{"content-type":"application/json"},

  body: JSON.stringify({
    name:usname,
    avatar:usavatar,
    createdAt:new Date().toISOString()
  })

})
var add1 =  await add.json();
console.log(add1);
window.location.reload();
}


async function editUser(id){
  
 const edit= await fetch(`
 https://611f266d9771bf001785c74a.mockapi.io/users/${id}`,
 {method:"PUT"});

 var edit1= await edit.json();
 console.log(edit1);
 
  document.getElementById("uname").value=edit1.name;
  document.getElementById("uavatar").value=edit1.avatar;
  document.getElementById("uid").value=edit1.id;

}
  
async function UpdateUser(){
  var usname=document.getElementById("uname").value
  var usavatar=document.getElementById("uavatar").value
  var usid=document.getElementById("uid").value
  const edit= await fetch(`
  https://611f266d9771bf001785c74a.mockapi.io/users/${usid}`,
  {method:"PUT",
  headers:{"content-type":"application/json"},

  body: JSON.stringify({
    name:usname,
    avatar:usavatar,
    createdAt:new Date().toISOString()
  })

})
const edit1=await edit.json();
console.log(edit1);
window.location.reload();
}
async function deleteUser(id){
  console.log(id)
  const data= await fetch(
 `https://611f266d9771bf001785c74a.mockapi.io/users/${id}`,
{method:"DELETE"});
  const user = await data.json();
  console.log(user);
  window.location.reload();
}

