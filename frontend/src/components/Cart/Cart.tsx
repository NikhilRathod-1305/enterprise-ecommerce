interface CartProps {
    items: any[];
    onRemove: (index: number) => void;
}

function Cart({items, onRemove}: CartProps) {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return (
        <div className="cart">
            <h2>Shopping Cart ({items.length} items)</h2>
            <ul>
                {items.map((items, index) => (
                    <li key={index}>
                        {items.name} - ${items.price.toFixed(2)}

                        <button onClick={() =>onRemove(index)}>❌</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    )
}

export default Cart;