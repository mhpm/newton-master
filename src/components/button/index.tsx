import Link from 'next/link';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IModes {
  [key:string]: string;
}

const modes: IModes = {
  primary: 'bg-sky-400',
  link: 'bg-transparent',
}

type Mode = {
  primary: string;
  secondary: string;
  link: string;
}

type mode = keyof Mode 

interface IButton {
  mode?: mode;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  role?: 'button' | 'link';
  href?: string;
};

const Button = ({ mode = 'primary', className, children, role = 'button', href = '', onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`${modes[mode as keyof IModes]} px-5 py-3 rounded-full font-semibold ${className}`}
    >
      {role === 'button' ? children : <Link className='' href={href}>{children}</Link>}
    </button>
  );
};

export default Button;
