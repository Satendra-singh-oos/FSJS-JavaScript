

/* Task-1-> To change the Contact to project in about us page */
let link=document.querySelector("nav ul li:nth-child(3) a");
 link.innerText="Projects"

/* Task-2->Add SKIILS Div under the FAQ section and also add its inner text */



let parentDiv=document.querySelector(".accordian-wrapper")

let newDiv=document.createElement("div")

newDiv.className="accordian"

const newH3 = document.createElement("h3");
newH3.textContent = "Skills";

const newPara=document.createElement('p')
newPara.textContent = "I posses avery good command over the FUll Stack Devlopment tecgnologies like MERN which can seen in my work over the Github"

newDiv.appendChild(newH3)
newDiv.appendChild(newPara)


parentDiv.appendChild(newDiv)



let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});