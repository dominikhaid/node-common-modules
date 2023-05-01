import DefaultImage from 'components/Elements/Images/DefaultImage';
import React, {useEffect, useState} from 'react';

interface IDots {
  images: string[];
  setPlay: (arg: boolean) => void;
  activeSlide: number;
  setActiveSlide: (arg: number) => void;
}

const CreateDots = ({
  images,
  setPlay,
  activeSlide,
  setActiveSlide,
}: IDots): React.ReactElement => {
  return (
    <div
      style={{margin: 'auto', marginTop: '-30px', width: 'max-content'}}
      className="slider-nav spaced"
    >
      {images.map((image, index) => (
        <button
          key={image + '-dot'}
          onClick={() => {
            setPlay(false);
            setActiveSlide(index);
          }}
          style={{height: '15px', width: '15px'}}
          className={
            index === activeSlide
              ? 'rounded-full opacity-100 p-none hover:opacity-100 slider-dot bg-primary'
              : 'rounded-full opacity-50 p-none hover:opacity-100 slider-dot bg-primary'
          }
        ></button>
      ))}
    </div>
  );
};

const CreateSlides = ({
  images,
  play,
  activeSlide,
  setActiveSlide,
  interval,
  width,
  layout,
  style = {},
  height,
  className = '',
}) => {
  let classListActive = 'slide-active animate-fadeIn p-4xl';

  if (process.env.STORYBOOK && process.env.STORYBOOK === 'true')
    classListActive = 'slide-active p-4xl';

  const imageInterval: ReturnType<typeof setTimeout> = setTimeout(
    () =>
      play &&
      setActiveSlide(
        !play
          ? activeSlide
          : activeSlide < images.length - 1
          ? activeSlide + 1
          : 0,
      ),
    interval,
  );

  useEffect(() => {
    play && imageInterval;

    return () => {
      clearTimeout(imageInterval);
    };
  }, [activeSlide, imageInterval, play]);

  return images.map(
    (image: string, index: number): React.ReactElement => (
      <div
        key={image}
        className={activeSlide === index ? classListActive : 'slide-hidden'}
        style={{...style, background: '#F5F5F5'}}
      >
        <style global jsx>{`
          .slide-active {
            display: initinal;
            width: calc(100%) !important;
            margin-left: 0px;
          }
          .slide-hidden {
            display: none;
          }
        `}</style>
        <DefaultImage
          src={image}
          alt="product slider image"
          width={width}
          height={height}
          layout={layout}
          className={className}
        />
      </div>
    ),
  );
};

interface ISlider {
  images: string[];
  interval: number;
  width?: number;
  height?: number;
  layout?: string;
  style?: React.CSSProperties;
  className?: string;
}

//TODO DEBUG THE INTERVAL
export default function DefaultProductSlider({
  images,
  interval = 1500,
  width = 200,
  height = 200,
  layout = 'responsive',
  style = {},
  className = '',
}: ISlider): React.ReactElement {
  const [activeSlide, setActiveSlide] = useState(0);
  const [play, setPlay] = useState(true);

  if (!images) return <></>;

  return (
    <>
      <CreateSlides
        images={images}
        width={width}
        style={style}
        layout={layout}
        className={className}
        height={height}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        play={play}
        interval={interval}
      />
      <CreateDots
        images={images}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        setPlay={setPlay}
      />
    </>
  );
}
