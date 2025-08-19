export default function Navbar(){
    return(
     <nav className="p-5 bg-black flex justify-end items-center ">
          <ul className="flex justify-center items-center text-2xl gap-4 text-white">
           <li><a href="/">ínicio</a></li>
          <li><a href="/contato">Contato</a></li>
            <li><a href="/about">Sobre</a> </li>
            </ul>
            </nav>
    );
}