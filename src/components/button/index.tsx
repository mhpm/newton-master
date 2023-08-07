import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
  };

const Button = ({className, children, onClick}: Props) => {
  return (
    <button onClick={onClick} className={`bg-sky-400 px-5 py-3 rounded-full font-semibold ${className}`}>{children}</button>
  )
}

export default Button