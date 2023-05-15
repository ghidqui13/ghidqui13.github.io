// Array
const frameworks = [
    {
        name:"TecnoPhone", 
        description:"En esta empresa hice practicas durante 6 meses, esta empresa se encarga de arreglar moviles, ordenadore, plays, etc..."
    },
    {
        name:"UniversoWeb", 
        description:"En esta empresa estube de practicas 8 meses de practicas y luego estube en verano trabajando en esta, como su nombre indica esta empresa se encarga de hacer paguinas web y aparate hace publicidad."
    }
]

// render html
var html = "";
frameworks.forEach(e=>{
    html +="<article class='child'><article class='content'><h4>"+e.name+"</h4><p>"+e.description+"</p></article> </article>"
})
SobreMi.innerHTML = html

// ANIMACION TIMELINE

var _items = document.querySelectorAll(".child")
_items.forEach(element =>{
    if(element.offsetTop < 300)
        element.classList.add('_show')
})

window.addEventListener("scroll",e=>{
    var scroll = document.documentElement.scrollTop
    var items = document.querySelectorAll(".child")
    items.forEach(elem=>{
        if(elem.offsetTop - window.innerHeight/2 < scroll){
            elem.classList.remove('_hide')
            elem.classList.add('_show')
        }else{
            elem.classList.remove('_show')
            elem.classList.add('_hide')
        }

    })
})