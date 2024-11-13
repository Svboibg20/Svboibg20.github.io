import React from 'react'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

const Carrito: React.FC = () => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([])

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Carrito de Compras</CardTitle>
      </CardHeader>
      <CardContent>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</span>
                <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <Button disabled={cartItems.length === 0}>Proceder al pago</Button>
      </CardFooter>
    </Card>
  )
}

export default Carrito