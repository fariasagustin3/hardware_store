import { create } from 'zustand'

export const useStore = create((set) => ({
  products: [],
  categories: [],
  brands: [],
  loading: false,

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
}))
