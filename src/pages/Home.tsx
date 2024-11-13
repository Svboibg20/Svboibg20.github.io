import { useState } from 'react'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Input } from '../components/ui/input'
import { Search, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Paracetamol',
    description: 'Analgésico y antipirético',
    price: 5.99,
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    id: '2',
    name: 'Ibuprofeno',
    description: 'Antiinflamatorio no esteroideo',
    price: 7.99,
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    id: '3',
    name: 'Amoxicilina',
    description: 'Antibiótico de amplio espectro',
    price: 12.99,
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    id: '4',
    name: 'Omeprazol',
    description: 'Inhibidor de la bomba de protones',
    price: 9.99,
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    id: '5',
    name: 'Loratadina',
    description: 'Antihistamínico para alergias',
    price: 4.49,
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    id: '6',
    name: 'Diazepam',
    description: 'Ansiolítico y sedante',
    price: 8.49,
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    id: '7',
    name: 'Acetaminofén',
    description: 'Alivio del dolor y la fiebre',
    price: 6.99,
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    id: '8',
    name: 'Aspirina',
    description: 'Antiinflamatorio y analgésico',
    price: 5.49,
    image: '/placeholder.svg?height=200&width=200'
  }
];


export default function Home() {
  const [activeTab, setActiveTab] = useState('medicamentos')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link to="/" className="mr-4 hidden md:flex">
            <h1 className="text-xl font-bold text-primary mt-5 ml-9">BioCubaFarmaci</h1>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar productos..."
                  className="w-full pl-8 md:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/carrito" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                    0
                  </span>
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/login">Iniciar sesión</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-screen-xl">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="medicamentos">Medicamentos</TabsTrigger>
            <TabsTrigger value="vitaminas">Vitaminas</TabsTrigger>
            <TabsTrigger value="otros">Otros</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="flex flex-col flex-1 p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Agregar al carrito
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <footer className=" text-black py-6">
        <div className="container mx-auto text-center">
          {/* Enlaces de navegación */}
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-indigo-400">Acerca de</a>
            <a href="#" className="hover:text-indigo-400">Contacto</a>
            <a href="#" className="hover:text-indigo-400">Política de privacidad</a>
            <a href="#" className="hover:text-indigo-400">Términos de uso</a>
          </div>

      
         

          {/* Derechos reservados */}
          <div className="text-sm">
            <p>&copy; 2024 Biocubafarmaci. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
