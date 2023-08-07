import { ReactNode } from 'react';
import { Container, Desc, Footer, Title, Image } from './banner.styles';

type Props = {
  className?: string;
  children?: ReactNode;
};

const Banner = ({ children, className }: Props) => {
  return (
    <Container className={['banner', className].join(' ')}>
      {children}
    </Container>
  );
}

Banner.Image = function BannerImage({
  src,
  alt,
  className,
}: { src: string; alt: string } & Props) {
  return (
    <Image
      src={src}
      alt={alt}
      className={['banner_image', className].join(' ')}
    />
  );
};

Banner.Title = function BannerTitle({ title, className }: { title: string } & Props) {
  return (
    <Title className={['banner_title', className].join(' ')}>{title}</Title>
  );
};

Banner.Desc = function BannerDesc({ desc, className }: { desc: string } & Props) {
  return <Desc className={['banner_desc', className].join(' ')}>{desc}</Desc>;
};

Banner.Footer = function BannerFooter({ className, children }: Props) {
  return (
    <Footer className={['baneer_footer', className].join(' ')}>
      {children}
    </Footer>
  );
};

export default Banner;