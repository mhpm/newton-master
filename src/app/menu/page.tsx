'use client';

import { Button } from '@/components';

const MainMenuPage: React.FunctionComponent = () => {
  return (
    <div className="main-container flex-col items-center">
      <div>
        <Button>BIOGRAFÍA</Button>
      </div>
      <div className="my-10">
        <Button>LEYES DE NEWTON</Button>
      </div>
      <div>
        <Button>EJERCICIOS</Button>
      </div>
      <Button mode="link" role="link" href="/" className='mt-[100px]'>
        Volver al Inicio
      </Button>
    </div>
  );
};

export default MainMenuPage;
