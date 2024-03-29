import "./Main.css";

let jugadorElige = "";
let maquinaElige = "";

const template = () => {
  return `
    <h2>empieza a jugar</h2>
    <section>
    <button id ='piedra'> 
    <img src='/public/images/rock.png' alt= 'piedra'/>
    </button>
    <button id ='papel'> 
    <img src='/public/images/paper.png' alt= 'papel'/>
    </button>
    <button id ='tijera'> 
    <img src='/public/images/scissors.png' alt= 'tijera'/>
    </button>
    </section>
    <h3 id ='resultado'>buena suerte</h3>
    `;
};

//podría prescindir de botonClick y quedarme el interior, pero con esta función si tengo que repetirlo
//con sólo llamarla ya tendría todo el código.

const botonClick = () => {
  document.querySelector("#piedra").addEventListener("click", () => {
    jugadorElige = "piedra";
    jugar();
  });

  document.querySelector("#papel").addEventListener("click", () => {
    jugadorElige = "papel";
    jugar();
  });

  document.querySelector("#tijera").addEventListener("click", () => {
    jugadorElige = "tijera";
    jugar();
  });
};



const jugar = () => {

  const result = document.querySelector("#resultado");

  const opciones = ["piedra", "papel", "tijera"];
  const numeroAleatorio = Math.floor(Math.random() * opciones.length);

  maquinaElige = opciones[numeroAleatorio];

  if (jugadorElige === "piedra" && maquinaElige === "tijeras") {
    result.innerHTML = `${jugadorElige} vs ${maquinaElige}: Has ganado!`;
  } else if (jugadorElige === "papel" && maquinaElige === "piedra") {
    result.innerHTML = `${jugadorElige} vs ${maquinaElige}: Has ganado!`;
  } else if (jugadorElige === "tijera" && maquinaElige === "papel") {
    result.innerHTML = `${jugadorElige} vs ${maquinaElige}: Has ganado!`;
  } else if (jugadorElige === maquinaElige) {
    result.innerHTML = `${jugadorElige} vs ${maquinaElige}: Empate!`;
  } else {
    result.innerHTML = `${jugadorElige} vs ${maquinaElige}: Has perdido!`;
  }
};




const Main = () => {
  document.querySelector("main").innerHTML = template();
  botonClick();
};

export default Main;
