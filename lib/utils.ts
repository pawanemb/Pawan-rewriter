import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges class names using clsx and tailwind-merge
 * @param inputs - Class names to merge
 * @returns Merged class names string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date to a readable string
 * @param date - Date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

/**
 * Formats a number as currency
 * @param amount - Number to format
 * @param currency - Currency code (default: 'USD')
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

/**
 * Truncates a string to a specified length
 * @param str - String to truncate
 * @param length - Maximum length
 * @returns Truncated string
 */
export function truncateString(str: string, length: number = 50): string {
  if (str.length <= length) return str
  return `${str.slice(0, length)}...`
}

/**
 * Debounces a function
 * @param fn - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout

  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Creates a random ID
 * @param length - Length of the ID
 * @returns Random ID string
 */
export function generateId(length: number = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, length + 2)
}

/**
 * Checks if an object is empty
 * @param obj - Object to check
 * @returns Boolean indicating if object is empty
 */
export function isEmptyObject(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0
}

/**
 * Capitalizes the first letter of a string
 * @param str - String to capitalize
 * @returns Capitalized string
 */
export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Formats bytes to a human-readable string
 * @param bytes - Number of bytes
 * @returns Formatted string
 */
export function formatBytes(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return '0 Bytes'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`
}

/**
 * Validates an email address
 * @param email - Email to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

/**
 * Extracts query parameters from a URL
 * @param url - URL to parse
 * @returns Object containing query parameters
 */
export function getQueryParams(url: string): Record<string, string> {
  const params = new URLSearchParams(new URL(url).search)
  const result: Record<string, string> = {}
  params.forEach((value, key) => {
    result[key] = value
  })
  return result
}

/**
 * Checks if a value is a valid URL
 * @param str - String to check
 * @returns Boolean indicating if string is a valid URL
 */
export function isValidUrl(str: string): boolean {
  try {
    new URL(str)
    return true
  } catch {
    return false
  }
}