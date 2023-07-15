import'./Header.css';

const template =()=> {

    return `<h1 id = "titulo" > piedra, papel y tijera</h1>`;

};

const Header =()=>{
   document.querySelector("#titulo").innerHTML = template();
};



export default Header