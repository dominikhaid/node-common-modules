import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import DefaultProductSlider from 'components/Elements/Slider/DefaultProductSlider';
import {useRouter} from 'next/router';
import React from 'react';

interface ICard {
  item: {
    productName: string;
    productcode: string;
    productPhotos: string;
    productVendor: string;
    productLine: string;
    productCode: string;
    colors: string;
  };
}

const ProductHeader = ({item}) => {
  return (
    <div>
      <h3 className="text-2xl font-bold lg:text-4xl xl:text-4xl text-primary">
        {item.productName}
      </h3>
      <p className="text-xl mb-sm display-block">
        {item.productVendor} | {item.productLine}
      </p>
    </div>
  );
};

export default function DefaultCard({item}: ICard): React.ReactElement {
  const router = useRouter();

  const minWidth = '320px',
    maxWidth = '320px';

  return (
    <>
      <div
        className="overflow-hidden border-2 border-gray-light sm:mx-none lg:mx-none xl:mx-none md:mx-xl bg-gray-lightest shadow-container default-card my-4xl"
        style={{
          maxWidth: `${maxWidth}`,
          minWidth: `${minWidth}`,
          flex: '1 1 320px',
        }}
      >
        <DefaultProductSlider
          interval={3000}
          images={item.productPhotos
            .split(',')
            .map(photo => `/images/${photo}`)}
        />
        <div className="p-2xl lg:p-4xl">
          <ProductHeader item={item} />
          <div className="flex flex-wrap items-center justify-start border-t-2 xl:justify-start mt-2xl border-primary pt-lg lg:justify-start">
            <DefaultButton
              aria={`show details ${item.productName}`}
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                router.push(`/products/${item.productCode}`);
              }}
              className="flex-auto flex-grow-0 mx-none my-xs"
              type="primary"
              title="Details"
            />
          </div>
        </div>
      </div>
    </>
  );
}
