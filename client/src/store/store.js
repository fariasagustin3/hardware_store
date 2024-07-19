import { create } from 'zustand'
import axios from 'axios'

export const useStore = create((set) => ({
  products: [],
  categories: [],
  brands: [],
  loading: false,
  cart: [],
  CategoryId: null,
  BrandId: null,

  getProducts: async (BrandId, CategoryId) => {
    const products = await axios.get(`http://localhost:3001/api/products/list?BrandId=${BrandId}&CategoryId=${CategoryId}`)
    set({
      products: products.data.data
    })
  },

  getCategories: async () => {
    const categories = await axios.get("http://localhost:3001/api/categories/list")
    set({
      categories: categories.data
    })
  },

  getBrands: async () => {
    const brands = await axios.get("http://localhost:3001/api/brands/list")
    set({
      brands: brands.data
    })
  },

  loadingOn: () => set(() => ({
    loading: true,
  })),

  loadingOff: () => set(() => ({
    loading: false,
  })),

  addToCart: (payload) => set((state) => ({
    cart: [...state.cart, payload],
  })),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(product => product.id !== productId),
  })),

  categorySelected: (CategoryId) => set(() => ({
    CategoryId: CategoryId
  })),

  brandSelected: (BrandId) => set(() => ({
    BrandId: BrandId
  })),
}));
