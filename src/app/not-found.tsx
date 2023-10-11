import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="main-container">
      <h2>Pagina no existente</h2>
      <p>
        Volver al <Link href={'/'}> Menu Principal </Link>
      </p>
    </div>
  );
};

export default NotFound;
