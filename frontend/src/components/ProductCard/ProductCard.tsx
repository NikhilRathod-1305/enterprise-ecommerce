
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: any ) => void;
}

function ProductCard({product , onAddToCart}: ProductCardProps) {

    const handleAddToCart = () => {
        onAddToCart(product);
    }
   
    return (
        <div className="product-card-section">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;