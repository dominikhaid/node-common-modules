import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import DropDownButton from 'components/Elements/Buttons/DropDownButton';
import TextDivider from 'components/Elements/Divider/TextDivider';
import InputFilter from 'components/Elements/Inputs/InputFilter';
import DollarIcon from 'public/icons/phosphor-icons/assets/duotone/currency-dollar-duotone.svg';
import FilterOutlined from 'public/icons/phosphor-icons/assets/duotone/funnel-duotone.svg';
import React, {useState} from 'react';
import uuid from 'react-uuid';
interface IFilter {
  visible: boolean;
  products: IProduct[];
  setDatalist: (data: IProduct[]) => void;
}

interface IFilterData {
  colors: any[];
  productLine: any[];
  vendors: any[];
  maxPrice: number;
  minPrice: number;
}

interface IFilterActive {
  products: IProduct[];
  filter: () => void;
  handleFilterChange: (
    val: string | number,
    grp: string,
    checked?: boolean,
  ) => void;
}

const ActiveFilter = ({
  products,
  filter,
  handleFilterChange,
}: IFilterActive): React.ReactElement => {
  return (
    <div className="absolute space-x-xs">
      {Object.keys(filter).map(grp => {
        if (typeof filter[grp] === 'object')
          return filter[grp].map((val: string | number) => {
            return (
              <DefaultButton
                aria={`remove filter ${val}`}
                title={'x ' + val}
                className="text-sm leading-5 rounded cursor-pointer py-none p-xs text-gray-dark bg-gray-lightest"
                key={`color${val}`}
                onClick={() => {
                  handleFilterChange(val, grp, true);
                }}
              />
            );
          });

        if (
          (grp === 'maxPrice' &&
            filter[grp] !==
              Math.max.apply(
                Math,
                products.map(function (o) {
                  return o.MSRP;
                }),
              )) ||
          (grp === 'minPrice' &&
            filter[grp] !==
              Math.min.apply(
                Math,
                products.map(function (o) {
                  return o.MSRP;
                }),
              ))
        )
          return (
            <DefaultButton
              aria={`remove filter`}
              title={
                grp === 'maxPrice'
                  ? 'x max. ' + filter[grp] + '$'
                  : 'x min. ' + filter[grp] + '$'
              }
              className="text-sm leading-5 rounded cursor-pointer py-none p-xs text-gray-dark bg-gray-lightest"
              key={`color${filter[grp]}`}
              onClick={() => {
                handleFilterChange(
                  grp === 'minPrice'
                    ? Math.min.apply(
                        Math,
                        products.map(function (o) {
                          return o.MSRP;
                        }),
                      )
                    : Math.max.apply(
                        Math,
                        products.map(function (o) {
                          return o.MSRP;
                        }),
                      ),
                  grp,
                );
              }}
            />
          );
      })}
    </div>
  );
};

interface ICheckList {
  filter: IFilterData;
  data: any[];
  title: string;
  group: string;
  handleFilterChange: (
    val: string | number,
    grp: string,
    checked: boolean,
  ) => void;
}

const CheckList = ({
  filter,
  group,
  data,
  title,
  handleFilterChange,
}: ICheckList): React.ReactElement => {
  return (
    <div className="flex flex-col justify-center">
      <TextDivider className="mt-xl mb-none" title={title} />
      {data.map(e => (
        <InputFilter
          className="leading-3 m-none p-none"
          key={uuid()}
          input={{
            name: e,
            group: group,
            label: e,
            aria: `filter ${e}`,
            type: 'checkbox',
            checked: (val: string | number) =>
              filter &&
              filter[group] &&
              filter[group].find((f: string | number) => {
                return f === val;
              }),
            onChange: (val: string | number, grp: string, checked: boolean) =>
              handleFilterChange(val, grp, checked),
          }}
        />
      ))}
    </div>
  );
};

export default function DefaultProductFilter({
  visible,
  products,
  setDatalist,
}: IFilter): React.ReactElement {
  const initData: IFilterData = {
    colors: [],
    productLine: [],
    vendors: [],
    maxPrice: Math.max(
      ...products.map(function (o) {
        return o.MSRP;
      }),
    ),
    minPrice: Math.min(
      ...products.map(function (o) {
        return o.MSRP;
      }),
    ),
  };

  const initFilter = JSON.parse(JSON.stringify(initData));

  initData.colors = [
    ...Array.from(
      new Set(
        products
          .map(e => e.colors)
          .join()
          .split(','),
      ),
    ),
  ];

  initData.productLine = [
    ...Array.from(new Set(products.map(e => e.productLine))),
  ];

  initData.vendors = [
    ...Array.from(new Set(products.map(e => e.productVendor))),
  ];

  const [active, setActive] = useState(visible ? visible : false);
  const [filter, setFilter] = useState(initFilter);

  if (!products || products.length < 1) return <></>;

  const handleFilterChange = (
    val: string | number,
    grp = '',
    checked = false,
  ): void => {
    if (!val) return;

    const tmp = Object.assign(filter);
    if (grp === 'maxPrice')
      tmp.maxPrice = grp === 'maxPrice' ? val : filter.maxPrice;
    if (grp === 'minPrice')
      tmp.minPrice = grp === 'minPrice' ? val : filter.minPrice;

    if (checked) {
      tmp[grp] = tmp[grp].filter((e: string | number) => e !== val);
    }

    if (!checked && grp !== 'maxPrice' && grp !== 'minPrice') {
      tmp[grp].push(val);
      tmp[grp] = [...Array.from(new Set(tmp[grp]))];
    }

    let data = products;
    data = data.filter(
      e => e.MSRP >= filter.minPrice && e.MSRP <= filter.maxPrice,
    );

    for (const key in filter) {
      if (filter.key && typeof filter[key] === 'object') {
        const tmpKey = Object.values(filter[key]);

        data = data.filter(h =>
          Object.values(h).some(l => new RegExp(tmpKey.join('|')).test(l)),
        );
      }
    }

    setFilter(tmp);
    setDatalist(data);
    return;
  };

  return (
    <div key={uuid()}>
      <DropDownButton
        aria={`open sorting filter dropdown`}
        type="icon"
        layout="grid"
        active={active}
        setActive={setActive}
        className="small btn-options-filter"
        style={{height: '45px', width: '45px'}}
        icon={<FilterOutlined />}
      >
        <CheckList
          filter={filter}
          title="Product Line"
          group="productLine"
          data={initData.productLine}
          handleFilterChange={handleFilterChange}
        />
        <CheckList
          filter={filter}
          title="Colors"
          group="colors"
          data={initData.colors}
          handleFilterChange={handleFilterChange}
        />
        <CheckList
          filter={filter}
          title="Vendors"
          group="vendors"
          data={initData.vendors}
          handleFilterChange={handleFilterChange}
        />
        <div className="flex flex-col justify-center">
          <TextDivider className="mt-xl mb-xs" title={'Price'} />
          <InputFilter
            className="leading-3 m-none p-none"
            input={{
              name: 'min-price',
              aria: 'minimum price filter',
              group: 'minPrice',
              prefix: [
                <DollarIcon style={{width: '20px'}} key={'dollar-min'} />,
                <span>min.</span>,
              ],
              type: 'range',
              unit: '$',
              defaultValue: filter.minPrice,
              min: Math.min.apply(
                Math,
                products.map(function (o) {
                  return o.MSRP;
                }),
              ),
              max: Math.max.apply(
                Math,
                products.map(function (o) {
                  return o.MSRP;
                }),
              ),
              onChange: (val: string | number, grp: string) =>
                handleFilterChange(val, grp),
            }}
          />

          <InputFilter
            className="leading-3 m-none p-none"
            input={{
              name: 'max-price',
              group: 'maxPrice',
              aria: 'maximum price filter',
              prefix: [
                <DollarIcon style={{width: '20px'}} key={'dollar-max'} />,
                <span>max.</span>,
              ],
              type: 'range',
              unit: '$',
              defaultValue: filter.maxPrice,
              min: Math.min.apply(
                Math,
                products.map(function (o) {
                  return o.MSRP;
                }),
              ),
              max: Math.max.apply(
                Math,
                products.map(function (o) {
                  return o.MSRP;
                }),
              ),
              onChange: (val: string | number, grp: string) =>
                handleFilterChange(val, grp),
            }}
          />
        </div>
      </DropDownButton>
      <ActiveFilter
        products={products}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}
