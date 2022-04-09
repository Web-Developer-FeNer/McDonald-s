import {React, useEffect, useState, useRef} from "react";

function Sort({items, onClickSortType, activeSortType}) {

    
    const [visible, setVisible] = useState(false)
    const sortRef = useRef()
    const activeLabel = items.find(obj => obj.type === activeSortType).name


    const toggleVisible = () => {
        setVisible(!visible)
    }

    const handleOutSideClick = (e) => {
        if (!e.path.includes(sortRef.current)){
            setVisible(false)
        }
    }

    const onSelectItem = (index) => {
        onClickSortType(index)
        setVisible(false)
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutSideClick)

    }, [])


    return (
        <div ref={sortRef} className="sort">
              <div className="sort_label">
                
              <b>Сортировка по:</b>
              <span onClick={toggleVisible}>{activeLabel}</span>
              </div>
              {visible && <div className="sort_popup">
                <ul>
                    {items.map((obj, index) => 
                    <li className={activeSortType === obj.type ? 'active' : ''} 
                    key={`${obj.type}_${index}`}
                    onClick={() => onSelectItem(obj)}
                    >{obj.name}</li>
                    )}
                  
                </ul>
              </div>}
            </div>
    )
}

export default Sort