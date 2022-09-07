import { useState } from "react";
import { products } from "../data/products";
import { Product, ProductInCart } from "../interfaces/interfaces";



export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
        // console.log({count, product});
        
        setShoppingCart(oldShoppingCart => {

            /* Fijamos si existe el producto en el carrito, si no existe, creamos uno */
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if(Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }
            
            /* Borrar el producto */
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;


            // if(count===0) {

            //     // Borramos el objeto con cantidad 0
            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;

            //     return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     [product.id]: {...product, count}
            // }



        })
    }

    return {
        shoppingCart,
        products,
        onProductCountChange,
    }
}
