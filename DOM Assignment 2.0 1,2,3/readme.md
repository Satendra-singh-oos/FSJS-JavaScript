 # DOM ASSIGNMENT #

 ## First-Assignment ##
**Intial Look of website**
 ![](./firstAssignmentImage/Solution_snap/Intial.png)

![](https://img.shields.io/badge/-Task--1-brightgreen)

- The Task is to add the Hire Me in the nav bar  by using DOM

**Output**
![img](./firstAssignmentImage//Solution_snap/output-1.png)

**Code**

``` javascript
    let newele = document.createElement("li");
    newele.innerHTML="<a>Hire Me</a>"
    let onAddEle=document.querySelector("ul")
    onAddEle.appendChild(newele)
 ```


![](https://img.shields.io/badge/-Task--2-brightgreen)

- The Task is to change the placholder of ther Search to Search My Project by using DOM

**Output**
![img](./firstAssignmentImage/Solution_snap/output-2.png)

**Code**

``` javascript
      let div = document.querySelector(".search-field")
      let input =div.querySelector("input")
      input.placeholder ="Search My Project"
   
 ```
 



![](https://img.shields.io/badge/-Task--3-brightgreen)

- The Task is to  change the paragraph Text
 - 1-> a Freelancer TO a Employee
 - 2->National and internation Client TO iNeuron Intelligence PvtLtd.

**Output**
![img](./firstAssignmentImage/Solution_snap/output-3.png)

**Code**

``` javascript
      let freelancer = document.querySelector('.hero-left-section p span:nth-child(3)');
      let clients = document.querySelector('.hero-left-section p span:nth-child(5)');
      freelancer.textContent = 'an Employee';
     clients.textContent = 'iNeuron Intelligence PvtLtd.';
   
 ```

 

![](https://img.shields.io/badge/-Task--4-brightgreen)

- The Task is to  change the avtar to hitesh sir photo

**Output**
![img](./firstAssignmentImage/Solution_snap/output-4.png)

**Code**

``` javascript
   let div =document.querySelector(".hero-right-section")
   let img =div.querySelector("img")
   img.outerHTML = "<img src=./firstAssignmentImage/img.jpg /> "

  
   
 ```
 
 
- The Task is to  add extra button of Support me  using DOM

**Output**
![img](./firstAssignmentImage/Solution_snap/output-5.png)

**Code**

``` javascript
    let btn=document.createElement("button")
           btn.innerText="Support Me"
         let div = document.querySelector(".hero-right-section-btns")
           div.appendChild(btn);
   
 ```
 

 ## Second-Assignment ##

 ![](https://img.shields.io/badge/-Task--1-red)

 - The Task is to  change the text of 3rd child of the nav which is contact To Projects using DOM

**Output**
![img](./secondAssignmentImage/Solution/output-1.png)

**Code**

``` javascript
let link=document.querySelector("nav ul li:nth-child(3) a");
 link.innerText="Projects"
   
 ```

 ![](https://img.shields.io/badge/-Task--2-red)

 - The Task is to  Add SKIILS Div under the FAQ section and also add h3 and p tag as giving in the task2Output.png using DOM

**Output**
![img](./secondAssignmentImage/Solution/output-2.png)

**Code**

``` javascript
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

   
 ```



 ## Third-Assignment ##

  ![](https://img.shields.io/badge/-Task--1-violet)
  

  - The Task is to  change the placeholder using DOm according to the requirement.

**Output**
![img](./thirdAssignmentImage/Solution/output-1.png)

**Code**

``` javascript
    let outName=document.querySelector(".enterName")
    let outEmail=document.querySelector(".enterMail")
    let outMessg=document.querySelector(".enterMessage")

    outName.placeholder="FSJS 2.0"
    outEmail.placeholder="fsjs@ineouron.ai"
    outMessg.placeholder="Hello World"


    let inName=document.querySelector(".userName")
    let inEmail=document.querySelector(".userEmail")
    let inMessg=document.querySelector(".userMessage")

    inName.placeholder="FSJS 2.0"
    inEmail.placeholder="fsjs@ineouron.ai"
    inMessg.placeholder="Hello World"

   
 ```