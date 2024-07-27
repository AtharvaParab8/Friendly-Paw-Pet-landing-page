
const accordian= document.querySelectorAll('.accordian');
accordian.forEach(accordian=>{
    const icon1= accordian.querySelector('.icon1');
    let answer = accordian.querySelector(".answer");

    let mode="notactive";
    accordian.addEventListener("click",()=>{
        accordian.style.backgroundColor = '#dfd5a5';
        accordian.style.border="2px solid black";
        if(mode==="notactive"){
            mode="active";
            icon1.classList.add("icon1active");
            answer.style.maxHeight = answer.scrollHeight + '1px';
            answer.style.backgroundColor='white';
            answer.style.marginBottom ='50px';
            accordian.style.marginBottom ='50px';
        }
        else{
            mode="notactive";
            icon1.classList.remove("icon1active");
            answer.style.maxHeight = null;
            accordian.style.marginBottom ='0px';
            accordian.style.backgroundColor = '';
            accordian.style.border="";
        }
    });
    
});

let tests = document.getElementsByClassName("test");

for (let i = 0; i < tests.length; i++) {
  tests[i].addEventListener("mouseover", (event) => {
    event.target.style.color = "#e76f51";
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  });
}

