import { Link } from 'react-router-dom';
import { CgShoppingBag } from "react-icons/cg";

const CartWidget = () => {


    return (
        <div>
            <Link className="botoncarrito" to="/carrito">
                <span className="numerito">0</span>
                <CgShoppingBag style={{ fontSize: '24px'}} />
            </Link>
        </div>
    );
}

export default CartWidget;
