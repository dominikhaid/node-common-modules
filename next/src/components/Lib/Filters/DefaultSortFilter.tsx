import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import DropDownButton from 'components/Elements/Buttons/DropDownButton';
import SortAscendingOutlined from 'public/icons/phosphor-icons/assets/duotone/sort-ascending-duotone.svg';
import React, {useState} from 'react';
interface ISort {
  visible: boolean;
  products: IProduct[];
  setDatalist: (product: IProduct[]) => IProduct[];
  setForceRender: (val: boolean) => void;
  forceRender: boolean;
  title: string;
}

export default function DefaultSortFilter({
  products,
  setDatalist,
  setForceRender,
  forceRender,
  visible,
  title = 'Sort',
}: ISort): React.ReactElement {
  const [active, setActive] = useState(visible ? visible : false);

  const menu = [
    {
      title: 'Price (lowest first)',
      aria: 'Sort by lowst price frist',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setDatalist(
          products.sort(
            (a: {MSRP: number}, b: {MSRP: number}) => a.MSRP - b.MSRP,
          ),
        );
        setForceRender(!forceRender);
      },
    },
    {
      title: 'Price (highest first)',
      aria: 'Sort by highest price frist',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        products.sort(
          (a: {MSRP: number}, b: {MSRP: number}) => a.MSRP - b.MSRP,
        ),
          setForceRender(!forceRender);
      },
    },
    {
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        products.sort(
          (a: {MSRP: number}, b: {MSRP: number}) => a.MSRP - b.MSRP,
        ),
          setForceRender(!forceRender);
      },
      title: 'Name (a to z)',
      aria: 'Sort by name a to z',
    },
    {
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        products.sort(
          (a: {MSRP: number}, b: {MSRP: number}) => a.MSRP - b.MSRP,
        ),
          setForceRender(!forceRender);
      },
      title: 'Name (z to a)',
      aria: 'Sort by name z to a',
    },
  ];

  return (
    <DropDownButton
      type="icon"
      title={title}
      active={active}
      layout="grid"
      setActive={setActive}
      className="small"
      style={{height: '45px', width: '45px'}}
      icon={<SortAscendingOutlined />}
    >
      {menu.map(item => {
        return (
          <DefaultButton
            aria={item.aria}
            className="text-center rounded p-xs text-gray-dark w-100"
            key={item.title}
            type="ghost"
            title={item.title}
            onClick={(e: React.MouseEvent) => item.onClick(e)}
          />
        );
      })}
    </DropDownButton>
  );
}
