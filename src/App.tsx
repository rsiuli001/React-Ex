import { FC, useEffect, useState } from 'react';
import './App.css';
import { ICarouselData } from './types/CarouselData';
import { MockApiData } from './data';
import randomNumberGenerator from './helper/randomNumberGenerator';
import { NEXT, PREVIOUS } from './constants/strings';
import { Buttons, Carousel } from './components';

const API_URL = '';

const App: FC = (): JSX.Element => {
  const [index, setIndex] = useState(0);
  const [carouselData, setCarouselData] = useState<Array<ICarouselData> | []>([]);

  useEffect(() => {
    if (API_URL) {
      fetchData();
    } else {
      setCarouselData(MockApiData);
    }
  }, []);

  const fetchData = () => {
    fetch(API_URL)
      .then((response: any) => {
        return response.json();
      })
      .then((data: Array<ICarouselData>) => {
        setCarouselData(data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const onPressNext = (): void => {
    if (index + 4 < carouselData.length) {
      setIndex(index + 4);
    }
  };

  const onPressPrevious = (): void => {
    if (index - 4 >= 0) {
      setIndex(index - 4);
    }
  };

  const renderCarousel = (): JSX.Element => (
    <div className="App-carousel">
      {carouselData.slice(index, index + 4).map(
        (element: ICarouselData, index: number): JSX.Element => (
          <Carousel
            key={index}
            image={element.images[randomNumberGenerator(element.images.length)]}
          />
        )
      )}
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        {renderCarousel()}
        <div className="App-button">
          <Buttons disable={index === 0} onPress={onPressPrevious} label={PREVIOUS} />
          <Buttons disable={index + 4 > carouselData.length} onPress={onPressNext} label={NEXT} />
        </div>
      </header>
    </div>
  );
};

export default App;
