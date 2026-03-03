import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-jewelry.jpg';
import ProductCard from '@/components/ProductCard';
import { products, categoryLabels } from '@/data/products';

const testimonials = [
  { name: 'Ana M.', text: 'Qualidade incrível! A prata é autêntica e o design é lindo. Recomendo a todos.', rating: 5 },
  { name: 'Carlos S.', text: 'Comprei um colar para a minha esposa e ela adorou. Entrega rápida e embalagem premium.', rating: 5 },
  { name: 'Maria L.', text: 'As peças são exactamente como nas fotos. Já fiz três encomendas e nunca desiludiu.', rating: 5 },
];

const featuredProducts = products.slice(0, 4);

const categories = [
  { key: 'aneis', label: 'Anéis' },
  { key: 'colares', label: 'Colares' },
  { key: 'pulseiras', label: 'Pulseiras' },
  { key: 'brincos', label: 'Brincos' },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Coleção de joias em prata 925" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-background/70 mb-4"
          >
            Prata 925 Autêntica
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-light text-background leading-none mb-6"
          >
            Elegância em<br />cada detalhe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-sm text-background/70 mb-8 max-w-md mx-auto"
          >
            Descubra a nossa colecção exclusiva de joias em prata 925, desenhadas para quem valoriza sofisticação e autenticidade.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 bg-background text-foreground font-body text-sm tracking-wider uppercase px-8 py-4 rounded hover:bg-background/90 transition-colors"
            >
              Comprar Agora
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Colecções</p>
            <h2 className="font-display text-4xl sm:text-5xl font-light">Explore por Categoria</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/produtos?categoria=${cat.key}`}
                  className="block bg-muted rounded p-8 sm:p-12 text-center group hover:bg-accent transition-colors duration-300"
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-light group-hover:tracking-wider transition-all duration-300">
                    {cat.label}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 sm:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Destaques</p>
            <h2 className="font-display text-4xl sm:text-5xl font-light">Peças em Destaque</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Ver Todos os Produtos
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground text-background rounded-lg p-10 sm:p-16 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <ShieldCheck size={48} className="shrink-0 opacity-80" />
            <div>
              <h3 className="font-display text-3xl font-light mb-2">Garantia de Autenticidade</h3>
              <p className="font-body text-sm opacity-70 leading-relaxed max-w-xl">
                Cada peça LUME925 é fabricada em prata 925 certificada e acompanha selo de autenticidade. Comprometemo-nos com a qualidade e a satisfação de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Testemunhos</p>
            <h2 className="font-display text-4xl sm:text-5xl font-light">O que dizem os nossos clientes</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-background p-8 rounded-lg"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-display text-lg font-medium">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
