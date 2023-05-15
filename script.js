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
  h1.style.display="none"
  btn.style.display="none"
  async function bar() {
    var op = await fetch("https://cataas.com/api/tags")
    var op1 = await op.json()
    console.log(op1)
    for (let i = 0; i < op1.length; i++) {
      var div = document.createElement("div")
      div.innerHTML = `<table class="table table-dark">
 <thead>
   <tr>
     <td scope="col" style="color: yellow;">* ${op1[i]}</td>
   </tr>
 </thead>`
      document.body.appendChild(div)
    }
   
  }
  bar()
  })
 
