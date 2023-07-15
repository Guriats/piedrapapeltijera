import'./Header.css';

const template =()=> {

    return `<h1> piedra, papel y tijera</h1>`;
};

const Header =()=>{
   document.querySelector("header").innerHTML = template();
};



export default Header