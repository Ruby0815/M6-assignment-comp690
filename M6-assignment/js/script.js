window.addEventListener('load',() => {
  let form = document.getElementById('empForm');
     
     form.addEventListener('submit',(e) =>{
      e.preventDefault();
let id1=document.getElementById('id').value;
let name1=document.getElementById('name').value;
let ext1=document.getElementById('ext').value
let email1=document.getElementById('email').value
let dept1=document.getElementById('department').value
   console.log(`ID: ${id1}`);
   console.log(`Name: ${name1}` );
   console.log(`Extension:${ext1}`);
   console.log(`Email: ${email1}`);
   console.log(`Department: ${dept1}`);
   
  

  })
  
  })
