import React, { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { ConfirmationModal } from './ConfirmationModal';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  description,
}) => {
  const addItem = useCartStore((state) => state.addItem);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductCardProps | null>(null);

  const handleAddToCart = (product: ProductCardProps) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const confirmAddToCart = () => {
    if (selectedProduct) {
      addItem(selectedProduct);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-2xl font-bold text-purple-600 mb-4">
          CHF {price.toFixed(2)}
        </p>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={() => handleAddToCart({ id, name, price, image, description })}
            className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors flex items-center gap-2"
          >
            <FaShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
          <button className="text-purple-500 hover:text-purple-600">
            <FaHeart className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ConfirmationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={confirmAddToCart}
        />
      )}
    </div>
  );
};