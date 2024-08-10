import { AnchorHTMLAttributes } from 'react'

type Nook01Props = AnchorHTMLAttributes<HTMLOrSVGElement>

const Nook01 = ({...props}: Nook01Props) => {
  return (
    <svg {...props} viewBox="0 0 32 32" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M-1.39876e-06 0L0 32L32 32C14.3269 32 -6.26248e-07 17.6731 -1.39876e-06 0Z"></path></svg>
  )
}

type Nook02Props = AnchorHTMLAttributes<HTMLOrSVGElement>

const Nook02 = ({...props}: Nook02Props) => {
  return (
    <svg {...props} viewBox="0 0 96 123" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M0 0V123H95.6387C86.8111 123 78.696 118.154 74.5094 110.382L21.8448 12.6179C17.6582 4.84613 9.54312 3.05176e-05 0.715485 3.05176e-05L0 0Z"></path></svg>
  )
}

export { Nook01, Nook02 }

