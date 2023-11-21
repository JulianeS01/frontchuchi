// ../services/ProductService.ts
import { BASE_URL } from "../Config";

export const ProductService = {
  getAllProducts: async (): Promise<Product[]> => {
    const response = await fetch(`${BASE_URL}/elbuensabor/v1/articulosmanufacturados`);
    if (!response.ok) {
      throw new Error('Error al obtener la lista de productos');
    }
    const products: Product[] = await response.json();
    return products;
  },

  addProduct: async (newProduct: Product): Promise<void> => {
    const response = await fetch(`${BASE_URL}elbuensabor/v1/articulosmanufacturados`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error('Error al agregar un nuevo producto');
    }
  },

  updateProduct: async (productId: number, updatedProduct: Product): Promise<void> => {
    const response = await fetch(`${BASE_URL}/elbuensabor/v1/articulosmanufacturados/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el producto');
    }
  },

  deleteProduct: async (productId: number): Promise<void> => {
    const response = await fetch(`${BASE_URL}/elbuensabor/v1/articulosmanufacturados/${productId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error al eliminar el producto');
    }
  },
};

export interface Product {
  id: number;
  name: string;
  price: number;
}
