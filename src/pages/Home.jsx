import React from "react"
import { Sort, Categories } from "../components"
import BurgerBlock from "../components/BurgerBlock/BurgerBlock"
import {useSelector, useDispatch} from 'react-redux'
import {setCategory, setSortBy} from '../redux/actions/filters'
import { useEffect} from "react";
import { fetchBurgers } from "../redux/actions/burgers";
import { addBurgerToCart } from "../redux/actions/cart";
import BurgerLoadingBlock from "../components/BurgerBlock/BurgerLoadingBlock"



const categoryNames = ['Всё', 'МакКомбо', 'Бургеры', 'Роллы', 'Гарниры', 'Напитки']
const sortItems = [
  {name: 'популярности', type: 'popular', order: 'desc'},
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'алфавиту', type: 'name', order: 'asc'}
]

function Home () {

  const dispatch = useDispatch();
  const items = useSelector(({burgers}) => burgers.items)
  const cartItems = useSelector(({cart}) => cart.items)
  const isLoaded = useSelector(({burgers}) => burgers.isLoaded)
  const {category, sortBy} = useSelector(({filters}) => filters)

  useEffect(() => {
    
    dispatch(fetchBurgers(sortBy, category))
    
  }, [category, sortBy])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const handleAddBurger = (obj) => {
    dispatch({
      type: 'ADD_BURGER_CART',
      payload: obj,
    })
  }

    return (
        <div>

<div className="oboi">
        <img src="/image 4.png" alt="" />
      </div>

<div className="container">
          <div className="content-top">
            <Categories 
            activeCategory = {category}
            onClickItem = {onSelectCategory}
            items={categoryNames}/>
            <Sort 
            activeSortType={sortBy.type}
            onClickSortType={onSelectSortType}
            items={sortItems}/>
          </div>
        </div>


        <h2 className="content_title">Всё меню:</h2>

        <div className="content_items">

          {
            isLoaded ? items.map((obj) => <BurgerBlock 
            onClickAddBurger={handleAddBurger} 
            key={obj.id} 
            addedCount = {cartItems[obj.id] && cartItems[obj.id].items.length}
             {...obj} />) 
            : Array(10).fill(<BurgerLoadingBlock/>)
          }
         
          
        

        

        


        </div>
        </div>
    )
}

export default Home