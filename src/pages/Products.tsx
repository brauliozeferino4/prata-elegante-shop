import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products, categoryLabels } from '@/data/products';
import { motion } from 'framer-motion';

const allCategories = ['todos', 'aneis', 'colares', 'pulseiras', 'brincos'];

const Products = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('categoria') || 'todos';
  const [activeCategory, setActiveCategory] = useState(initialCat);

  const filtered = activeCategory === 'todos'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="pt-24 sm:pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Colecção</p>
          <h1 className="font-display text-4xl sm:text-5xl font-light">Os Nossos Produtos</h1>
        </motion.div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-foreground text-background'
                  : 'bg-muted text-muted-foreground hover:bg-accent'
              }`}
            >
              {cat === 'todos' ? 'Todos' : categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground font-body text-sm mt-12">
            Nenhum produto encontrado nesta categoria.
          </p>
        )}
      </div>
    </main>
  );
};

export default Products;
