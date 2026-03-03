import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mensagem enviada com sucesso! Entraremos em contacto brevemente.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="pt-24 sm:pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Fale Connosco</p>
          <h1 className="font-display text-4xl sm:text-5xl font-light">Contacto</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Nome</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 rounded font-body text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-shadow"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 rounded font-body text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-shadow"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Mensagem</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 rounded font-body text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-shadow resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-foreground text-background font-body text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Enviar
              <Send size={14} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-medium mb-3">WhatsApp</h3>
              <a
                href="https://wa.me/244900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle size={16} />
                +244 900 000 000
              </a>
              <p className="font-body text-xs text-muted-foreground mt-1">Atendimento rápido e personalizado</p>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium mb-3">Localização</h3>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <p className="font-body text-sm">Luanda, Angola</p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium mb-3">Pagamentos</h3>
              <div className="space-y-2">
                <p className="font-body text-sm text-muted-foreground">• Transferência Bancária</p>
                <p className="font-body text-sm text-muted-foreground">• Multicaixa Express</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
