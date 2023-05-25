class Contact{
get id(){
    return this._id;
}
set id(id){
    this._id=id
}
get name(){
return this._name;
}
set name(name) {
  let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  if (nameRegex.test(name)) {
    this._name = name;
  } else {
    throw new Error('Invalid name format. Name must start with a capital letter and have a minimum of 3 characters.');
  }
}
get email(){
    return this._email;
}
    set email(email) {
        let emailRegex = RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');
        if (emailRegex.test(email)) {
            this._email=email;
        } else {
                throw new Error('Invalid email format. Email must be in the format tzirw@example.com');
            }
}
            
get phone(){ 
    return this._phone;
}
set phone(phone){
    let phoneRegex = RegExp('^[0-9]{10}$');
    if(phoneRegex.test(phone)){
        this._phone=phone;
        }else{
            throw new Error('Invalid phone nuber format. Phone Number Must be in the 10 digit ')
    }
}
get address(){
    return this._address;
}
set address(address){
      this._address=address;
    }
 get city(){
        return this._city;
}
set city(city){
          this._city=city;
}
get state(){
            return this._state;
}
set state(state){
              this._state=state;
}
get zip(){
    return this._zip;
}
set zip(zip){
    let zipRegex = RegExp('^[0-9]{6}$');
    if(zipRegex.test(zip)){
        this._zip=zip
    }else{
        throw new Error('Invalid Zip Address . Zip Address must be of 6 digit')
    }
}

}

window.addEventListener('DOMContentLoaded',add);
function add(){
  const email =document.querySelector('#email');
  const texterror2=document.querySelector('.text-error2');
  email.addEventListener('input',function(){
     if(email.value.length==0){
    texterror2.textContent="";
    return;
    }
    try{
    (new Contact).email=email.value;
    texterror2.textContent="";
    }catch(e){
      texterror2.textContent.e;
    }
  });
  const phone =document.querySelector('#phoneNumber');
  const texterror3=document.querySelector('.text-error3');
  phone.addEventListener('input',function(){
    if(phone.value.length==0){
    texterror3.textContent="";
    return;
    }
    try{
    (new Contact).phone=phone.value;
    texterror3.textContent="";
    }catch(e){
      texterror3.textContent.e;
    }
  });
  const zip =document.querySelector('#zip');
  const texterror1=document.querySelector('.text-error1');
  zip.addEventListener('input',function(){
    if(zip.value.length==0){
    texterror1.textContent="";
    return;
    }
    try{
    (new Contact).zip=zip.value;
    texterror1.textContent="";
    }catch(e){
      texterror1.textContent.e;
    }
  });
}

const save= () => { 
  alert("save called");
 let person = createContact();
 alert(person._name);
console.log(person._name);
 createAndupdateStorage(person);
 alert("storage updated");
 resetForm(person);
 alert("form reset");


};
  const createContact= () => { 
    let person= new Contact();
   try{ person._name = getInputValueById('#name'); 
  }catch (e) {
    setTextValue('.text-error', e); 
    throw e; 
  } 
  try{ person._phone = getInputValueById('#phoneNumber'); 
}catch (e) {
  setTextValue('.text-error3', e); 
  throw e; 
} 
try{ person._email = getInputValueById('#email'); 
}catch (e) {
  setTextValue('.text-error2', e); 
  throw e; 
} 
try{ person._zip = getInputValueById('#zip'); 
}catch (e) {
  setTextValue('.text-error1', e); 
  throw e; 
} 
person._address = getInputValueById('#address');
person._city = getInputValueById('#city');
person._state = getInputValueById('#state');
alert("contact created")
      return person; 
}
 

  const getInputValueById = (id) => { 
    let value = document.querySelector(id).value;
     return value; 
}

const getInputElementValue = (id) => {
     let value = document.getElementById(id).value;
     return value; 
}
   
   
   
    
  const createAndupdateStorage=(person)=>{
    alert("insert contact local storage method");
    alert(person._name);
    let contactList = JSON.parse(localStorage.getItem('contactList')); 
   if(contactList != undefined)
   { 
    contactList.push(person);
    } else{
        contactList = [person]
    }
     alert(contactList.toString()); 
   localStorage.setItem("contactList", JSON.stringify(contactList)) 
   }
   
   const resetForm = () => { 
   setValue('#name',''); 
   setValue('#phonenumber',''); 
   setValue('#email',''); 
   setValue('#adresss',''); 
   setValue('#zip',''); 
   setValue('#state',''); 
   setValue('#city',''); 
   
  } 
  const setTextValue = (id, value) => 
{ const element = document.querySelector(id);
   element.textContent = value; 
} 

  const setValue = (id, value) => 
  { const element = document.querySelector(id);
     element.value = value; 
  } 
  function cancelForm() {
    document.getElementById("employeeForm").reset();
  }
  



