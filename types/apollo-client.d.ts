declare module '@apollo/client' {
  // Minimal ambient declarations to satisfy TypeScript in this exercise workspace.
  export function useQuery(query: any, options?: any): any
  export function gql(literals: any, ...placeholders: any[]): any
  export const ApolloProvider: any
  export class ApolloClient<TCacheShape = any> { constructor(opts?: any) }
  export class InMemoryCache { constructor(opts?: any) }
  // Allow other imports as any
  const _default: any
  export default _default
}
