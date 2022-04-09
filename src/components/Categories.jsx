import {React} from "react";

function Categories({activeCategory, items, onClickItem}) {




    return (
        <div>
            <div className="categories">
              <ul>
                
                {items && items.map((name, index) => 
                <li 
                className={activeCategory === index ? 'active' : ''} 
                onClick={() => onClickItem(index)} 
                key={`${name}_${index}`}>{name}</li>)}
                
                
              </ul>
            </div>
        </div>
    )
}

export default Categories