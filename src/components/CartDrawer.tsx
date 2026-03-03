import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { AnimatePresence, motion } from 'framer-motion';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-2xl font-semibold">Carrinho</h2>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-muted-foreground font-body text-sm">O seu carrinho está vazio.</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {items.map(item => (
                    <div key={item.product.id} className="flex gap-4 pb-4 border-b border-border">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-medium truncate">{item.product.name}</h3>
                        <p className="font-body text-sm text-muted-foreground">{formatPrice(item.product.price)}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-7 h-7 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-body text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-7 h-7 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex justify-between font-body">
                    <span className="text-muted-foreground">Total</span>
                    <span className="text-lg font-semibold">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="font-body text-xs text-muted-foreground text-center">
                      Pagamento por Transferência Bancária ou Multicaixa Express
                    </p>
                    <a
                      href={`https://wa.me/244900000000?text=${encodeURIComponent(
                        `Olá! Gostaria de finalizar a minha compra:\n${items.map(i => `• ${i.product.name} x${i.quantity} — ${formatPrice(i.product.price * i.quantity)}`).join('\n')}\n\nTotal: ${formatPrice(totalPrice)}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-foreground text-background font-body text-sm tracking-wider uppercase py-3 text-center rounded hover:opacity-90 transition-opacity"
                    >
                      Finalizar via WhatsApp
                    </a>
                  </div>
                  <button
                    onClick={clearCart}
                    className="w-full font-body text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                  >
                    Limpar Carrinho
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
