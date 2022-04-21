// // 
// let cont = document.querySelector('.container');
//  console.log(cont.children[1].children[0]);
//  console.log(cont.children);
//  console.log(cont.firstElementChild.nextElementSibling.nextElementSibling);

// // console.log(cont.children);

// let element = document.createElement('ul');
// element.id = 'ul1'
// element.className = 'ulclass'
//  element.appendChild(li)
//  let listelement = document.createElement('li');
//  element.appendChild(element.appendChild(listelement));
// // e1 = document.querySelector('ul')
// 
// 
// console.log(e1);
// // 
// const node = document.createElement("li");
// const textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("ul1").appendChild(node);
// let element1 = document.createElement('li','li');
// element1.innerText = "hello its Tanuj"
// element.appendChild(element1);
// console.log(element1);
// console.log(element);
// let a = document.querySelector('div.container');
// // CredentialsContainer.
// // a.appendChild(element);
// a.appendChild(element);

// console.log(a)


// console.log(listelement)ea
// 

// var myname = "ankur";
// console.log(typeof(myname));
// var myage = 25 ;
// console.log(typeof(myage))

// what is nan ?

// c= "ankur"-"zalaya" ;
// console.log(c);

//  a = 5
//  b = '5'
// console.log( a ===  b);

// var c ;
// function myname(a,b){
//  console.log(c= a+b)
// }

// myname(5,2)

// var myfriends = ['ankur','zalaya','chetan','vranda','tanuj','kriti'];

// for(var i=0; i<myfriends.length ; i++) {
//     console.log(myfriends[i]);
// } 
let str = 'python'
let links = document.links ;
console.log(links);
let href;
Array.from(links).forEach(function(element){
    href = element.href;
    if(href.includes(str)){
    console.log(href);
    }
})