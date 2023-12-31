'use client';

import { useEffect, useState } from 'react';
import { SpriteImage } from './sprite-animator.styles';
import { StaticImageData } from 'next/image';
import { CircularProgress } from '@nextui-org/react';

interface Props {
  image: StaticImageData;
  speed: number;
  className?: string;
}

const SpriteAnimator = ({ image, speed, className }: Props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const getImageSize = () => {
    const { height, width } = image;

    setWidth(width / speed);
    setHeight(height);
  };

  useEffect(() => {
    getImageSize();
  }, [getImageSize]);

  return (
    <div className={className}>
      {width ? (
        <SpriteImage
          width={width}
          height={height}
          url={image.src}
          speed={speed}
        />
      ) : (
        <CircularProgress color="primary" aria-label="Loading..." />
      )}
    </div>
  );
};

export default SpriteAnimator;
