import { useState } from 'react';
import menuData from '../data.js';
import MenuItem from './MenuItem.jsx';

const MenuWrapper = () => {
    const [items, setItem] = useState(menuData);
    return (
        <div className="menu-wrapper">
            {items.map(i => {
                return <MenuItem item={i} key={i.id} />
            })}
        </div>
    )
}

export default MenuWrapper;