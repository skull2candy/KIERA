import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number | null | undefined): string {
  if (!price && price !== 0) return 'Price on Request'
  
  if (price >= 10000000) {
    const cr = price / 10000000
    return `₹${cr.toFixed(2).replace(/\.00$/, '')} Cr`
  }
  
  if (price >= 100000) {
    const lakh = price / 100000
    return `₹${lakh.toFixed(2).replace(/\.00$/, '')} Lakhs`
  }
  
  return `₹${price.toLocaleString('en-IN')}`
}
