import { Link } from 'react-router-dom'; 



export default function Navigation() { 
return ( 
<nav>
 <ul>
 <li><Link to="/">Inicio</Link></li>
 <li><Link to="./componets/about">Acerca de</Link></li>
 <li><Link to="/contact">Contacto</Link></li> 
</ul>
 </nav> 
); 
}


