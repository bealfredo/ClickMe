
  document.getElementById("container-energy").style.width = localStorage.click + "%"

  if (localStorage.click == 100) {win()}


function clickMe() {
  if (typeof(Storage) == "undefined"){
    alert("Desculpe, seu navegador não tem suporte :(");
    return;
  }

  if (localStorage.click){
    if (Number(localStorage.click) > 99){return}
    localStorage.click = ((Number(localStorage.click)*10) + (0.1 * 10))/10;
  } else {
    localStorage.click = 1;
  }

  document.getElementById("container-energy").style.width = localStorage.click + "%"
  console.log(localStorage.click);

  if (localStorage.click == 100) {win()}

}

function win(){
  document.getElementById("reward").style.display = "flex";
  document.getElementById("code").innerHTML = `&#${(((562 - 6) + 4) /8)};&#${(((554 - 6) + 4) /8)};&#${(((626 - 6) + 4) /8)};&#${(((402 - 6) + 4) /8)};&#${(((706 - 6) + 4) /8)};&#${(((442 - 6) + 4) /8)};`
}

function reset() {
  if (typeof(Storage) !== "undefined"){

    localStorage.click = 0

    document.getElementById("container-energy").style.width = localStorage.click + "%";

    document.getElementById("reward").style.display = "none";

    document.getElementById("code").innerHTML = "";

    alert("Sucess!")

  }
}


// const cod = [70,69,78,50,88,55]

// for (let i = 0; i < cod.length; i++) {
//   cod[i] = (((cod[i] * 8) - 4) + 6)
// }
// console.log(cod)