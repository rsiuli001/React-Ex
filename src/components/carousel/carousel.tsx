import { FC, useLayoutEffect, useState } from 'react';
import * as Strings from '../../constants/strings';
import './carousel.css';

interface ICarouselProps {
  image: string;
}

const Carousel: FC<ICarouselProps> = ({ image }: ICarouselProps): JSX.Element => {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWidth);
    return window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="container">
      <img
        src={image}
        width={width * 0.35}
        height={width * 0.2}
        alt={Strings.IMAGE_NOT_AVAILABLE}
      />
    </div>
  );
};

export default Carousel;
