import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../store/useStore';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`Added ${quantity} item(s) to cart!`);
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-ivory rounded-3xl overflow-hidden card-shadow p-0"
    >
      <div className="relative overflow-hidden bg-beige h-80">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:bg-beige transition-colors"
        >
          <Heart
            size={20}
            className={isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-brown'}
          />
        </button>
      </div>

      <div className="p-5">
        <Link to={`/product/${product.id}`} className="hover:text-brown transition-colors">
          <h3 className="text-lg font-serif font-bold text-text mb-2 hover:text-brown">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-text-light mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(product.rating) ? 'fill-gold' : 'fill-beige'}
              />
            ))}
          </div>
          <span className="text-xs text-text-light">({product.reviews})</span>
        </div>

        <div className="mb-4">
          <span className="text-2xl font-serif font-bold text-brown">₹{product.price}</span>
        </div>

        <div className="flex gap-2 mb-3">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
            className="input-field w-20 py-2"
          />
          <button
            onClick={handleAddToCart}
            className="flex-1 btn-primary flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="w-full btn-secondary block text-center"
        >
          Order Now
        </Link>
      </div>
    </motion.div>
  );
};
