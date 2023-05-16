var div1 = document.createElement("div")
var btn = document.createElement("button")
btn.setAttribute("type", "button")
btn.classList.add("btn", "btn-primary")
div1.style.textAlign = "center"
div1.style.marginTop = "90px"
var h1 = document.createElement("h1")
h1.innerHTML = "Welcome"
h1.style.fontSize = "30px"
btn.style.width = "30%"
btn.innerHTML = "Enter"
div1.append(h1, btn)
document.body.append(div1)
btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgb(19, 19, 18)";
  h1.style.display="none"
  btn.style.display="none"
  async function bar() {
    var op = await fetch("https://cataas.com/api/tags")
    var op1 = await op.json()
    console.log(op1)
    var div3=document.createElement("div")
    div3.setAttribute("class",'kittys')
    div3.innerHTML="Kittys"
    document.body.appendChild(div3);
    for (let i = 0; i < op1.length; i++) {
      var div = document.createElement("div")
      div.setAttribute("class","inner")
      div.innerHTML = `
 <ul>
      ${op1[i]}
   </ul>`
 
      document.body.appendChild(div)
    }
    document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnf6PbRNG3Bm71MTKW5SeCjx0uAtZpbyCbw&usqp=CAU')";

  }
  bar()
  })
 
