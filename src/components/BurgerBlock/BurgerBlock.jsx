import React, { useState } from "react";
import classNames from "classnames";







function BurgerBlock({imageUrl, id,  name, price, types, onClickAddBurger, addedCount}) {
    const typesNames = ['Маленький', 'Стандартный', 'Большой']
    const [activeType, setActiveType] = useState(types[0])

    const onSelectItem = (index) => {
        setActiveType(index)
    }

    const onAddBurger = () => {
      const obj = {
        id,
      name,
      imageUrl,
      price,
      types
      }
      onClickAddBurger(obj)
    }
    
   

   

 

    return(
        <div className="burger-block">
          <img
            className="burger-block__image"
            src={imageUrl}
            alt="Burger"
          />
          <h4 className="burger-block__title">{name}</h4>
          <div className="burger-block__selector">
            <ul>
              
                {typesNames.map((type,index) => 
                <li 
                key={type} 
                onClick = {() => onSelectItem(index)} 
                className={classNames({
                    active: activeType === index,
                    disabled: !types.includes(index)
                })}
                
                >{type}</li>
                )}
              
            </ul>
          </div>
          <div className="burger-block__bottom">
            <div className="burger-block__price">от {price} ₽</div>
            
            <div onClick={onAddBurger} className="button button--outline button--add">
              <i>+</i>
              <span>Добавить</span>
              <i>{addedCount}</i>
              </div>
              
          </div>
        </div>
    )
}



export default BurgerBlock