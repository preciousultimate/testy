

let section = 0
let previousBtn = document.querySelector('#previous');
let nextBtn = document.querySelector('#next')
const change = document.querySelector('#change');
let sections = [
    
    document.querySelector('#section1'),
    document.querySelector('#section2'),
    document.querySelector('#section4'),
    document.querySelector('#section5'),
    document.querySelector('#section6'),
    document.querySelector('#section7'),
    // document.querySelector('#section8'),
    // document.querySelector('#section9'),
    // document.querySelector('#section10'),
    // document.querySelector('#section11'),
    // document.querySelector('#section12'),
    
]
function displaySection (){
    // change.id =sections[section];
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
        
    }
    sections[section].style.display = 'block';

}
nextBtn.addEventListener("click", (eve)=>{
    eve.target;
    
            section++;
if (section >= sections.length) {
    section = 0
}
            displaySection()
    
});

previousBtn.addEventListener("click", (eve)=>{
    eve.target;
    section--;
    if (section < 0) {
        section = sections.length -1
    }
            displaySection()
});
displaySection()
function shopTime() {
    

let hours= document.querySelector('.hero__h2');
const getDate = new Date();    
const getHours = getDate.getHours();         
if (getHours === 0 || getHours === 1 || getHours === 2 || getHours === 3 || getHours === 4 || getHours === 5) {
  hours.textContent='Shop is Closed'  
}else if(getHours === 6 || getHours >= 6){
    hours.textContent='Shop is Open'
}
}

shopTime();