'use client';

import NextLink from 'next/link';
import { Button, Link } from '@nextui-org/react';

const MainMenuPage: React.FunctionComponent = () => {
  return (
    <div className="main-container flex-col items-center">
      <div>
        <Button size="lg" color="primary" variant="faded">
          BIOGRAFÍA
        </Button>
      </div>
      <div className="my-10">
        <Button href="/laws" as={NextLink} size="lg" color="primary" variant="faded">
          LEYES DE NEWTON
        </Button>
      </div>
      <div>
        <Button size="lg" color="primary" variant="faded">
          EJERCICIOS
        </Button>
      </div>
      <Link underline="hover" as={NextLink} href="/" className="mt-[100px]">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default MainMenuPage;
