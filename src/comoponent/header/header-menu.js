import React from 'React';
import HeaderLinks from './headerLinks';

function MenuResponsive () {
    return (
        <ul className="menu-responsive">
            {HeaderLinks.map((item, index) => {
            return (
              <li key={index} className={item.clase}>
                <a href={item.href}>{item.titulo}</a>
              </li>
            );
          })}
        </ul>
    )
}

export default MenuResponsive;