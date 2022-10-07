import { productsTypes } from "../types";

const {SELECTED_PRODUCT,FILTERED_PRODUCTS}=productsTypes

export const selectedProduct=(id)=>({
    type:SELECTED_PRODUCT,
    productId:id
})


export const filterProducts=(id)=>({
    type:FILTERED_PRODUCTS,
    categoryId:id

})