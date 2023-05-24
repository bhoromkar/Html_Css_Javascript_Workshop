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
function add() {
  const name =document.querySelector('#name');
  const texterror=document.querySelector('.text-error');
  name.addEventListener('input',function(){
    if(name.value.length==0){
    texterror.textContent="";
    return;
    }
    try{
    (new Contact).name=name.value;
    texterror.textContent="";
    }catch(e){
      texterror.textContent.e;
    }
  })
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
  })
  const phone =document.querySelector('#phonenumber');
  const texterror3=document.querySelector('.text-error3');
  phone.addEventListener('input',function(){
    if(name.value.length==0){
    texterror.textContent="";
    return;
    }
    try{
    (new Contact).phone=phone.value;
    texterror3.textContent="";
    }catch(e){
      texterror3.textContent.e;
    }
  })
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
  })
  const createContact= () => { 
    let Contact= new Contact();
   try{ Contact.name = getInputValueById('#name'); 
  }catch (e) {
    setTextValue('.text-error', e); 
    throw e; 
  } 
  try{ Contact.phone = getInputValueById('#phone'); 
}catch (e) {
  setTextValue('.text-error3', e); 
  throw e; 
} 
try{ Contact.email = getInputValueById('#email'); 
}catch (e) {
  setTextValue('.text-error2', e); 
  throw e; 
} 
try{ Contact.zip = getInputValueById('#zip'); 
}catch (e) {
  setTextValue('.text-error1', e); 
  throw e; 
} 
     Contact.address = getInputElementValue('#adddres');
     Contact.city = getInputElementValue('#city');
     Contact.state = getInputElementValue('#state');
      return Contact; 
  }
  
  const getInputValueById = (id) => { 
    let value = document.querySelector(id).value;
     return value; 
    } 
   const getInputElementValue = (id) => {
     let value = document.getElementById(id).value;
     return value; 
   }
   
   
   const save=() => { try {
    let Contact = createContact(); 
    createAndupdateStorage(Contact); 
  } catch (e){ return; 
  } 
  function createAndupdateStorage(Contact){
    let ContactList = JSON.parse(localStorage.getItem("ContactList")); 
   if(ContactList != undefined)
   { ContactList.push(Contact);
    } else{ContactList = [Contact]
    }
    alert(ContactList.toString()); 
   localStorage.setItem("ContactList", JSON.stringify(ContactList)) 
   }
   
  }
  const resetForm = () => { 
   setValue('#name',''); 
   setValue('#phone',''); 
   setValue('#email',''); 
   setValue('#adresss',''); 
   setValue('#zip',''); 
   setValue('#state',''); 
   setValue('#city',''); 
   
   
  } 
//  const submit = document.querySelector('#submit');
//  submit.addEventListener('click',function(){
//     const form = document.querySelector('#form');
//     const formdata = new FormData(form);





  const setTextValue = (id, value) => 
  { const element = document.querySelector(id);
     element.textContent = value; 
  } 
  const setValue = (id, value) => 
  { const element = document.querySelector(id);
     element.value = value; 
  } 
}
      



