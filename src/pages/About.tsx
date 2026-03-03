import { motion } from 'framer-motion';
import { ShieldCheck, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <main className="pt-24 sm:pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">A Nossa História</p>
          <h1 className="font-display text-4xl sm:text-5xl font-light">Sobre Nós</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 mb-20"
        >
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            A <strong className="text-foreground">LUME925</strong> nasceu da paixão por joias autênticas e acessíveis. Acreditamos que a elegância não precisa de ser inalcançável — cada peça da nossa colecção é cuidadosamente desenhada para realçar a beleza natural de quem a usa.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Trabalhamos exclusivamente com <strong className="text-foreground">prata 925 certificada</strong>, garantindo que cada anel, colar, pulseira e par de brincos cumpre os mais altos padrões de qualidade. A nossa prata é hipoalergénica, durável e mantém o seu brilho ao longo do tempo.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Sediados em <strong className="text-foreground">Luanda, Angola</strong>, orgulhamo-nos de servir clientes que valorizam a sofisticação e a autenticidade. O nosso compromisso vai além da venda — queremos que cada cliente se sinta especial, desde o primeiro contacto até ao momento em que veste a sua joia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: 'Autenticidade', text: 'Todas as peças acompanham certificado de prata 925 genuína.' },
            { icon: Award, title: 'Qualidade Premium', text: 'Acabamento impecável e materiais seleccionados com rigor.' },
            { icon: Heart, title: 'Satisfação Total', text: 'Comprometemo-nos com a felicidade de cada cliente.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-muted p-8 rounded-lg text-center"
            >
              <item.icon size={28} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-display text-xl font-medium mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
