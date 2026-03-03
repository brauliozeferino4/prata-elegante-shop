import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, type Product } from '@/data/products';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    toast.success(`${product.name} adicionado ao carrinho`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded bg-muted aspect-square mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <button
          onClick={handleAdd}
          className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm text-foreground w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-foreground hover:text-background"
        >
          <ShoppingBag size={16} />
        </button>
      </div>
      <h3 className="font-display text-lg font-medium">{product.name}</h3>
      <p className="font-body text-xs text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-body text-sm font-semibold">{formatPrice(product.price)}</span>
        <button
          onClick={handleAdd}
          className="font-body text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          Adicionar
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
