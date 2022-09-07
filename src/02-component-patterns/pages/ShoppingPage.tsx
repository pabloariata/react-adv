import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug!',
    img: './coffee-mug.png'

}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

        <ProductCard product={product}>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}
                    className="bg-dark text-white"
                    >
            {/* <h1>Hola Mundo</h1> */}
            <ProductImage className="custom-image"/>
            <ProductTitle className="text-bold" title={'titulo custom'} />
            <ProductButtons className="custom-buttons"/>
        </ProductCard>

        <ProductCard product={product} style={{
            backgroundColor: '#70D1F8'
            }}>
            <ProductImage />
            <ProductTitle style={{fontWeight: 'bold'}} />
            <ProductButtons style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
        </ProductCard>

        </div>

    </div>
  )
}
