import type { MDXComponents } from 'mdx/types'
 
const components: MDXComponents = {
  h1: ({children}) => <h1 className="text-2xl font-bold my-4">{children}</h1>,
  h2: ({children}) => <h2 className="pl-[20px] mt-[20px] font-semibold text-[#1AA809]">{children}</h2>,
  p: ({children}) => <p className="mb-2 font-medium leading-[1.4]">{children}</p>,
  ul: ({children}) => <ul
                        style={{listStyleType: 'disc', listStylePosition: 'inside',}}
                      >
                        {children}
                      </ul>,
  ol: ({children}) => <ol
                        style={{listStyleType: 'decimal', listStylePosition: 'outside',}}
                        className="marker:text-[#00AC00] pl-8"
                      >
                        {children}
                      </ol>,
  li: ({children}) => <li
                        className="mb-2 font-medium leading-[1.4]"
                      >
                        {children}
                      </li>,
}
 
export function useMDXComponents(): MDXComponents {
  return components
}