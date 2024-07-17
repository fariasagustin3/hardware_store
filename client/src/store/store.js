import { create } from 'zustand'

export const useStore = create((set) => ({
  products: [],
  categories: [],
  brands: [],
  loading: false,
  cart: [],

  getProducts: (payload) => set(() => ({
    products: payload,
  })),

  getCategories: (payload) => set(() => ({
    categories: payload,
  })),

  getBrands: (payload) => set(() => ({
    brands: payload,
  })),

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
}));
