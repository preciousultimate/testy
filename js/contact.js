class Contact{
constructor(){
    this.form  = document.querySelector("#form");
    this.resetBtn  = document.querySelector("#resetbtn");
    this.subject  = document.querySelector("#subject");
    this.name = document.querySelector("#name");
    this.email = document.querySelector("#email");
    this.phone = document.querySelector("#phone");
    this.message = document.querySelector("#message");
    this.errors = document.querySelectorAll(".errors");
    this.loading = document.querySelector(".hero__h2");
    this.init()
}
init(){
this.validateForm()
this.resetForm()
}
validateForm(){
    const validEmail =(email)=>{
        const emailvalid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailvalid.test(String(email).toLowerCase());
        }

        this.form.addEventListener("submit", (eve)=>{
            // eve.target;
        
        
        if (this.name.value.trim() === '') {
            eve.preventDefault();
            this.errors[0].textContent='This field is required';
        } 
        else if( this.name.value.trim().length <= 2){
           eve.preventDefault();
           this.errors[0].textContent='It should more than 2 characters';
        }
         else{
           
           this.errors[0].textContent='';
           
        }if (this.phone.value.trim() === '') {
            this.errors[2].textContent='This field is required';
        }
        else if (this.phone.value.trim().length <=10){
            eve.preventDefault();
            this.errors[2].textContent='Phone number is not correct';
        }
        else if (this.phone.value.trim().length >11){
            eve.preventDefault();
            this.errors[2].textContent='Phone number is not correct';
        }
        else{
            this.errors[2].textContent='';
        }if (this.email.value.trim() === '') {
            eve.preventDefault();
            this.errors[1].textContent='This field is required';
        }else if(!validEmail(this.email.value.trim())){
            eve.preventDefault();
            this.errors[1].textContent='Looks like this is not an email';
        }else{
            this.errors[1].textContent='';
        }if (this.message.value === '') {
            this.errors[3].textContent='This field is required';
            eve.preventDefault(); 
        }else if (this.message.value.length < 500) {
            const numCha = 500 - this.message.value.length;
            document.querySelector(".limit").textContent=`${numCha} characters remaining / 500 characters`;
            this.errors[3].textContent='';
        }else if (this.message.value.length >= 500) {
            eve.preventDefault();       
            const value = this.message.value.slice(0,500)
           this.message.value = `${value}`
            document.querySelector(".limit").textContent=`Your characters exceeds 500 characters`;
            this.errors[3].textContent='';

            
           
        }
        if (this.name.value.trim().length > 2 && this.phone.value.trim().length ===11 && validEmail(this.email.value.trim()) && this.message.value.length > 0)  {

            // && this.message.value.length > 0 
            
            this.loading.textContent='Loading...';
            
            this.loading.classList.add('loading')
            

            
        }else{
            this.loading.textContent='I want to here!';
            this.loading.classList.remove('.loading')
            this.loading.classList.add('.hero__h2')

            
            
        }
        
        console.log(this.subject.value = `New email from ${this.name.value} UCee's Collections`);
        })  
        
}
resetForm(){
 this.resetBtn.addEventListener('click', (eve)=>{
    this.loading.classList.remove('loading')
 })       
}
}

// this.form.addEventListener("submit", (eve)=>{
//     this.resetBtn.addEventListener("click", (eve)=>{ 
//     })  

const contact = new Contact()
// console.log(contact)
