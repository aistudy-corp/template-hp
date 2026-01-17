/**
 * Common type definitions
 * Add project-specific types here
 */

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  error?: string;
  status: number;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * Common metadata for entities
 */
export interface EntityMeta {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Make all properties of T optional except for K
 */
export type PartialExcept<T, K extends keyof T> = Partial<Omit<T, K>> &
  Pick<T, K>;

/**
 * Make all properties of T required except for K
 */
export type RequiredExcept<T, K extends keyof T> = Required<Omit<T, K>> &
  Partial<Pick<T, K>>;

/**
 * Extract the type of array elements
 */
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

/**
 * Make specific properties of T optional
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Strict omit that only allows keys that exist in T
 */
export type StrictOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
