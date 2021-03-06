export const addBurgerToCart = (burgerObj) => ({
    type: 'ADD_BURGER_CART',
    payload: burgerObj
})


export const clearCart = (burgerObj) => ({
    type: 'CLEAR_CART',
})

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
})

export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
})
export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id,
})