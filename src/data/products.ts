import ring1 from '@/assets/ring-1.jpg';
import necklace1 from '@/assets/necklace-1.jpg';
import bracelet1 from '@/assets/bracelet-1.jpg';
import earrings1 from '@/assets/earrings-1.jpg';
import necklace2 from '@/assets/necklace-2.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'aneis' | 'colares' | 'pulseiras' | 'brincos';
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Anel Folha Delicada',
    price: 12500,
    description: 'Anel em prata 925 com design de folha entrelaçada e zircónia central.',
    image: ring1,
    category: 'aneis',
  },
  {
    id: '2',
    name: 'Anel Infinito Clássico',
    price: 9800,
    description: 'Anel minimalista em prata 925 com símbolo do infinito polido.',
    image: ring1,
    category: 'aneis',
  },
  {
    id: '3',
    name: 'Colar Nó do Amor',
    price: 18500,
    description: 'Pingente em prata 925 com design de nó e pedra brilhante central.',
    image: necklace1,
    category: 'colares',
  },
  {
    id: '4',
    name: 'Colar Corrente Dupla',
    price: 15000,
    description: 'Corrente dupla em prata 925, perfeita para layering elegante.',
    image: necklace2,
    category: 'colares',
  },
  {
    id: '5',
    name: 'Pulseira Elos Clássicos',
    price: 14200,
    description: 'Pulseira de elos em prata 925 com fecho de lagosta seguro.',
    image: bracelet1,
    category: 'pulseiras',
  },
  {
    id: '6',
    name: 'Pulseira Corrente Fina',
    price: 11000,
    description: 'Pulseira delicada em prata 925, ideal para uso diário.',
    image: bracelet1,
    category: 'pulseiras',
  },
  {
    id: '7',
    name: 'Brincos Gota Elegante',
    price: 13500,
    description: 'Brincos pendentes em prata 925 com design de gota dupla.',
    image: earrings1,
    category: 'brincos',
  },
  {
    id: '8',
    name: 'Brincos Lágrima Polida',
    price: 10800,
    description: 'Brincos em prata 925 com acabamento polido e forma de lágrima.',
    image: earrings1,
    category: 'brincos',
  },
];

export const categoryLabels: Record<string, string> = {
  aneis: 'Anéis',
  colares: 'Colares',
  pulseiras: 'Pulseiras',
  brincos: 'Brincos',
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-AO', {
    style: 'currency',
    currency: 'AOA',
    minimumFractionDigits: 0,
  }).format(price);
};
