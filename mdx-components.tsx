import type { MDXComponents } from 'mdx/types'
 
const components: MDXComponents = {
  h1: ({children}) => <h1 className="text-2xl font-bold my-4">{children}</h1>,
  p: ({children}) => <p className="my-2">{children}</p>,
}
 
export function useMDXComponents(): MDXComponents {
  return components
}