import NextLink from 'next/link';


function Link( {children, href, ...props}) {
  return (
    <NextLink href={ href }> {children } </NextLink>
  )
}

export default Link