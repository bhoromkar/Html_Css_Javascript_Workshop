
let personlist;

window.addEventListener('DOMContentLoaded',(event)=>{ 
    personlist = getDataFromLocalStorage();
alert("createinnerhtml");
  document.querySelector('.count').textContent = personlist.length;
    createInnerHtml();
    alert("get data from local storage");
    
    
});
getDataFromLocalStorage=()=>{
    return localStorage.getItem('contactList') ?
    JSON.parse(localStorage.getItem('contactList')) : [];
    
    
}


const createInnerHtml = ()=>{
    alert("innerHtmlcalled");
    if (personlist.length === 0 )  return;
    const headerHtml = " <th>name</th> <th>phone</th> <th>email</th> <th>address</th> <th>state</th> <th>city</th> <th>zip</th> <th>Action</th>";
    let innerHtml = `${headerHtml}`;
    for (const person of personlist) {
        alert(person._name)
        console.log(person._name);
        alert("inner html  inside called");
        innerHtml = `${innerHtml}
   <tr> 
      <td>${person._name}</td>
      <td>${person._phone}</td>
      <td>${person._email}</td>
      <td>${person._address}</td>
      <td>${person._city}</td>
      <td>${person._state}</td>
      <td>${person._zip}</td>
    < td>
        <button class="edit-btn" data-id="${person._name}">Edit</button>
        <button class="delete-btn" data-id="${person._name}">Delete</button>
       </td>
    </tr>`;
}
document.querySelector('#tabledisplay3').innerHTML = innerHtml;
alert("query selector called");
}

//document.querySelector('#tabledisplay').innerHTML = innerHtml;
const remove = (node) => {
    alert("remove called");
    console.log(person._name);
	let person = personlist.find(empData => empData.id == node.id);
	if(!person) return;
	const index = personlist
			.map(empData => empData._id)
			.indexOf(person._id);
    console.log("index=",index);
	//personList.splice(index,1);
}