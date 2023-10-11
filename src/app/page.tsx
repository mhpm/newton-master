'use client';

import styled from 'styled-components';
import { SpriteAnimator } from '@/components';
import newtonSprite from '../../public/img/newton_welcome_sprite.png';
import NextLink from "next/link";
import { Button, Link } from '@nextui-org/react';
// import { useState } from 'react';
// import { useEffect } from 'react';

const CopyRight = styled.div`
  position: fixed;
  bottom: 20px;
  font-size: 16px;
  color: #7c7c7c;
`;

const Version = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 16px;
  color: #7c7c7c;
`;

interface INumbers {
  [key: string]: number;
}

// const alphabetic: INumbers = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6,
//   g: 7,
//   h: 8,
//   i: 9,
//   j: 10,
//   k: 11,
//   l: 12,
//   m: 13,
//   n: 14,
//   ñ: 15,
//   o: 16,
//   p: 17,
//   q: 18,
//   r: 19,
//   s: 20,
//   t: 21,
//   u: 22,
//   v: 23,
//   w: 24,
//   x: 25,
//   y: 26,
//   z: 27,
// };

export default function Home() {
  // const [main, setMain] = useState(true);
  // const getNumber = (name: string): number => {
  //   let result = 0;

  //   name.split('').forEach((element) => {
  //     result += alphabetic[element as keyof INumbers];
  //   });

  //   return result;
  // };

  // useEffect(() => {
  //   console.log(getNumber('genesis'))
  // },[]);

  return (
    <main className="main-container">
      <div className="text-center pt-16 md:w-1/2 xl:w-1/3">
        <SpriteAnimator
          className="flex justify-center items-center"
          image={newtonSprite}
          speed={4}
        />
        <h1 className="text-3xl font-semibold mt-5">
          Bienvenido a Isaac Newton App
        </h1>
        <p className="text-center text-xl my-7 text-neutral-400">
          Aplicación en la cual te mostraremos algo de la biografía del celebre
          científico Isaac Newton y sus 3 famosas leyes del movimiento.
        </p>
        <Button
          href="/menu"
          as={NextLink}
          size="lg"
          color="primary"
          variant="faded"
        >
          Continuar
        </Button>
      </div>
      <CopyRight>
        Developed by{' '}
        <Link
          showAnchorIcon
          isExternal
          underline="hover"
          href="https://www.linkedin.com/in/mhpm/"
        >
          Michelle Perez Morales
        </Link>{' '}
        &copy; 2023
      </CopyRight>
      <Version>
        <i>v</i> 1.0
      </Version>
    </main>
  );
}
